var commonConfig = {
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  context: __dirname,
  output: {
    publicPath: path.resolve(__dirname),
    filename: 'index.js'
  },
  module: {
    loaders: [
      // TypeScript
      { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ],
  },
  plugins: [
    // Use commonPlugins.
  ]

};

new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery"
})