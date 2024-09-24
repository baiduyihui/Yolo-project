import { createApp } from 'vue';
// import Antd from 'ant-design-vue';
import App from './App';
// import 'ant-design-vue/dist/antd.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App);
app.config.productionTip = false;
import router from './router/index'
app.use(router)
// app.use(Antd)
app.use(ElementPlus)
app.mount('#app')