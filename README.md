# FormKit Quasar

A simple input wrapper of <a href="https://quasar.dev/">Quasar</a> for <a href="https://formkit.com/">FormKit.</a>

Most of the components are based on <a href="https://quasar.dev/">Quasar</a>, attributes directly pass to the quasar component.

## Installation

```bash
npm install formkit-quasar
```

## Setup

```js
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

```


## Usage

```html

<FormKit type="q-input" label="Input" name="input" validation="required">
    
</FormKit>

<FormKit type="q-input" label="Password" name="password1" input-type="password"></FormKit>

<FormKit type="q-select" label="Select" name="select1" validation="required" :options="[
   'Monaco',
   'Vatican City',
   'Maldives',
   'Tuvalu',
]" />

<FormKit type="q-checkbox" label="Checkbox" name="checkbox1" />

<FormKit type="q-radio" name="radio1" val="line" label="Line" />

<FormKit type="q-option-group" name="group" :options="[
            { label: 'Battery too low', value: 'bat' },
            { label: 'Friend request', value: 'friend', color: 'green' },
            { label: 'Picture uploaded', value: 'upload', color: 'red' }]
            " />

<FormKit type="q-option-group" option-type="checkbox" name="group2" :options="[
            { label: 'Battery too low', value: 'bat' },
            { label: 'Friend request', value: 'friend', color: 'green' },
            { label: 'Picture uploaded', value: 'upload', color: 'red' }]
            " />

<FormKit type="q-toggle" name="toogle1" />         

<FormKit type="q-rating" name="rating1" />

<FormKit type="q-btn-toggle" name="btn_toggle" :options="[
            { label: 'One', value: 'one' },
            { label: 'Two', value: 'two' },
            { label: 'Three', value: 'three' }
          ]" />

<FormKit type="q-date" name="date1" />         

<FormKit type="q-time" name="time1" />         

<FormKit type="q-file" label="File" name="file1" />

<FormKit type="q-range" label="Range" name="range1" />

<FormKit type="q-color" label="Color" name="color1" />

<FormKit type="q-textarea" label="Textarea" name="textarea1" validation="required"></FormKit>


```