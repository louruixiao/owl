import { AbstractRegExpParser } from './AbstractParser';
import { DocType, ExtractResult, SlotComment, Tag } from './types';

export interface TagAttr {
	type: string;
	name: string;
	value: string;
	comments?: string[];
}

export interface TagNode {
	name: string;
	content?: string;
	type: string;
	attr: TagAttr[];
	comments?: string[];
	children?: TagNode[];
}

export interface TemplateComments {
	slots?: SlotComment[];
	tagNodes: TagNode[];
}

export class TemplateParser extends AbstractRegExpParser<TemplateComments> {
	constructor(input?: string) {
		super(
			'template',
			{
				ELEMENT_START: /^\s*\<[^\>!\/\s]+[\s\n\>]/i,
				ELEMENT_END: /^\s*\<\/[\w\-]*[1-6]?\>/i,
				ELEMENT_COMMENT: /^\s*\<!--[^\>]*--\>/i,
				//表达式
				ELEMENT_ATTR: /^\s*\:?(\w|\-)+\=("|')[^"]*("|')/i
			},
			input
		);
	}

	private transformAst(extracts: ExtractResult[]): TagNode[] {
		const stack: TagNode[] = [];
		const comments: string[] = [];
		const result: TagNode[] = [];
		extracts.forEach((extract) => {
			const matched = extract.matched[0];
			switch (extract.type) {
				case 'ELEMENT_START': {
					const element: TagNode = {
						name: matched.replace(/[<>\s]/g, ''),
						type: 'tag',
						content: matched,
						attr: [],
						children: []
					};

					if (comments.length > 0) {
						element.comments = Object.assign([], comments);
						comments.splice(0, comments.length);
					}
					stack.push(element);
					break;
				}
				case 'ELEMENT_ATTR': {
					const element = stack[stack.length - 1];
					const group = matched.match(/([^=\s]*)\s*=\s*[\'|\"]{1}([\s\S]*)[\'|\"]{1}/i);
					if (group) {
						const attr: TagAttr = {
							type: 'attr',
							name: group[1],
							value: group[2]
						};
						if (comments.length > 0) {
							element.comments = Object.assign([], comments);
							comments.splice(0, comments.length);
						}
						element.content += matched;
						element.attr?.push(attr);
					}
					break;
				}
				case 'ELEMENT_END': {
					const element = stack.pop();
					if (element) {
						element.content += matched;
						if (stack.length > 0) {
							const parent = stack[stack.length - 1];
							parent.children?.push(element);
							parent.content = (parent.content || '') + element.content;
						} else {
							result.push(element);
						}
					}
					break;
				}
				case 'ELEMENT_COMMENT': {
					const element = stack[stack.length - 1];
					element.content += matched;
					comments.push(matched.replace(/(^\s*)|(\s*$)/g, ''));
					break;
				}
			}
		});
		return result;
	}

	private parseComment(tagNodes: TagNode[]): SlotComment[] {
		let slots: SlotComment[] = [];
		tagNodes.forEach((tagNode) => {
			const comments = tagNode.comments;
			if (comments && comments.length > 0) {
				const slotRegex = /(<!--\s*)@(slot)\s*(\S*)\s*(\S*)(\s*-->)/i;

				const slotComment = comments.find((comment) => {
					const matched = comment.match(slotRegex);
					return matched && matched.length > 0;
				});

				let slotItems = slotComment?.replace(/\s{2}/g, ' ').match(slotRegex);
				if (slotItems) {
					slotItems = slotItems?.filter((commentItem) => commentItem !== '');
				}

				let name = 'default',
					description;
				const tag = tagNode.attr.find((att) => att.name === 'name');

				if (slotItems) {
					if (slotItems.length === 6) {
						name = slotItems[3];
						description = slotItems[4];
					} else if (slotItems.length === 5) {
						if (tag) {
							name = tag.value;
						}
						description = slotItems[3];
					} else if (slotItems.length === 4) {
						if (tag) {
							name = tag.value;
						} else {
							description = '默认插槽';
						}
					}
				}

				const vBindRegex = /(<!--\s*)@(vBind)\s*([\S\n\s\t]*)(\s*-->)/i;

				const vBindComments = comments.filter((comment) => {
					const matched = comment.match(vBindRegex);
					return matched && matched.length > 0;
				});

				let vBinds: Tag[] = [];

				if (vBindComments) {
					vBindComments.forEach((vBindComment) => {
						let vBindItems = vBindComment.replace(/\s{2}/g, ' ').match(vBindRegex);
						if (!vBindItems || vBindItems.length !== 5) {
							return;
						}
						const tag: Tag = {
							tagName: 'v-bind'
						};
						const tagItems = vBindItems[3].split(' ');
						tag.name = tagItems[1];
						tag.type = tagItems[0];
						if (tagItems.length >= 3) {
							tag.description = tagItems[2];
						}
						if (!tag.name || !tag.type) {
							return;
						}
						vBinds.push(tag);
					});
				}
				const bindTag = tagNode.attr.find((att) => att.name === 'v-bind');
				if (vBinds.length === 0 && bindTag) {
					vBinds.push({
						tagName: 'v-bind',
						description: bindTag.value
					});
				}
				// '{  a:'1', // 啊啊假按揭啊  b:2 // 嗖嗖嗖嗖  } '

				if (name && description) {
					slots.push({
						kind: DocType.SLOT,
						isPrivate: false,
						name,
						description,
						vBind: vBinds
					});
				}
			}
			if (tagNode.children && tagNode.children.length > 0) {
				slots = slots.concat(this.parseComment(tagNode.children));
			}
		});
		return slots;
	}

	doParser(extracts: ExtractResult[]): TemplateComments | undefined {
		const nodes = this.transformAst(extracts);
		const comments = this.parseComment(nodes);
		const comment: TemplateComments = {
			tagNodes: nodes,
			slots: comments
		};
		return comment;
	}

	rest(): boolean {
		return true;
	}
}
