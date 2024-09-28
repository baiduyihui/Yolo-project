const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
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
})
