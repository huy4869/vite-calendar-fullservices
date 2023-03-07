import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// scss
import './assets/main.css'
import './assets/scss/index.scss'

// aos animation
import AOS from 'aos'
import 'aos/dist/aos.css'

// autoAnimate
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

// particles-js
import Particles from 'vue3-particles'

// element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// i18n
import i18n from './lang'

// plugins
import ImportPlugin from './plugins/ImportPlugin'

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)
// @ts-ignore
app.use(AOS.init())
app.use(Particles)
app.use(ElementPlus)
app.use(ImportPlugin)
app.use(autoAnimatePlugin)
app.mount('#app')
