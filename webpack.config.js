const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",
  
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./src/main.ts",
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/dist`,
      // 出力ファイル名
      filename: "app.js"
    },
    module: {
      rules: [
        {
          // 拡張子 .ts の場合
          test: /\.ts$/,
          // TypeScript をコンパイルする
          use: "ts-loader"
        }
      ]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src')
      },
      extensions: [".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'index.html'
        })
    ],
  };