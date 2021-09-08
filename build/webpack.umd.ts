import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
const config: webpack.Configuration = {
	mode: 'production',
	entry: {
		owl: path.resolve(__dirname, '../src/index.ts')
	},
	output: {
		path: path.resolve(__dirname, '../dist/umd'),
		library: {
			name: 'Owl',
			type: 'umd'
		},
		filename: '[name].js',
		clean: true
	},
	resolve: {
		alias: {
			'@owl': path.resolve(__dirname, '../src')
		},
		extensions: ['.ts', '.js', '.vue', '.scss']
	},
	devtool: 'source-map',
	externals: {
		vue: 'Vue'
		// lodash: {
		// 	commonjs: 'lodash',
		// 	amd: 'lodash',
		// 	root: '_'
		// }
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
				//使用多进程并发运行以提高构建速度。 并发运行的默认数量 os.cpus().length - 1
				parallel: 2
			})
		],
		splitChunks: {
			cacheGroups: {
				/* common: {
					test: /[\\/]node_modules[\\/]/,
					name: 'common',
					chunks: 'initial'
				}, */
				brands: {
					test: /[\\/]@fortawesome\/free-brands-svg-icons[\\/]/,
					name: 'fortawesome-brands',
					chunks: 'async'
				},
				solid: {
					test: /[\\/]@fortawesome\/free-solid-svg-icons[\\/]/,
					name: 'fortawesome-solid',
					chunks: 'async'
				}
			},
			usedExports: true
		}
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
			}
		]
	},
	plugins: [new VueLoaderPlugin()]
};

export default config;
