import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path from 'path';

function resolve(filePath: string): string {
	return path.join(__dirname, filePath);
}

// https://vitejs.dev/config/
export default defineConfig({
	root: process.env.NODE_ENV === 'production' ? '.' : './src-example',
	mode: 'production',
	clearScreen: false,
	build: {
		target: ['es2015'],
		lib: {
			entry: resolve('src/index.ts'),
			name: 'Owl',
			formats: ['es', 'umd', 'cjs'],
			fileName: 'owl'
		},
		rollupOptions: {
			// 请确保外部化那些你的库中不需要的依赖
			external: ['vue'],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: 'Vue'
				}
			}
		}
	},
	resolve: {
		alias: {
			'@owl': resolve('./src/')
		}
	},
	plugins: [
		dts({
			insertTypesEntry: true,
			outputDir: 'dist',
			exclude: ['example']
		}),
		vue()
	]
});
