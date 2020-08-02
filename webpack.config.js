const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const VENDOR = [
	"axios",
	"react",
	"react-dom",
	"react-router-dom",
    "react-redux",
    "redux",
    "redux-logger",
    "redux-saga"
];

module.exports = {
	mode: "development",
	entry: {
		bundle: "./src/index",
		vendor: VENDOR,
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
		open: true,
		overlay: true,
		inline: true,
        stats: "minimal",
        historyApiFallback: true,
	},
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "[name].bundle.js",
		chunkFilename: "[name].bundle.js",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: "babel-loader"
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// fallback to style-loader in development
					process.env.NODE_ENV !== "production"
						? "style-loader"
						: MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader",
				],
			},
			{
				loader: "file-loader",
				test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.txt$/i,
				options: {
					outputPath: "assets/images",
				},
			},
			{
				loader: "file-loader",
				test: /\.ico$/i
			},
			{
				loader: "file-loader",
				test: /\.woff$|\.woff2$|\.eot$|\.ttf$/i,
				options: {
					outputPath: "assets/fonts",
				},
			},
			{
				loader: "file-loader",
				test: /\.wav$|\.mp4$|\.mp3$/i,
				options: {
					outputPath: "assets/media",
				},
			},
		],
	},
	optimization: {
		splitChunks: {
			chunks: "all",
			minSize: 20000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 30,
			maxInitialRequests: 30,
			automaticNameDelimiter: "~",
			enforceSizeThreshold: 50000,
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
			},
		},
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: './src/favicon.ico',
            filename: "./index.html"
		}),
	],
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
};
