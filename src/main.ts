import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'

import 'quasar/dist/quasar.prod.css'

const app = createApp(App);

import { createQuasarPlugin } from "./components";
import { plugin, defaultConfig } from '@formkit/vue'

app.use(Quasar, {
    plugins: {}
});


app.use(plugin, defaultConfig({
    plugins: [createQuasarPlugin()]
}));
app.mount('#app')
