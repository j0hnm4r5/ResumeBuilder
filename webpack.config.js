const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugin({
			title: "Resume Builder",
			appMountId: "app",
			inject: false, // required
			template: require("html-webpack-template"), // required
		}),
	],
	module: {
		rules: [
			{
				// ES2015
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["babel-preset-env"],
					},
				},
			},
			{
				// Styles
				test: /\.(s*)css$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				// Pug
				test: /\.pug$/,
				use: {
					loader: "pug-loader",
					query: {}, // check https://github.com/pugjs/pug-loader/issues/107 to see if this has been resolved
				},
			},
			{
				// YAML
				test: /\.yaml$/,
				use: ["json-loader", "yaml-loader"],
			},
		],
	},
	devServer: {
		contentBase: "./dist",
		port: 4000,
		open: false,
	},
	devtool: "eval-source-map",
	stats: "minimal",
	mode: "development",
};
