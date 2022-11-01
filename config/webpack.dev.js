const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.base.js');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path')

const devServer = {
	port: '3300', //默认是8080
	// client: { logging: "error" },//浏览器中设置日志级别
	compress: true, //是否启用 gzip 压缩
	open: false,
	// https: true,
	historyApiFallback: true,
	watchFiles: ['src/**/*', 'public/**/*'],
	proxy: {
		'/vr/': 'http://localhost:13000/'
	},
};

const devConfig = {
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.[fullhash].js',
		publicPath: '/' //通常是CDN地址
	},
	plugins: [].concat(webpackConfig.plugins, [
		new ESLintPlugin({
			context: path.resolve(__dirname, '../src'),
			files: ['**/*.ts', '**/*.js', '**/*.tsx'],
		}
		),
	]),
}

const compiler = Webpack({ ...webpackConfig, ...devConfig });
const server = new WebpackDevServer(devServer, compiler);

const runServer = async () => {
	await server.start();
};

runServer();