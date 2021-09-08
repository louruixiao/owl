import { HmrContext, Plugin } from 'vite';
import { render } from './md';
import { FileLoader } from './parser/Loader';
import { ParserOptions } from './parser/types';
import { VueComponent, VueParser } from './parser/VueParser';

export function parserAllVue(options: ParserOptions): VueComponent[] {
	if (!options.loader) {
		options.loader = new FileLoader({ ...options.loaderOptions, root: options.root });
	}
	const arr: VueComponent[] = [];
	const fileMap = options.loader.fileMap;
	fileMap.getFileByExt('.vue')?.forEach((filePath) => {
		const vueParser = new VueParser(options, filePath);
		const result = vueParser.run();
		if (result) {
			arr.push(result);
		}
	});
	return arr;
}

export function parserVue(options: ParserOptions, filePath: string): VueComponent[] {
	if (!options.loader) {
		options.loader = new FileLoader({ ...options.loaderOptions, root: options.root });
	}
	const arr: VueComponent[] = [];
	if (filePath.endsWith('.vue')) {
		const vueParser = new VueParser(options, filePath);
		const result = vueParser.run();
		if (result) {
			arr.push(result);
		}
	} else {
		options.loader.getReferrer(filePath).forEach((vueFile) => {
			const vueParser = new VueParser(options, vueFile);
			const result = vueParser.run();
			if (result) {
				arr.push(result);
			}
		});
	}

	return arr;
}

export function renderMarkdown(options: ParserOptions, filepath?: string): void {
	let result;
	if (filepath) {
		result = parserVue(
			{
				...options
			},
			filepath
		);
	} else {
		result = parserAllVue(options);
	}
	if (result && result.length > 0) {
		render(options, result);
	}
}

export { FileLoader, VueParser };

// renderMarkdown(
// 	{
// 		root: path.resolve(__dirname, '../../../owl/'),
// 		renderOptions: {
// 			output: 'docs/components'
// 		},
// 		loaderOptions: {
// 			scanDirs: 'src',
// 			fileTypes: ['.ts', '.vue']
// 		}
// 	},
// 	'/Users/congcong/Public/projects/yiird/owl/src/core/logic/logic-button.ts'
// );

export function extractCommentsPlugin(options: ParserOptions): Plugin {
	return {
		name: 'extract-comments-plugin',
		apply: 'serve',
		handleHotUpdate(ctx: HmrContext) {
			renderMarkdown(options, ctx.file);
			/* fs.writeFileSync(file, ctx.file + '\n', {
				flag: 'a+'
			}); */
		}
	};
}
