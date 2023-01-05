import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// scss
import './assets/main.css'
import './assets/index.scss'

// aos animation
import AOS from 'aos'
import 'aos/dist/aos.css'

// particles-js
import Particles from 'vue3-particles'

// element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// @ts-ignore
app.use(AOS.init())
app.use(Particles)
app.use(ElementPlus)
app.mount('#app')
