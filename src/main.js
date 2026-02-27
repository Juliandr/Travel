import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

// Vue Awesome Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'  // 注意：Swiper 5+ 可能需要不同的导入方式

// 创建应用实例
const app = createApp(App)

// 注册插件
app.use(VueAwesomeSwiper)
app.use(router)
app.use(store)

// Vue 3 的配置
app.config.productionTip = false  // 如果你需要这个配置

// 挂载应用
app.mount('#app')