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
			appId: 'VQ9H59WC8X',
			apiKey: '20da7e9a322b8eb2b5f42e378bfbdebc',
			indexName: 'yiird_owl'
		},
		locales: {
			'/': {
				selectText: '选择语言',
				label: '简体中文',
				ariaLabel: '选择语言',
				nav: [
					{ text: '指南', link: '/guide/', activeMatch: '^/$|^/guide/' },
					{
						text: '样例',
						link: '/examples/',
						activeMatch: '^/$|^/examples/'
					}
				],
				sidebar: {
					'/guide/': getGuideSidebar(),
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
					'/zh/': [
					],
					'/zh/nested/': [
					]
				}
			} */
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
