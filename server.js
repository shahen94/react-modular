const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack/webpack.config');
const path = require('path');

const compiler = webpack(config);

const server = new webpackDevServer(compiler, {
	contentBase: path.join(__dirname, './dist'),
	hot: true,
	historyApiFallback: true,
	compress: false,
	noInfo: false,
	filename: "bundle.js",
	publicPath: "/",
	stats: { colors: true },
});

server.listen(process.env.PORT);
