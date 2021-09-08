import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import { defineConfig } from 'vite';

function resolve(filePath: string): string {
	return path.join(__dirname, filePath);
}

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	publicDir: './public',
	root: process.env.NODE_ENV === 'production' ? '.' : './src-example',
	mode: 'development',
	clearScreen: false,
	build: {
		target: 'es2015',
		outDir: resolve('./dist/es'),
		rollupOptions: {
			input: {
				owl: resolve('./src/index.ts')
			},
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue'],
			output: {
				dir: resolve('./dist/es'),
				entryFileNames: '[name].js',
				chunkFileNames: '[name].js',
				name: 'Owl',
				format: 'es',
				sourcemap: true,
				manualChunks: {
					'fortawesome-brands': ['@fortawesome/free-brands-svg-icons'],
					'fortawesome-solid': ['@fortawesome/free-solid-svg-icons']
				},
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
	plugins: [vue(), vueJsx()]
});
