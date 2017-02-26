const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const rucksack = require('rucksack-css');

const port = process.env.PORT || 8000;

module.exports = [
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
		template: path.join(process.cwd(), 'client', 'index.html'),
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
	}),
	// new OpenBrowserPlugin({ url: `http://0.0.0.0:${port}` })
]
