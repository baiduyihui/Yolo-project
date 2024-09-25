const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    //配置跨域
    proxy: {
      '/api': { 
         target: 'http://ipbdtest0001.natapp1.cc/',
         changeOrigin: true,
         pathRewrite: {
         '^/api': '/' 
         }
      }
    }
  }
})
