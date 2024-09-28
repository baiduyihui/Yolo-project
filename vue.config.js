const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
    proxy: {
      '/api': { 
         target: 'http://ipbdtest0001.natapp1.cc/',
         changeOrigin: true,
         pathRewrite: {
         '^/api': '' 
        }
      }
    },
  },
  transpileDependencies: true
})
