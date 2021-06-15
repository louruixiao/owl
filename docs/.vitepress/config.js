module.exports = {
	lang: 'zh-CN',
	title: 'Gavin UI',
	description: '',
	base: '/owl/',
	themeConfig: {
		repo: 'https://github.com/louruixiao/owl.git',
		docsDir: 'docs',

		editLinks: true,
		editLinkText: 'Edit this page on GitHub',
		lastUpdated: 'Last Updated',
		algolia: {
			apiKey: '20da7e9a322b8eb2b5f42e378bfbdebc',
			indexName: 'yiird_owl'
		},
		nav: [
			{ text: 'Guide', link: '/guide/' },
			{
				text: 'Examples',
				link: '/examples',
				activeMatch: '^/$|^/examples/'
			}
		],

		sidebar: {
			'/guide/': getGuideSidebar(),
			'/examples/': getExampleSidebar()
		}
	}
};
function getGuideSidebar() {
	return [
		{
			text: '教程',
			children: [{ text: '开始', link: '/guide/start' }]
		}
	];
}
function getExampleSidebar() {
	return [
		{
			text: '基础',
			children: [{ text: '按钮', link: '/examples/button' }]
		}
	];
}
