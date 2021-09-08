/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderFile } from 'ejs';
import fs from 'fs';
import { kebabCase } from 'lodash';
import path from 'path/posix';
import { Comment, isMethodComment, MethodComment, ParserOptions, SlotComment } from '../parser/types';
import { VueComponent } from '../parser/VueParser';
function byteLength(str: string) {
	if (!str) return 0;
	return str.length + chineseCharacterCount(str);
}

function chineseCharacterCount(str: string) {
	const re = /[\u4E00-\u9FA5]/g; //测试中文字符的正则
	str = str ?? '';
	const count = str.match(re);
	return count === null ? 0 : count.length;
}

const Style = {
	none(str: string) {
		return str;
	},
	bold(str: string) {
		return str ? `**${str}**` : '';
	},
	code(str: string) {
		return str ? `\`${str}\`` : '';
	}
};

const propTableHeader = {
	name: {
		title: '名称',
		style: (str: string) => {
			return Style.bold(kebabCase(str));
		}
	},
	description: {
		title: '描述',
		style: Style.none
	},
	type: {
		title: '类型',
		style: Style.none
	},
	defaultValue: {
		title: '默认值',
		style: Style.code
	},
	values: {
		title: '可选值',
		style: Style.none
	},
	required: {
		title: '必填',
		style: Style.bold
	}
};

const methodTableHeader = {
	name: {
		title: '语法',
		style: Style.bold
	},
	description: {
		title: '描述',
		style: Style.none
	},
	parameters: {
		title: '参数说明',
		style: Style.none
	}
};

const slotTableHeader = {
	name: {
		title: '名称',
		style: Style.bold
	},
	description: {
		title: '描述',
		style: Style.none
	},
	vBind: {
		title: 'v-slot 数据',
		style: Style.none
	}
};

function renderTable(header: any, data: any) {
	const rows: string[] = [];
	const widths: any = {};
	if (!data || data.length === 0) return;

	//获取每列最宽的字符串个数
	data.forEach((child: any) => {
		for (const name in header) {
			child[name] = header[name].style(child[name]);
			const length = byteLength(' ' + child[name] + ' ');
			if (child[name] && (!widths[name] || widths[name] < length)) {
				widths[name] = length;
			}
		}
	});

	//处理表头
	const tableHeader: string[] = [];
	const hr: string[] = [];
	for (const name in widths) {
		const padCount = widths[name] - chineseCharacterCount(header[name].title);
		tableHeader.push((header[name].title ?? '').padEnd(padCount, ' ') + ' ');
		hr.push(''.padEnd(widths[name], '-') + ' ');
	}
	rows.push(`| ${tableHeader.join('|')} |`);
	rows.push(`| ${hr.join('|')} |`);
	// 处理数据
	data.forEach((child: any) => {
		const row: string[] = [];
		for (const name in widths) {
			const length = widths[name];
			const text = child[name];
			const padCount = length - chineseCharacterCount(text);
			const str = (child[name] ?? '').padEnd(padCount, ' ') + ' ';
			row.push(str);
		}
		rows.push(`| ${row.join('|')} |`);
	});

	return rows.join('\n');
}

function renderProps(props: any) {
	return renderTable(propTableHeader, props);
}

function renderMethods(methods: any, setup: any) {
	const mlist: Comment[] = [];
	if (methods && methods.length > 0) {
		mlist.push(...methods.filter((method: any) => !method.isPrivate));
	}

	if (setup && setup.length > 0) {
		mlist.push(...setup.filter((method: any) => !method.isPrivate && isMethodComment(method)));
	}
	const arr = mlist.map((m) => {
		const mt = m as MethodComment;
		const name = mt.name + mt.syntax;
		const description = mt.description;
		const parameters = mt.parameters
			?.map((p) => {
				return p.name ? `${p.name} ${(p.type || '')?.replace('{', '`').replace('}', '`')} ${p.description}` : '';
			})
			.join('<br>');
		return {
			name,
			description,
			parameters
		};
	});
	return renderTable(methodTableHeader, arr);
}

function renderSlots(slots: any) {
	if (!slots) return;
	const arr = slots.map((slot: any) => {
		const st = slot as SlotComment;
		const name = st.name;
		const description = st.description;
		const vBind = st.vBind
			?.map((b) => {
				let bind = '';
				if (b.name) {
					bind += b.name + ' ';
				}
				if (b.type) {
					bind += Style.code(b.type) + ' ';
				}
				if (b.description) {
					bind += b.description;
				}
				return bind;
			})
			.join('<br>');
		return {
			name,
			description,
			vBind
		};
	});
	return renderTable(slotTableHeader, arr);
}

export function render(options: ParserOptions, components: VueComponent[]): void {
	components.forEach((component) => {
		const { props, methods, setup, slots } = component;

		const ptable = renderProps(props?.children);

		const mtable = renderMethods(methods?.children, setup?.children);

		const stable = renderSlots(slots);

		renderFile(path.resolve(__dirname, './tpl.ejs'), { component, ptable, mtable, stable }, (err, result) => {
			if (err) {
				console.log(err);
			}
			if (result) {
				if (options.renderOptions?.output) {
					const destFile = path.join(options.root, options.renderOptions?.output, component.name + '.md');
					fs.writeFileSync(destFile, result);
				}
			}
		});
	});
}
