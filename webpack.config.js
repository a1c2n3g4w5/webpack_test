var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.js');
var pathToEsriloader = path.resolve(node_modules, 'esri-loader/index.js');
var pathToReactDom = path.resolve(node_modules, 'react-dom/dist/react-dom.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var config = {
	// watch: true,
	// context: __dirname + "/app",
	entry: {
		
		vendor: ['jquery', 'react', 'react-dom'],
		app: [path.resolve(__dirname, "app/js/main.js")]
	},

	resolve: {
		alias: {
			// react: path.resolve(__dirname, "node_modules/react/dist/react.min.js")
			"react-dom": pathToReactDom,
			"react": pathToReact,
			// "esri-loader":pathToEsriloader,
			"ags":path.resolve(__dirname, "../ags_api/3.17")
		}
	},
	output: {
		filename: "[chunkhash].[id].bundle.js",
		publicPath: "/dist/",
		libraryTarget: "amd", // <-- There we go／
		path: path.resolve(__dirname, "./dist")
			// 当 React 作为一个 node 模块安装的时候，
			// 我们可以直接指向它，就比如 require('react')

	},
	externals: [
		function(context, request, callback) {
			if (/^dojo/.test(request) ||
				/^dojox/.test(request) ||
				/^dijit/.test(request) ||
				/^esri/.test(request)
			) {
				return callback(null, "amd " + request);
			}
			callback();
		}
	],

	module: {
		loaders: [{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}, {
				test: /\.css$/, // Only .css files
				loader: 'style!css' // Run both loaders
			}, {
				test: /\.(png|jpg)$/,
				loader: 'url?limit=25000'
			}]
			// noParse: [pathToReact,pathToReactDom]
	},
	devServer: {
		inline: true
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], {
			// root: '/full/project/path',
			// verbose: true,
			// dry: false,
			// exclude: ['shared.js']
		}),
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendors.js'),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, "./app/index.html"),
			// inject: true, //允许插件修改哪些内容，包括head与body
			// hash: true, //为静态资源生成hash值
			chunksSortMode: 'dependency',
			inject: false,
			minify: {
				removeComments: true, //移除HTML中的注释
				collapseWhitespace: true,
				collapseInlineTagWhitespace: true,
				// removeTagWhitespace: true,
				removeRedundantAttributes: true,
				removeEmptyAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true
			},


		}),
		// new webpack.ProvidePlugin({
		// 	$: "jquery"
		// })
		new WebpackMd5Hash(),
		// 代码压缩
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
			// mangle: {
			// 	except: ['$super', '$', 'exports', 'require']
			// }
		}),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		})
	]

};
module.exports = config;