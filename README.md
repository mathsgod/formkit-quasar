# FormKit Quasar

A simple input wrapper of [Quasar](https://quasar.dev/) for [FormKit](https://formkit.com/).

Most components are based on Quasar; non-FormKit-specific attributes are passed directly through to the underlying Quasar component.

## Documentation

See the [`docs/`](./docs) folder for a per-component usage guide covering every supported input type with live examples.

Live docs: **https://formkit-quasar.netlify.app/**

Run the docs site locally:

```bash
npm run docs:dev
```

Build a static copy of the docs:

```bash
npm run docs:build
```

The output is written to `docs-dist/`. The docs site is automatically deployed to Netlify on every push to `main` via `.github/workflows/deploy-docs.yml`.

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

import { createQuasarPlugin } from "formkit-quasar"
import { plugin, defaultConfig } from '@formkit/vue'

const app = createApp(App)

app.use(Quasar, {
    plugins: {}
})

app.use(plugin, defaultConfig({
    plugins: [createQuasarPlugin()]
}))

app.mount('#app')
```

## Usage

Use the FormKit `type` attribute to select the Quasar input you want. Attributes that aren't FormKit-specific are forwarded to the Quasar component.

```html
<FormKit type="q-input" label="Input" name="input" validation="required">
    <template v-slot:prepend>
        <q-icon name="event" />
    </template>
</FormKit>

<FormKit type="q-input" label="Password" name="password1" input-type="password" />

<FormKit type="q-select" label="Select" name="select1" validation="required" :options="[
    'Monaco',
    'Vatican City',
    'Maldives',
    'Tuvalu',
]" />

<FormKit type="q-checkbox" label="Checkbox" name="checkbox1" />

<FormKit type="q-radio" name="radio1" :options="[
    { label: 'Line', value: 'line' },
    { label: 'Rectangle', value: 'rectangle' },
    { label: 'Ellipse', value: 'ellipse' }
]" />

<FormKit type="q-option-group" name="group" :options="[
    { label: 'Battery too low', value: 'bat' },
    { label: 'Friend request', value: 'friend', color: 'green' },
    { label: 'Picture uploaded', value: 'upload', color: 'red' }
]" />

<FormKit type="q-option-group" option-type="checkbox" name="group2" :options="[
    { label: 'Battery too low', value: 'bat' },
    { label: 'Friend request', value: 'friend', color: 'green' },
    { label: 'Picture uploaded', value: 'upload', color: 'red' }
]" />

<FormKit type="q-toggle" name="toggle1" />

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

<FormKit type="q-editor" name="editor1" />

<FormKit type="q-slider" name="slider1" />

<FormKit type="q-textarea" label="Textarea" name="textarea1" validation="required" />
```

## Supported Inputs

| FormKit type       | Quasar component         | Notes                                                |
|--------------------|--------------------------|------------------------------------------------------|
| `q-input`          | `QInput`                 | Use `input-type` for native HTML types.              |
| `q-textarea`       | `QInput` (`type="textarea"`) | Pass `rows` to control height.                   |
| `q-select`         | `QSelect`                | String array or `[{ label, value, disable? }]`.      |
| `q-checkbox`       | `QCheckbox`              | Boolean; use `validation="accepted"`.                |
| `q-radio`          | `QOptionGroup` (auto) / `QRadio` | Pass `:options` for a mutually exclusive group. |
| `q-option-group`   | `QOptionGroup`           | Set `option-type="radio" | "checkbox" | "toggle"`.   |
| `q-toggle`         | `QToggle`                |                                                      |
| `q-btn-toggle`     | `QBtnToggle`             | Deprecated by Quasar; kept for completeness.          |
| `q-date`           | `QDate`                  | Bound to a string.                                   |
| `q-time`           | `QTime`                  | Bound to a string.                                   |
| `q-file`           | `QFile`                  | Bound to `File | File[] | null`.                     |
| `q-color`          | `QColor`                 | Bound to a hex string.                               |
| `q-range`          | `QRange`                 | Bound to `{ min, max }`.                             |
| `q-slider`         | `QSlider`                | Bound to a number.                                   |
| `q-rating`         | `QRating`                | Bound to a number.                                   |
| `q-editor`         | `QEditor`                | Bound to an HTML string.                             |

Validation errors are rendered under each field. Inputs that do not expose Quasar's native `error` / `error-message` props (e.g. `q-color`, `q-date`, `q-time`, `q-slider`, `q-range`, `q-rating`, `q-btn-toggle`) display the error as a red caption below the field.

## Project Structure

```
src/
  components/        # Vue wrappers for each Quasar input (library code)
  utils/             # FormKit error-message helpers
  vite-env.d.ts      # FormKit type augmentation for library users
docs/                # Docs & live examples site (Vue Router)
  pages/             # One page per input type
  App.vue, main.ts, router.ts, index.html
vite.config.ts       # Library build (npm publish target)
vite.docs.config.ts  # Docs site build
```

## Scripts

| Command                | Description                                      |
|------------------------|--------------------------------------------------|
| `npm run dev`          | Start the docs site (Vite dev server).           |
| `npm run docs:dev`     | Same as `npm run dev`.                           |
| `npm run build`        | Type-check and build the library to `dist/`.     |
| `npm run docs:build`   | Build a static copy of the docs to `docs-dist/`. |
| `npm run release`      | Bump patch version, build the library, publish.  |

## Peer Dependencies

These are required at runtime and installed transitively via `@formkit/vue`. Declare them in your own `peerDependencies` if you want to pin the version:

- `@formkit/core` `^2.1.0`
- `@formkit/validation` `^2.1.0`

## License

MIT
