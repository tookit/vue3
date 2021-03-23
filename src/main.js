import { createApp } from 'vue'
import { ElCard } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'

const app = createApp(App)
app.component(ElCard.name, ElCard)
app.mount('#app')