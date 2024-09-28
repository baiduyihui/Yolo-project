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
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store/store'
// >>>>>>> Stashed changes
import { createPinia } from 'pinia';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.config.productionTip = false;
app.use(router)
app.use(Antd)
app.use(ElementPlus)
// <<<<<<< Updated upstream
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }
// app.mount('#app')
// =======
app.use(Table)
app.use(Tag)
app.use(store)
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