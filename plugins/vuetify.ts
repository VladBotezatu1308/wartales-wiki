// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtapp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives
  })
  nuxtapp.vueApp.use(vuetify)
})
