import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import { defineConfig } from 'vite';
import { extractCommentsPlugin } from './plugins/vite-plugin-doc2md';

function resolve(filePath: string): string {
	return path.join(__dirname, filePath);
}

// https://vitejs.dev/config/
export default defineConfig({
	clearScreen: false,
	resolve: {
		alias: {
			'@owl': resolve('../src/'),
			'@yiird/owl': resolve('../src/')
		}
	},
	plugins: [
		vueJsx(),
		extractCommentsPlugin({
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
		})
	]
});
