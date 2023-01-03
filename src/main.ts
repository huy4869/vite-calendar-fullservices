import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// scss
import "./assets/main.css";
import './assets/index.scss'

// aos animation
import AOS from 'aos'
import 'aos/dist/aos.css'

// particles-js
import Particles from "vue3-particles"

const app = createApp(App);

app.use(router);
// @ts-ignore
app.use(AOS.init())

app.use(Particles)

app.mount("#app");
