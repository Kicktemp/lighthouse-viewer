module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/lighthouse-viewer/'
    : '/',
  productionSourceMap: false
}
