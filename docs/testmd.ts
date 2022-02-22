import path from 'path';
import { renderMarkdown } from './plugins/vite-plugin-doc2md';
function resolve(filePath: string): string {
	return path.join(__dirname, filePath);
}

const result = renderMarkdown(
	{
		root: path.resolve(__dirname, '../'),
		renderOptions: {
			output: 'docs/components'
		},
		loaderOptions: {
			scanDirs: 'src',
			fileTypes: ['.ts', '.vue'],
			alias: {
				'@owl': resolve('../src/')
			}
		}
	},
	'/Users/congcong/Public/projects/yiird/owl/src/core/logic/logic-icon.ts'
);
