import { tsquery } from '@phenomnomnominal/tsquery';
import path from 'path';
import {
	ArrowFunction,
	FunctionDeclaration,
	FunctionExpression,
	getJSDocPrivateTag,
	getJSDocPublicTag,
	Identifier,
	ImportDeclaration,
	isArrayLiteralExpression,
	isArrowFunction,
	isBlock,
	isCallExpression,
	isExportAssignment,
	isFunctionDeclaration,
	isFunctionExpression,
	isIdentifier,
	isJSDoc,
	isJSDocParameterTag,
	isJSDocPropertyTag,
	isJSDocTypedefTag,
	isMethodDeclaration,
	isObjectLiteralExpression,
	isPropertyAssignment,
	isSpreadAssignment,
	isStringLiteral,
	isVariableDeclaration,
	JSDoc,
	JSDocLink,
	JSDocPropertyTag,
	JSDocTag,
	JSDocText,
	MethodDeclaration,
	Node,
	NodeArray,
	SourceFile,
	SyntaxKind,
	VariableDeclaration
} from 'typescript';
import { AbstractParser } from './AbstractParser';
import { FileLoader } from './Loader';
import { Comment, DocType, MethodComment, ParserOptions, PropComment, Tag } from './types';

export interface ScriptComments {
	name: string;
	description?: string;
	props: Comment;
	methods: Comment;
	setup: Comment;
}

type AssetsParserOptions = {
	laoder: FileLoader;
	relativeFile: string;
	imports: Map<string, string>;
	variables: Map<string, Node>;
	localVariables?: Map<string, Node>;
	selector: string;
	parserOptions: ParserOptions;
};

function resolvePath(filePath: string, relativePath: string): string {
	return path.resolve(filePath, '../', relativePath);
}

/**
 *
 * 用于解析Ts语法树获取注释数据
 * @param {SourceFile} source - 元数据抽象语法树
 * @param {AssetsParserOptions} options - 解析配置
 * @returns
 */
export function parserTs(source: SourceFile, options: AssetsParserOptions): Array<Comment> {
	if (!options.selector) return [];
	options.imports = getImporters(source);
	options.variables = getVariables(source);
	const selector = options.selector.replace(/\s{2}/g, '').replace(/\t/g, '').trim();

	const properties = tsquery(source, selector, {
		visitAllChildren: true
	});

	const result = new Array<Comment>();
	properties.forEach((property) => {
		result.push(...parseNode(property, options));
	});
	return result;
}

