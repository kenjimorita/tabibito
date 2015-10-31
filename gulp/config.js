var dest = './build';
var src = './src';

module.exports = {
//出力先の指定
  dest: dest,
// jsのビルド設定
//
  js: {
    src : src + '/scripts/**',
    dest: dest + '/scripts',
    uglify: false
  },
  webpack: {
    entry: src + '/scripts/app.js',
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js']
    }
  }
}
