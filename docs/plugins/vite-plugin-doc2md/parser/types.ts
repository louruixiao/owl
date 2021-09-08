import { FileLoader } from './Loader';

export interface LoaderOptions {
	root?: string;
	scanDirs: string[] | string;
	fileTypes: string[];
	alias?: Record<string, string>;
}
export interface RenderOptions {
	output: string;
}
export interface ParserOptions {
	root: string;
	renderOptions?: RenderOptions;
	loader?: FileLoader;
	loaderOptions: LoaderOptions;
}

export enum DocType {
	PROP = 'prop',
	METHOD = 'method',
	SLOT = 'slot'
}

export interface ParserIfc<N> {
	name: string;
	result: N | undefined;
	run(input?: string): void;
	doParser(extract: ExtractResult | ExtractResult[] | string): N | undefined;
}

export interface ExtractResult {
	matched: string[];
	offset: number;
	type: string;
}

export interface Tag {
	tagName: string;
	name?: string;
	description?: string;
	type?: string;
	defineTags?: Tag[];
}

export interface Comment {
	description: string;
	isPrivate: boolean;
	tags?: Tag[];
	//挂载名称 被注释的属性或方法名
	name: string;
	children?: Comment[];
}

export interface PropComment extends Comment {
	kind: DocType.PROP;
	//可选值
	values?: string;
	//默认值
	defaultValue?: string;
	//类型
	type?: string;
	//必填
	required: boolean;
}

export interface MethodComment extends Comment {
	kind: DocType.METHOD;
	//传参类型
	parameters?: Array<Tag>;
	syntaxTags?: Array<Tag>;
	syntax: Array<string>;
}

export interface SlotComment extends Comment {
	kind: DocType.SLOT;
	vBind?: Tag[];
}

export function isPropComment(comment: Comment): comment is PropComment {
	return (comment as PropComment).kind === DocType.PROP;
}

export function isMethodComment(comment: Comment): comment is MethodComment {
	return (comment as MethodComment).kind === DocType.METHOD;
}
