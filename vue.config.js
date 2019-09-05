const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `@import "@styles";`
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('.'))
      .set('@src', resolve('src'))
      .set('@components', resolve('src/components'))
      .set('@router', resolve('src/router'))
      .set('@views', resolve('src/views'))
      .set('@layouts', resolve('src/views/layouts'))
      .set('@assets', resolve('src/assets'))
      .set('@images', resolve('src/assets/images'))
      .set('@styles', resolve('src/styles/index.scss'))
      .set('@store', resolve('src/store'))
      .set('@directives', resolve('src/directives'))
      .set('@prototypes', resolve('src/prototypes'))
      .set('@services', resolve('src/services'))
  }
}
