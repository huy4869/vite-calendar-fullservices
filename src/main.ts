import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// scss
import './assets/main.scss'
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

// vuetify 3

import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

// i18n
import i18n from './lang'

// register Component
import { registerGlobalComponent } from '@/utils/import'

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
app.use(vuetify)
// @ts-ignore
app.use(ImportPlugin)
// @ts-ignore
app.use(autoAnimatePlugin)
registerGlobalComponent(app)
app.mount('#app')
