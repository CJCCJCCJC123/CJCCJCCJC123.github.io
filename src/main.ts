import '@/assets/base.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {router} from './router'
import App from './App.vue'
import 'virtual:svg-icons-register'
import 'element-plus/theme-chalk/el-message.css';
const app = createApp(App)
app.use(createPinia())
app.use(router) 
app.mount('#app')
