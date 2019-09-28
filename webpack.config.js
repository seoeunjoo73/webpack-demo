const path = require('path'); //node default package
const HtmlWebpackPlugin = require('html-webpack-plugin');

//배포
module.exports = {
    entry: './src/index.js'
    , output: {
        filename: "main.js",
        path: path.resolve(__dirname,'build') //__dirname : 현재 폴더
    },
    module: {
        rules: [{
            test: /\.css$/,  //확장자.css  , $ 끝  일 경우
            use :['style-loader','css-loader'] //뒤에서부터 실행
            },
            {
                test: /\.scss$/,  //확장자 scss  , $ 끝
                use :['style-loader','css-loader', 'sass-loader'] //뒤에서부터 실행
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}