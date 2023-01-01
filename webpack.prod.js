const { merge } = require('webpack-merge');
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  // plugins: [
  //   new WorkboxWebpackPlugin.GenerateSW({
  //     swDest: './sw.bundle.js',
  //     clientsClaim: true,
  //     skipWaiting: true,
  //     cleanupOutdatedCaches: true,
  //     exclude: [/\.mp4$/, /\.map$/, /\.cache$/],
  //     runtimeCaching: [{
  //       urlPattern: ({ url }) => url.origin === 'https://restaurant-api.dicoding.dev' || url.origin === 'https://restaurant-api.dicoding.dev/image',
  //       handler: 'CacheFirst',
  //       options: {
  //         cacheName: 'api-cache',
  //       },
  //     }],
  //   }),
  // ],
});
