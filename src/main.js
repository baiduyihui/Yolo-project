import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
// import 'ant-design-vue/dist/antd.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router/index'
const app = createApp(App);
app.config.productionTip = false;
app.use(router)
app.use(Antd)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')