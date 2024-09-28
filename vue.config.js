const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
<<<<<<< HEAD
// <<<<<<< Updated upstream
  transpileDependencies: true,
//   devServer:{
//     //配置跨域
//     proxy: {
//       '/api': { 
//          target: 'http://ipbdtest0001.natapp1.cc/',
//          changeOrigin: true,
//          pathRewrite: {
//          '^/api': '/' 
//          }
//       }
//     }
//   }
// =======
  devServer: {
    proxy:{
      '/api':{
        target:'http://ipbdtest0001.natapp1.cc/',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  },
//   transpileDependencies: true
// >>>>>>> Stashed changes
=======
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
>>>>>>> 70ed5110e01baf7f70d0ea7fa26ba1f7cb56c41c
})
