const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  },
  transpileDependencies: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('styles', '@/assets/styles')
      .set('components', '@/components')
      .set('common', '@/common')
  }
})
