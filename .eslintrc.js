module.exports = {
	root: true,
	env: {
		browser: true, //启用浏览器全局变量: window top
		node: true, //启用node全局变量: __filename __dirname
		es6: true //启用es6全局变量: Set Map
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
	rules: {
		'no-console': 'warn',
		'no-debugger': 'warn'
	},
	//为特定文件制定处理器
	overrides: [
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				jest: true
			}
		}
	]
};
