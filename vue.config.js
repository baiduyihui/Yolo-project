const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
<<<<<<< Updated upstream
  devServer:{
    //配置跨域
    proxy: {
      '/api': { 
         target: 'http://101.132.177.19:9200/api',
         changeOrigin: true,
         pathRewrite: {
         '^/api': '/' 
         }
=======
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
        target:'http://101.132.177.19:9200/',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
>>>>>>> Stashed changes
      }
    }
  }

})
