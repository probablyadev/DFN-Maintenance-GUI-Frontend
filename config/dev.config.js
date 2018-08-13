/**
 * Default dev server configuration.
 */
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const WebpackBaseConfig = require('./common.config');


class WebpackDevConfig extends WebpackBaseConfig {
	constructor(props) {
		super(props);

		this.config = {
			devtool: 'source-map',
			devServer: {
				contentBase: ['./public/', './src/'],
				publicPath: '/assets/',
				historyApiFallback: true,
				hot: true,
				inline: true,
				port: 3000,
				host: '0.0.0.0',
				disableHostCheck: true,
				quiet: true,
				noInfo: false,
				stats: 'minimal'
			},
			entry: [
				'webpack-dev-server/client?http://0.0.0.0:3000/',
				'webpack/hot/only-dev-server',
				'react-hot-loader/patch',
				'./index.jsx'
			],
			plugins: [
				new webpack.HotModuleReplacementPlugin(),
				new ProgressBarPlugin({
					format: 'Build [:bar] :percent (:elapsed seconds)',
					clear: true
				})
			],
			optimization: {
				namedModules: true,
				concatenateModules: true
			}
		};
	}
}

module.exports = WebpackDevConfig;
