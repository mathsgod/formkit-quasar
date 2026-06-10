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
      options?: unknown[]
    },
    'q-input': {
      type: 'q-input',
      mask?: string,
      inputType?: string,
      options?: unknown[]
      value?: Props['number'] extends AllReals ? number | string : string;
      number?: 'integer' | 'float' | 'true' | true;
    },
    'q-toggle': {
      type: 'q-toggle'
      options?: unknown[]
    },
    'q-editor': {
      type: 'q-editor'
      options?: unknown[]
    },
    'q-select': {
      type: 'q-select'
      options?: unknown[]
    },
    'q-checkbox': {
      type: 'q-checkbox'
      options?: unknown[]
    },
    'q-radio': {
      type: 'q-radio'
      options?: unknown[]
    },
    'q-option-group': {
      type: 'q-option-group'
      optionType?: 'radio' | 'checkbox' | 'toggle'
      options?: unknown[]
    },
    'q-color': {
      type: 'q-color'
      options?: unknown[]
    },
    'q-date': {
      type: 'q-date'
      landscape?: boolean;
      options?: unknown[]
    },
    'q-time': {
      type: 'q-time'
      options?: unknown[]
    },
    'q-slider': {
      type: 'q-slider'
      options?: unknown[]
    },
    'q-range': {
      type: 'q-range'
      options?: unknown[]
    },
    'q-rating': {
      type: 'q-rating'
      options?: unknown[]
    },
    'q-textarea': {
      type: 'q-textarea'
      options?: unknown[]
    },
    'q-file': {
      type: 'q-file'
      options?: unknown[]
    }
  }

  export interface FormKitInputSlots<Props extends FormKitInputs<Props>> {
    'q-input': {
      prepend: FormKitFrameworkContext
    }
  }
}

