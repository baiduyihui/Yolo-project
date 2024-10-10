const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: {
      '/api': { 
         target: 'http://101.132.177.19:9200/',
         changeOrigin: true,
         pathRewrite: {
         '^/api': '' 
         }
      }
    }
  }

})
