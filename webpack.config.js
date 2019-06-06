const webpack= require('webpack')
const path= require('path')
const htmlWebpackPlugin= require('html-webpack-plugin')
const VueLoaderPlugin= require('vue-loader/lib/plugin')

function resolve(dir) {
    return path.resolve(__dirname, dir)
}

module.exports= {
    // mode: 'production',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle-[hash].js'
    },
    devServer: {
        port: 3000,
        open: true,
        contentBase: __dirname,   //指定静态服务器的根目录，可以访问到不经过webpack处理的文件,如没有设置 index 选项，则默认路径下的index.hmtl文件
        hot: true
    },
    resolve:{
       extensions:['.js', '.vue'],
       alias:{
           "vue$": "vue/dist/vue.js",
           "element-ui$": "element-ui/lib/index.js",
           "@": resolve('src')
       }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.css/,
                use:[
                    {loader: "style-loader" },
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|woff|eot|ttf)$/,
                use:{
                    loader: "url-loader"
                }
            }
        ]
    }

}