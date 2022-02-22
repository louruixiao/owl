import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitepress';
import { extractCommentsPlugin } from '../plugins/vite-plugin-doc2md';

function resolve(filePath: string): string {
	return path.join(__dirname, filePath);
}
console.log(path.resolve(__dirname, '../../'));
export default defineConfig({
	lang: 'zh-CN',
	title: 'Gavin UI',
	description: '',
	base: '/owl/',
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
				'@owl': resolve('../../src/'),
				'@yiird/owl': resolve('../../src/')
			}
		},
		optimizeDeps: {
			exclude: ['java']
		},
		plugins: [
			vueJsx(),
			extractCommentsPlugin({
				root: path.resolve(__dirname, '../../'),
				renderOptions: {
					output: './docs/components'
				},
				loaderOptions: {
					scanDirs: 'src',
					fileTypes: ['.ts', '.vue'],
					alias: {
						'@owl': resolve('../../src/')
					}
				}
			}),
			dts()
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
						link: '/components/o-button-api',
						activeMatch: '^/components/'
					},
					{
						text: '样例',
						link: '/examples/',
						activeMatch: '^/examples/'
					}
				],
				sidebar: {
					'/guide/': getGuideSidebar(),
					'/components/': getComponentsSidebar(),
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
				{ text: 'OIcon', link: '/components/o-icon-api' },
				{ text: 'OButton', link: '/components/o-button-api' }
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
				{ text: '布局', link: '/examples/layout' },
				{ text: '代码编辑器', link: '/examples/code-editor' }
			]
		}
	];
}
