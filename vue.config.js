const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    //配置跨域
    proxy: {
      '/api': { 
         target: 'http://101.132.177.19:9200/api',
         changeOrigin: true,
         pathRewrite: {
         '^/api': '/' 
         }
      }
    }
  }

})
