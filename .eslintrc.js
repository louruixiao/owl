module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	extends: [
		'eslint:recommended', //eslint 推荐配置
		'plugin:vue/vue3-recommended', // eslint-plugin-vue 插件提供的vue3推荐配置
		'plugin:@typescript-eslint/recommended', //@typescript-eslint/eslint-plugin 插件提供的 typescript的推荐配置
		'prettier',
		'plugin:prettier/recommended'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': ['error'],
		'vue/html-closing-bracket-newline': [
			'error',
			{
				singleline: 'never',
				multiline: 'never'
			}
		],
		'vue/max-attributes-per-line': 'off'
	},
	overrides: [
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				jest: true
			}
		}
	]
};
