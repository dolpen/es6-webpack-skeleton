import path from 'path';
import webpack from 'webpack';
import failPlugin from 'webpack-fail-plugin';
import uglifySaveLicense from 'uglify-save-license';

module.exports = (dir) =>{
  const src = (sub) => path.resolve(dir, path.join('src', sub));
  const dist = path.resolve(dir, 'dist');

  return {
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }]
    },
    entry: {
      bundle: src('/index'),
      worker: src('worker')
    },
    output: {
      path: dist,
      filename: '[name].js' // is Objects.keys(entry)[i]
    },
    plugins: [
      failPlugin,
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        output: { comments: uglifySaveLicense }
      }),
      new webpack.optimize.AggressiveMergingPlugin()
    ]
  };
};
