import { createApp } from 'vue';

import TDesign from 'tdesign-vue-next';
// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';

import router from './routers';
import App from './App.vue';

const app = createApp(App);
app.use(TDesign);
app.use(router);

app.mount('#app');
