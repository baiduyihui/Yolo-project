import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
// <<<<<<< Updated upstream
// import 'ant-design-vue/dist/antd.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router/index'
// =======
import 'ant-design-vue/dist/reset.css';
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Table } from 'ant-design-vue';
import { Tag } from 'ant-design-vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// >>>>>>> Stashed changes
import { createPinia } from 'pinia';
// =======
// >>>>>>> Stashed changes
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.config.productionTip = false;
app.use(router)
app.use(Antd)
app.use(ElementPlus, {
   locale: zhCn
 });
 
// <<<<<<< Updated upstream
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }
// app.mount('#app')
// =======
app.use(Table)
app.use(Tag)

const store = createPinia()
app.use(store)

//Pinia持久化
const getroute = () => {
    return (context) => {
       const {store} = context
       store.$subscribe(()=>{
          localStorage.setItem('key',store.$state.router)
       })
    }
}
store.use(getroute())
app.mount('#app')
;
// >>>>>>> Stashed changes