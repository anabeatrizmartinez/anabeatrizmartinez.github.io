import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "@mdi/font/css/materialdesignicons.css"
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Main styles, after vuetify import, for them to work on vuetify components.
import './assets/main.css'

const vuetify = createVuetify({
    components,
    directives,
    defaults: {
      VBtn: {
        variant: 'flat',
        style: {
          backgroundColor: '#db92ec'
        }
      },
      VAppBar: {
        VBtn: {
          color: '#fff',
          variant: 'text',
          style: {
            backgroundColor: 'transparent',
          }
        }
      },
      VMenu: {
        VBtn: {
          color: '#fff',
          variant: 'text',
          style: {
            backgroundColor: 'transparent',
          }
        }
      },
      VCarousel: {
        VBtn: {
          variant: 'flat',
          style: {
            backgroundColor: 'transparent',
          }
        }
      },
    }
})

const app = createApp(App)

app.use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
