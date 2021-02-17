const path = require('path');
module.exports = {
    // モジュールバンドルを行う起点となるファイルの指定
    // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
    // 下記はオブジェクトとして指定した例
    entry: {
        bundle: './src/index.ts'
    },
    // モジュールバンドルを行った結果を出力する場所やファイル名の指定
    output: {
        path: path.join(__dirname, 'src'), // "__dirname"はファイルが存在するディレクトリ
        filename: '[name].js' // [name]はentryで記述した名前（この設定ならbundle）
    },
    // import文でファイル拡張子を書かずに名前解決するための設定
    // 例...「import World from './world'」と記述すると"world.ts"という名前のファイルをモジュールとして探す
    resolve: {
        extensions: ['.ts', '.js', 'jsx', 'tsx']
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'), // webpack-dev-serverの公開フォルダ
        open: true // サーバー起動時にブラウザを開く
    },
    // モジュールに適用するルールの設定（ローダーの設定を行う事が多い）
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }]
    }
}