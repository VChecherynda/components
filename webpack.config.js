const path = require('path');

module.exports = {
   entry: "./src/index.ts",
   output: {
      filename: "index.js",
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'system',
   },
   devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' },
      compress: true,
      liveReload: true,
      port: 8085,
   },
   resolve: {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
   },
   module: {
      rules: [
         { 
            test: /\.(ts|tsx)$/,
            loader: "ts-loader" 
         },
         {
            test: /\.js$/,
            loader: "source-map-loader",
         },
         {
            test: /\.css$/,
            loader: "css-loader",
         },
      ]
   },
   externals: [ 'single-spa', /^@home\//, 'react', 'react-dom' ],
   watchOptions: {
      ignored: /node_modules/,
   },
}  