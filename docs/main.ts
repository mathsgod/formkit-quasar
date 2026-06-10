import { createApp } from 'vue'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.prod.css'
import '@quasar/extras/material-icons/material-icons.css'

import App from './App.vue'
import { router } from './router'
import { createQuasarPlugin } from '../src/components'
import { plugin, defaultConfig } from '@formkit/vue'

const app = createApp(App)

app.use(Quasar, { plugins: {} })
app.use(plugin, defaultConfig({ plugins: [createQuasarPlugin()] }))
app.use(router)

app.mount('#app')
