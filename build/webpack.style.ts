import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
const config: webpack.Configuration = {
	mode: 'production',
	entry: {
		styles: path.resolve(__dirname, '../src/index.ts')
	},
	resolve: {
		alias: {
			'@owl': path.resolve(__dirname, '../src')
		},
		extensions: ['.ts', '.js', '.vue', '.scss']
	},
	devtool: 'source-map',
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin()]
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									useBuiltIns: 'usage', // 这里配置usage 会自动根据你使用的方法以及你配置的浏览器支持版本引入对于的方法。
									corejs: 3 // 指定 corejs 版本
								}
							],
							'@babel/preset-typescript'
						]
					}
				}
			},
			{
				test: /\.vue/i,
				loader: 'vue-loader'
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							emit: false,
							esModule: false
						}
					},
					'css-loader',
					'postcss-loader',
					// 将 Sass 编译成 CSS
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			ignoreOrder: false,
			filename: '[name].css'
		})
	]
};

export default config;
