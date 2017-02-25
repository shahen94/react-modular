const webpack = require('webpack');
const rucksack = require('rucksack-css');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const loaders = require('./webpack-loaders');
const path = require('path');
const port = process.env.PORT || 8000;

module.exports = {
	context: path.join(__dirname, 'client'),
	entry: [
		`webpack-dev-server/client?http://0.0.0.0:${port}`,
		'webpack/hot/only-dev-server',
		'font-awesome-loader',
		'./src/index.js'
	],
	devtool: 'eval-source-map',
	output: {
		publicPath: './',
		path: path.join(__dirname, './dist'),
		filename: '[name].[hash].js',
		chunkFilename: "[id].[hash].chunk.js"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin({
			multistep: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			chunks: ['vendor'],
			minChunks: Infinity
		}),
		new webpack.DefinePlugin({
      '__DEV__': process.env.NODE_ENV === 'development'
    }),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'client', 'index.html'),
			filename: 'index.html',
			inject: 'body'
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					rucksack({
			      autoprefixer: true
			    })
				]
			}
		})
	],
	module: {
		rules: loaders
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
};
