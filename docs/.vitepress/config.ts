import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import { defineConfig } from 'vitepress';
import { extractCommentsPlugin } from '../plugins/vite-plugin-doc2md';

function resolve(filePath: string): string {
	return path.join(__dirname, filePath);
}
export default defineConfig({
	lang: 'zh-CN',
	title: 'Gavin UI',
	description: '',
	base: '/',
	vue: {
		template: {
			compilerOptions: {
				whitespace: 'preserve'
			}
		}
	},
	vite: {
		clearScreen: false,
		resolve: {
			alias: {
				'@yiird/owl': resolve('../../')
			}
		},
		css: {
			postcss: '../../postcss.config.js',
			preprocessorOptions: {
				scss: {
					charset: false
				}
			}
		},
		plugins: [
			vueJsx(),
			extractCommentsPlugin({
				root: path.resolve(__dirname, '../../'),
				renderOptions: {
					output: './docs/coms'
				},
				loaderOptions: {
					scanDirs: 'src',
					fileTypes: ['.ts', '.vue'],
					alias: {
						'@owl': resolve('../../src/')
					}
				}
			})
		]
	},
	locales: {
		// The key is the path for the locale to be nested under.
		// As a special case, the default locale can use '/' as its path.
		'/': {
			lang: 'zh-CN', // this will be set as the lang attribute on <html>
			title: 'VuePress',
			description: 'Vue-powered 驱动的静态网站生成器'
		},
		'/en/': {
			lang: 'zh-CN',
			title: 'VuePress',
			description: 'Vue 驱动的静态网站生成器'
		}
	},
	themeConfig: {
		repo: 'https://github.com/louruixiao/owl.git',
		docsDir: 'docs',
		editLinks: true,
		editLinkText: 'Edit this page on GitHub',
		lastUpdated: 'Last Updated',
		algolia: {
			appId: 'VQ9H59WC8X',
			apiKey: '20da7e9a322b8eb2b5f42e378bfbdebc',
			indexName: 'yiird_owl'
		},
		locales: {
			'/': {
				selectText: '选择语言',
				label: '简体中文',
				nav: [
					{ text: '指南', link: '/guide/', activeMatch: '^/$|^/guide/' },
					{
						text: '组件',
						link: '/coms/o-button-api',
						activeMatch: '^/coms/'
					},
					{
						text: '样例',
						link: '/examples/',
						activeMatch: '^/examples/'
					}
				],
				sidebar: {
					'/guide/': getGuideSidebar(),
					'/coms/': getComponentsSidebar(),
					'/examples/': getExampleSidebar()
				}
			}
			/* '/en/': {
				// text for the language dropdown
				selectText: 'Languages',
				// label for this locale in the language dropdown
				label: 'English',
				// Aria Label for locale in the dropdown
				ariaLabel: 'Languages',
				nav: [
					{ text: 'Guide', link: '/guide/' },
					{
						text: 'Examples',
						link: '/examples',
						activeMatch: '^/$|^/examples/'
					}
				],
				sidebar: {
					'/zh/': [],
					'/zh/nested/': []
				}
			} */
		}
	}
});

function getGuideSidebar() {
	return [
		{
			text: '教程',
			children: [
				{ text: '开始', link: '/guide/start' },
				{ text: '图标', link: '/guide/icon' }
			]
		}
	];
}
function getComponentsSidebar() {
	return [
		{
			text: '基础组件',
			children: [
				{ text: 'OIcon', link: '/coms/o-icon-api' },
				{ text: 'OButton', link: '/coms/o-button-api' }
			]
		}
	];
}
function getExampleSidebar() {
	return [
		{
			text: '基础',
			children: [
				{ text: '按钮', link: '/examples/button' },
				{ text: 'OIcon', link: '/examples/icon' },
				{ text: '布局', link: '/examples/layout' }
			]
		}
	];
}
