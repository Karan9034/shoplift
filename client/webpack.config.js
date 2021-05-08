const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
	const isDevMode = options.mode === "development"

	return {
		entry: './src/index.js',
		output: {
			path: path.join(__dirname, 'dist'),
			filename: 'index.bundle.js'
		},
		devtool: isDevMode ? "source-map" : false,
		module:{
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader'
					}
				},
				{
					test: /.css$/,
					use: [
						"style-loader",
						{
							loader: "css-loader",
							options: {
								sourceMap: isDevMode
							}
						}
					]
				},
				{
					test: /\.(ttf|eot|woff|woff2)$/,
					use: [
						{
							loader: "file-loader",
							options: {
								name: "fonts/[name].[ext]"
							}
						}
					]
				},
				{
					test: /\.(jpe?g|png|gif|svg|ico)$/i,
					use: {
						loader: "file-loader",
						options: {
							outputPath: "assets/"
						}
					}
				}
			]
		},
		plugins: [
			new HTMLWebpackPlugin({
				template: './src/index.html'
			})
		]
	}
}