function parseNode(property: Node, options: AssetsParserOptions): Array<Comment> {
	const result = new Array<Comment>();
	if (!property) return [];
	options.localVariables = getVariables(property);
	if (isPropertyAssignment(property)) {
		//处理属性定义
		let comment: Comment;
		const name = property.name.getText();
		const jsDoc = getJsDocChild(property);
		if (jsDoc) {
			comment = parseComment(name, jsDoc);
		} else {
			comment = {
				description: '',
				isPrivate: false,
				name: name
			};
		}
		if (isStringLiteral(property.initializer)) {
			comment.description = property.initializer.getText().replace(/\'/g, '');
		} else {
			comment.children = parseNode(property.initializer, options);
		}

		result.push(comment);
	} else if (isObjectLiteralExpression(property)) {
		// 处理对象表达式
		property.properties.forEach((proper) => {
			result.push(...parseNode(proper, options));
		});
	} else if (isSpreadAssignment(property)) {
		// 处理解构
		result.push(...parseNode(property.expression, options));
	} else if (isIdentifier(property)) {
		// 标识符
		const identifier = property.getText().replace(/\'/g, '');
		let variable = options.localVariables ? options.localVariables.get(identifier) || options.variables.get(identifier) : undefined;
		if (variable) {
			result.push(...parseNode(variable, options));
		} else {
			const comments = parsePropsFromImport(identifier, options);

			if (comments) {
				result.push(...comments);
			}
		}
	} else if (isMethodDeclaration(property) || isArrowFunction(property)) {
		const jsDoc = getJsDocChild(property);
		const name = property.name ? property.name.getText() : undefined;
		let comment: Comment;
		if (jsDoc) {
			const tags: Tag[] = [];
			// 处理方法定义
			property.parameters.forEach((param) => {
				const tag: Tag = {
					tagName: 'param',
					name: param.name.getText(),
					type: param.type?.getText()
				};
				tags.push(tag);
			});

			comment = parseComment(property.name.getText(), jsDoc);
			comment.tags?.push(...tags);
			result.push(comment);
		}

		// 提取setup中expose暴露的实例方法
		const returnNode = returnStatement(property);
		if (property.name && property.name.getText() === 'setup') {
			comment = {
				description: '',
				isPrivate: false,
				name: name!
			};
			if (isCallExpression(returnNode)) {
				const name = returnNode.expression.getText().replace(/\'/g, '');
				let variable = options.localVariables ? options.localVariables.get(name) || options.variables.get(name) : undefined;
				if (variable) {
					const methodComments = parseNode(variable, options);
					comment.children = methodComments;
				} else {
					const methodComments = parseSetupMethodsFromImport(name, options);
					if (methodComments) {
						comment.children = methodComments;
					}
				}
			} else if (isObjectLiteralExpression(returnNode)) {
				const methodComments = parseNode(returnNode, options);
				comment.children = methodComments;
			}
			result.push(comment);
		} else {
			result.push(...parseNode(returnNode, options));
		}
	} else if (isExportAssignment(property)) {
		if (isCallExpression(property.expression)) {
			const name = (<Identifier>property.expression.expression).text;
			const jsDoc = getJsDocChild(property);
			if (jsDoc) {
				result.push(parseComment(name, jsDoc));
			}
		}
	} else if (isVariableDeclaration(property)) {
		if (property.initializer) {
			result.push(...parseNode(property.initializer, options));
		}
	}
	return result;
}

/**
 * 获取import源码转为ast
 * @param importIdentifier
 * @param options
 * @returns
 */
function getAstFromImport(importIdentifier: string, options: AssetsParserOptions): SourceFile | undefined {
	const ref = options.imports?.get(importIdentifier);
	if (!ref) return;
	const alias = options.parserOptions.loader!.getAlias()?.filter((alias) => ref.startsWith(alias));
	let refFilePath;
	if (alias && alias.length > 0) {
		let aliasMapping = options.laoder.getAliasMapping(alias[0])!;
		if (alias[0].endsWith('/')) {
			if (!aliasMapping?.endsWith('/')) {
				aliasMapping += '/';
			}
		}
		refFilePath = (ref + '.ts').replace(alias[0], aliasMapping).replace('//', '/');
	} else {
		refFilePath = resolvePath(options.relativeFile, ref + '.ts');
	}
	options.relativeFile = refFilePath;
	const source = options.laoder.getSource(refFilePath);
	if (source) {
		return tsquery.ast(source);
	}
}

/**
 * 解析导入对象
 * @param importIdentifier 导入对象名
 * @param options 配置项
 * @returns
 */
function parsePropsFromImport(importIdentifier: string, options: AssetsParserOptions): Comment[] | undefined {
	const opt = {
		...options,
		selector: `
        	VariableStatement VariableDeclaration[name.name = '${importIdentifier}'] > AsExpression > ObjectLiteralExpression
        `
	};

	const sourceAst = getAstFromImport(importIdentifier, opt);
	if (sourceAst) {
		return parserTs(sourceAst, opt);
	}
}

function parseSetupMethodsFromImport(importIdentifier: string, options: AssetsParserOptions): Comment[] | undefined {
	const opt = {
		...options,
		selector: `VariableStatement VariableDeclaration[name.name = '${importIdentifier}']`
	};

	const sourceAst = getAstFromImport(importIdentifier, opt);
	if (sourceAst) {
		return parserTs(sourceAst, opt);
	}
}

function getJsDocChild(property: Node): JSDoc | undefined {
	const jsDoc = property.getChildren().find((child) => {
		if (isJSDoc(child)) {
			return child;
		}
	});
	return jsDoc as JSDoc;
}

function parseComment(name: string, jsDoc: JSDoc): Comment {
	const originalTags = jsDoc.tags;
	const tags: Tag[] = [];
	originalTags?.forEach((originalTag: JSDocTag) => {
		tags.push(parseTag(originalTag));
	});
	const isPrivate = !!getJSDocPrivateTag(jsDoc);
	//@public 优先
	const isPublic = getJSDocPublicTag(jsDoc);
	const comment: Comment = {
		name,
		isPrivate: isPublic ? false : isPrivate,
		description: parseDescription(jsDoc.comment),
		tags
	};
	const isProp = tags.find((tag) => tag.tagName === 'prop');
	const isMethod = tags.find((tag) => tag.tagName === 'method');
	if (isMethod) {
		return transformMethodComment(comment, tags, jsDoc);
	}

	if (isProp) {
		return transformPropComment(comment, tags, jsDoc);
	}

	return comment;
}

/**
 * 解析注释中的标签
 * @param originalTag 注释中的标签 例如 @prop @private 等
 * @returns
 */
function parseTag(originalTag: JSDocTag): Tag {
	const tag: Tag = {
		tagName: originalTag.tagName.getText()
	};
	if (isJSDocParameterTag(originalTag) || isJSDocPropertyTag(originalTag)) {
		tag.name = originalTag.name.getText();
		tag.type = originalTag.typeExpression?.getText();
	} else if (isJSDocTypedefTag(originalTag)) {
		tag.defineTags = [];
		const nodes = tsquery(originalTag, 'JSDocPropertyTag');
		nodes.forEach((node) => {
			tag.defineTags?.push(parseTag(<JSDocPropertyTag>node));
		});
	}
	tag.description = parseDescription(originalTag.comment);

	return tag;
}

function parseDescription(description: String | NodeArray<JSDocText | JSDocLink> | undefined): string {
	if (description !== undefined) {
		if (typeof description === 'string') {
			return description.replace('\n', '<br>');
		} else {
			(<NodeArray<JSDocText | JSDocLink>>description).map((item, index) => {
				//TODO 待处理 JSDocText | JSDocLink
				console.log(item, index);
			});
		}
	}
	return '';
}

function transformPropComment(comment: Comment, tags: Tag[], jsDoc: JSDoc): PropComment {
	const valuesTag = tags.find((tag) => tag.tagName === 'values');
	const propComment: PropComment = {
		kind: DocType.PROP,
		required: false,
		...comment
	};
	//const defaultTag = tags.find((tag) => tag.tagName === 'default');
	if (valuesTag) {
		propComment.values = valuesTag.description;
	}

	const defaultValue = getPropInfo(jsDoc, 'default');
	const required = getPropInfo(jsDoc, 'required');
	const type = getPropInfo(jsDoc, 'type');
	if (defaultValue) {
		propComment.defaultValue = defaultValue;
		propComment.type = type;
	}
	if (required) {
		propComment.required = new Boolean(required).valueOf();
	}
	return propComment;
}

/**
 * 变换处理方法注释
 * @param comment
 * @param tags
 * @param jsDoc
 * @returns
 */
function transformMethodComment(comment: Comment, tags: Tag[], jsDoc: JSDoc): MethodComment {
	let method = jsDoc.parent;
	let methodComment: MethodComment = {
		kind: DocType.METHOD,
		syntax: [],
		parameters: tags.filter((tag) => tag.tagName === 'param'),
		syntaxTags: tags.filter((tag) => tag.tagName === 'syntax'),
		...comment
	};

	let parameters;

	if (isFunctionNode(method)) {
		parameters = method.parameters;
	} else if (isPropertyAssignment(method) && isFunctionNode(method.initializer)) {
		parameters = method.initializer.parameters;
	}
	if (parameters && parameters.length > 0) {
		methodComment.syntax.push(`(${parameters.map((parameter) => parameter.getText()).join(',')})`);
	}

	return methodComment;
}

function isFunctionNode(node: Node): node is MethodDeclaration | FunctionDeclaration | FunctionExpression | ArrowFunction {
	return isMethodDeclaration(node) || isFunctionExpression(node) || isFunctionDeclaration(node) || isArrowFunction(node);
}

function getPropInfo(jsDoc: Node, keyword: string) {
	const selector = transSelector(`
	ObjectLiteralExpression  > [name.name="${keyword}"] > *:last-child
	`);
	const nodes = tsquery(jsDoc.parent, selector, {
		visitAllChildren: true
	});
	const node = nodes[0];
	if (!node) return node;
	if (
		node.kind === SyntaxKind.TrueKeyword ||
		node.kind === SyntaxKind.FalseKeyword ||
		node.kind === SyntaxKind.StringLiteral ||
		isObjectLiteralExpression(node) ||
		isArrayLiteralExpression(node)
	) {
		return node.getText();
	} else if (isFunctionExpression(node) || isBlock(node) || isArrowFunction(node)) {
		return returnStatement(node)
			.getText()
			.replace(/\n{2}/g, '<br>')
			.replace(/[\n|\t]*/g, '');
	}
}

function getImporters(ast: SourceFile): Map<string, string> {
	const selector = 'ImportDeclaration';
	const nodes = tsquery(ast, selector);
	const map = new Map<string, string>();
	nodes.map((node) => {
		const importer = (<ImportDeclaration>node).moduleSpecifier.getText().replace(/[\s|\'|\"]/g, '');
		tsquery(node, 'ImportClause Identifier').forEach((nameNode) => {
			if (isIdentifier(nameNode)) {
				map.set(nameNode.getText(), importer);
			}
		});
	});
	return map;
}

function getVariables(ast: SourceFile | Node): Map<string, Node> {
	const selector = 'VariableDeclaration';
	const nodes = tsquery(ast, selector);
	const map = new Map<string, Node>();
	nodes.map((node) => {
		const name = (<VariableDeclaration>node).name.getText().trim();
		const variable = (<VariableDeclaration>node).initializer;
		if (variable) {
			map.set(name, variable);
		}
	});
	return map;
}

export class ScriptParser extends AbstractParser<ScriptComments> {
	fileLoader: FileLoader;
	filePath: string;
	options: ParserOptions;

	constructor(options: ParserOptions, filePath: string, input?: string) {
		super('script', input);
		this.filePath = filePath;
		this.fileLoader = options.loader!;
		this.options = options;
	}

	run(input?: string): ScriptComments | undefined {
		input = input || this.input;
		if (input) {
			return this.doParser(input);
		}
	}
	doParser(extract: string): ScriptComments | undefined {
		const ast = tsquery.ast(extract);

		const finalOptions = {
			parserOptions: this.options,
			relativeFile: this.filePath,
			laoder: this.fileLoader,
			imports: getImporters(ast),
			variables: getVariables(ast)
		};

		const comments = parserTs(ast, {
			...finalOptions,
			selector: `
				ExportAssignment ObjectLiteralExpression > [name.name='name'],
				ExportAssignment ObjectLiteralExpression > [name.name='props'],
				ExportAssignment ObjectLiteralExpression > [name.name='methods'],
				ExportAssignment ObjectLiteralExpression > [name.name='setup']
			`
		});

		const exportComments = parserTs(ast, {
			...finalOptions,
			selector: `
            ExportAssignment
        `
		});

		const scriptNode: ScriptComments = {
			name: '',
			description: exportComments[0]?.description,
			props: {} as Comment,
			methods: {} as Comment,
			setup: {} as Comment
		};
		comments.map((comment) => {
			switch (comment.name) {
				case 'name': {
					scriptNode.name = comment.description;
					break;
				}
				case 'props': {
					scriptNode.props = comment;
					break;
				}
				case 'methods': {
					scriptNode.methods = comment;
					break;
				}
				case 'setup': {
					scriptNode.setup = comment;
					break;
				}
			}
		});
		return scriptNode;
	}
	rest(): boolean {
		return false;
	}
}

const transSelector = (slr: string): string => {
	return slr.replace(/\s{2}/g, '').replace(/\t/g, '').trim();
};

/**
 * 获取方法节点的返回值
 * @param node AST节点
 * @returns
 */
const returnStatement = (node: Node): Node => {
	const returns = tsquery(node, 'Block > ReturnStatement > *:nth-child(2)', {
		visitAllChildren: true
	});
	return returns[returns.length - 1];
};
