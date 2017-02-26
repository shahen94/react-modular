module.exports = [{
		test: /\.css$/,
		include: /(client|node_modules)/,
		loaders: ['style-loader', 'css-loader', 'postcss-loader']
	}, {
		test: /\.(jsx|js)$/,
		exclude: [/node_modules/, /\.test.js$/],
		loaders: ['babel-loader']
	}, {
		test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		loader: "url-loader?limit=10000&mimetype=application/font-woff"
	}, {
		test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		loader: "file-loader"
	}, {
		test: /\.styl$/,
		loader: 'style-loader!css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
	}, {
		test: /\.(scss|sass)$/,
		loader: 'style-loader!css-loader!sass-loader'
	},
];
