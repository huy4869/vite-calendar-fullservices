import ScrollDown from '@/components/ScrollDown.vue'

export default {
  install: (app, options) => {
    /*  our code for the plugin goes here
                app is the result of createApp()
                options is user options passed in
            */
    app.component('scroll-down', ScrollDown)
  }
}
