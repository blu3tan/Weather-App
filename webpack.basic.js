const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.(png|jpg|gif)$/,
				type: 'asset/resource',
			},
			{
				test: /\.(svg)$/,
				type: 'asset/resource',
				generator: {
					filename: 'weather/[name].svg',
				},
			},
		],
	},
};
