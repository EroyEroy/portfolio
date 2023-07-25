const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';


module.exports = {
	entry: { myAppName: path.resolve(__dirname, "./src/index.tsx") },
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: production ? '[name].[contenthash].js' : '[name].js',
		chunkFilename: production ? '[id].[contenthash].css' : '[id].css',
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx|js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-typescript']
					},
				},
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: /node_modules/,
				use: [
					production ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: false,
							sourceMap: !production
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: !production
						}
					},
				],
			},
			{
				test: /\.svg$/,
				use: ['svg-url-loader']
			},
		],
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: "Webpack & React",
			template: "./public/index.html",
			favicon: false
		}),
		new MiniCssExtractPlugin({
			filename: production ? '[name].[contenthash].css' : '[name].css',
		}),
	],
	devServer: {
		port: 3001,
		hot: true,
		client: {
			logging: 'none'
		},
	},
	mode: production ? 'production' : 'development'
};