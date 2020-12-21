const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// var path =require('path')
module.exports = {
    mode: 'development',
    entry: './app.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.vue$/,
            use: 'vue-loader'
          }
        ]
      },
    devServer: {
        port: 9999,
        // contentBase: path.join(__dirname, "dist")
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'Vue.js 3.0 Beta',
            template: 'public/index.html',
            // filename: 'newIndex.html',
            inject: true
          }),
      ]
}