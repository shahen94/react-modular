const loaders = require('./loaders');
const plugins = require('./plugins');
const path = require('path');

const port = process.env.PORT || 8000;

module.exports = {
	context: path.join(process.cwd(), 'client'),
	entry: [
		`webpack-dev-server/client?http://0.0.0.0:${port}`,
		'webpack/hot/only-dev-server',
		'font-awesome-loader',
		'./src/index.js'
	],
	devtool: '#inline-source-map',
	output: {
		publicPath: '../',
		path: path.join(process.cwd(), './dist'),
		filename: '[name].[hash].js',
		chunkFilename: "[id].[hash].chunk.js"
	},
	plugins,
	module: {
		rules: loaders
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
};
