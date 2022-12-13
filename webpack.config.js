const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	entry: {
		dev: path.resolve(__dirname, "./src/index.js")
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './build')
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: "myWebpackServer"
		})
	]

}