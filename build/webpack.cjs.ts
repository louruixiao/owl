import path from 'path';
import webpack from 'webpack';
import baseConfig from './webpack.umd';
// in case you run into any typescript error when configuring `devServer`
const config: webpack.Configuration = {
	...baseConfig,
	mode: 'production',
	output: {
		path: path.resolve(__dirname, '../dist/cjs'),
		library: {
			name: 'Owl',
			type: 'commonjs'
		},
		filename: '[name].js',
		clean: true
	}
};

export default config;
