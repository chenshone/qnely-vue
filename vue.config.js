const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('styles', resolve('src/assets/styles'))
      .set('views', resolve('src/views'))
  },

  publicPath: process.env.NODE_ENV === 'production' ? '/qnelyw-vue/' : '/'
}
