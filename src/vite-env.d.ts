/// <reference types="vite/client" />
import type { FormKitInputs } from "@formkit/inputs"

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


type AllReals = number | string | boolean | CallableFunction | Array<any> | null | Record<any, any>;

declare module '@formkit/inputs' {
  export interface FormKitInputProps<Props extends FormKitInputs<Props>> {
    'q-btn-toggle': {
      type: 'q-btn-toggle'
    },
    'q-input': {
      type: 'q-input',
      mask?: string,
      inputType?: string,
      value?: Props['number'] extends AllReals ? number | string : string;
      number?: 'integer' | 'float' | 'true' | true;
    },
    'q-btn-toggle': {
      type: 'q-btn-toggle'
    },
    'q-toggle': {
      type: 'q-toggle'
    },
    'q-editor': {
      type: 'q-editor'
    },
    'q-select': {
      type: 'q-select'
    },
    'q-checkbox': {
      type: 'q-checkbox'
    },
    'q-radio': {
      type: 'q-radio'
    },
    'q-option-group': {
      type: 'q-option-group'
    },
    'q-color': {
      type: 'q-color'
    },
    'q-date': {
      type: 'q-date'
      landscape?: boolean;
    },
    'q-time': {
      type: 'q-time'
    },
    'q-slider': {
      type: 'q-slider'
    },
    'q-range': {
      type: 'q-range'
    },
    'q-rating': {
      type: 'q-rating'
    },

  }

  export interface FormKitInputSlots<Props extends FormKitInputs<Props>> {
    'q-input': {
      prepend: FormKitFrameworkContext
    }
  }
}

