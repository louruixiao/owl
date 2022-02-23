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
	root: process.env.NODE_ENV === 'production' ? './src' : './src-example',
	mode: 'development',
	clearScreen: false,
	build: {
		target: 'es2015',
		outDir: resolve('./dist/es'),
		emptyOutDir: true,
		lib: {
			entry: resolve('./src/index.ts'),
			name: 'Owl',
			formats: ['es', 'cjs', 'umd'],
			fileName: (format) => `owl.${format}.js`
		},
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue', '@fortawesome/fontawesome-svg-core', '@fortawesome/vue-fontawesome'],
			output: {
				dir: resolve('./dist'),
				// entryFileNames: '[name].js',
				//chunkFileNames: '[name]-[format]-[hash].js',
				// name: 'Owl',
				// format: 'es',
				// sourcemap: true,
				// manualChunks: {
				// 	fontawesome: ['@fortawesome/fontawesome-svg-core', '@fortawesome/vue-fontawesome']
				// },
				globals: {
					vue: 'Vue',
					'@fortawesome/fontawesome-svg-core': 'fontawesome-svg-core',
					'@fortawesome/vue-fontawesome': 'vue-fontawesome'
				}
			}
		}
	},
	css: {
		postcss: './postcss.config.js',
		preprocessorOptions: {
			scss: {
				charset: false
			}
		}
	},
	resolve: {
		alias: {
			'@owl': resolve('./src/'),
			'@yiird/owl': resolve('./src/')
		}
	},
	plugins: [
		vue({
			template: {
				compilerOptions: {
					whitespace: 'preserve'
				}
			}
		}),
		vueJsx()
	]
});
