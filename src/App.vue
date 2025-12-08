<script setup>
import { ref } from "vue"
import { reset } from "@formkit/vue"
import "@quasar/extras/material-icons/material-icons.css"

const formData = ref(null)

const onSubmit = (data, form) => {
  console.log('Form submitted:', data)
  reset(form, data)
}

const selectOptions = [
  { label: 'Option 1', value: 'opt1', disable: true },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' }
]

const btnToggleOptions = [
  { label: 'One', value: 'opt1' },
  { label: 'Two', value: 'opt2' },
  { label: 'Three', value: 'opt3' }
]
</script>

<template>
  <q-layout>
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-icon name="widgets" class="q-mr-sm" />
          FormKit + Quasar Demo
        </q-toolbar-title>
        <q-btn flat icon="open_in_new" href="https://github.com/mathsgod/formkit-quasar" target="_blank" label="GitHub" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page padding class="q-pa-md">
        <div class="row q-col-gutter-md">
          <!-- 左邊：表單 -->
          <div class="col-12 col-md-8">
            <form-kit
              type="form"
              @submit="onSubmit"
              :value="{
                editor: '<p>Hello World</p>',
                rating: 3,
                slider: 50,
                range: { min: 20, max: 80 },
              }"
              #default="{ value }"
            >
              <!-- 將 value 暴露出去 -->
              {{ void (formData = value) }}

              <!-- 文字輸入 -->
              <q-card flat bordered class="q-mb-md">
                <q-card-section>
                  <div class="text-h6">
                    <q-icon name="text_fields" class="q-mr-sm" />
                    Text Inputs
                  </div>
                </q-card-section>
                <q-separator />
                <q-card-section>
                  <form-kit type="q-input" name="text" label="Text Input" validation="required" hint="This field is required">
                    <template #prepend>
                      <q-icon name="person" />
                    </template>
                  </form-kit>

                  <form-kit type="q-input" name="email" label="Email" validation="email" input-type="email">
                    <template #prepend>
                      <q-icon name="email" />
                    </template>
                  </form-kit>

                  <form-kit type="q-input" name="password" label="Password" input-type="password">
                    <template #prepend>
                      <q-icon name="lock" />
                    </template>
                  </form-kit>

                  <form-kit type="q-textarea" name="textarea" label="Textarea" rows="3" />
                </q-card-section>
              </q-card>

              <!-- 選擇器 -->
              <q-card flat bordered class="q-mb-md">
                <q-card-section>
                  <div class="text-h6">
                    <q-icon name="list" class="q-mr-sm" />
                    Selection Controls
                  </div>
                </q-card-section>
                <q-separator />
                <q-card-section>
                  <form-kit type="q-select" name="select" label="Select" :options="selectOptions" />

                  <div class="q-mt-md">
                    <div class="text-subtitle2 q-mb-sm">Radio Group</div>
                    <div class="q-gutter-sm">
                      <form-kit type="q-radio" name="shape" val="line" label="Line" />
                      <form-kit type="q-radio" name="shape" val="rectangle" label="Rectangle" />
                      <form-kit type="q-radio" name="shape" val="ellipse" label="Ellipse" />
                    </div>
                  </div>

                  <div class="q-mt-md">
                    <div class="text-subtitle2 q-mb-sm">Checkbox & Toggle</div>
                    <form-kit type="q-checkbox" name="checkbox" label="I agree to the terms" validation="accepted" />
                    <form-kit type="q-toggle" name="toggle" label="Enable notifications" color="green" />
                  </div>

                  <div class="q-mt-md">
                    <div class="text-subtitle2 q-mb-sm">Button Toggle</div>
                    <form-kit type="q-btn-toggle" name="btnToggle" :options="btnToggleOptions" spread glossy />
                  </div>
                </q-card-section>
              </q-card>

              <!-- 日期時間 -->
              <q-card flat bordered class="q-mb-md">
                <q-card-section>
                  <div class="text-h6">
                    <q-icon name="event" class="q-mr-sm" />
                    Date & Time
                  </div>
                </q-card-section>
                <q-separator />
                <q-card-section>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-sm-6">
                      <form-kit type="q-date" name="date" label="Date Picker" />
                    </div>
                    <div class="col-12 col-sm-6">
                      <form-kit type="q-time" name="time" label="Time Picker" />
                    </div>
                  </div>
                </q-card-section>
              </q-card>

              <!-- 滑桿 & 評分 -->
              <q-card flat bordered class="q-mb-md">
                <q-card-section>
                  <div class="text-h6">
                    <q-icon name="tune" class="q-mr-sm" />
                    Sliders & Rating
                  </div>
                </q-card-section>
                <q-separator />
                <q-card-section>
                  <form-kit type="q-slider" name="slider" label="Slider" :min="0" :max="100" label-always />
                  <form-kit type="q-range" name="range" label="Range" :min="0" :max="100" label-always class="q-mt-lg" />
                  <div class="q-mt-md">
                    <div class="text-subtitle2 q-mb-sm">Rating</div>
                    <form-kit type="q-rating" name="rating" :max="5" size="2em" color="yellow" icon="star_border" icon-selected="star" />
                  </div>
                </q-card-section>
              </q-card>

              <!-- 顏色選擇器 -->
              <q-card flat bordered class="q-mb-md">
                <q-card-section>
                  <div class="text-h6">
                    <q-icon name="palette" class="q-mr-sm" />
                    Color Picker
                  </div>
                </q-card-section>
                <q-separator />
                <q-card-section>
                  <form-kit type="q-color" name="color" default-view="palette" />
                </q-card-section>
              </q-card>

              <!-- 富文本編輯器 -->
              <q-card flat bordered class="q-mb-md">
                <q-card-section>
                  <div class="text-h6">
                    <q-icon name="edit_note" class="q-mr-sm" />
                    Rich Text Editor
                  </div>
                </q-card-section>
                <q-separator />
                <q-card-section>
                  <form-kit type="q-editor" name="editor" min-height="10rem" />
                </q-card-section>
              </q-card>

            </form-kit>
          </div>

          <!-- 右邊：即時預覽 -->
          <div class="col-12 col-md-4">
            <q-card flat bordered class="sticky-card">
              <q-card-section class="bg-grey-2">
                <div class="text-h6">
                  <q-icon name="code" class="q-mr-sm" />
                  Form Data (Live)
                </div>
              </q-card-section>
              <q-separator />
              <q-card-section>
                <pre class="form-data-preview">{{ JSON.stringify(formData, null, 2) }}</pre>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.sticky-card {
  position: sticky;
  top: 70px;
}

.form-data-preview {
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 12px;
  background: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  max-height: 70vh;
  overflow-y: auto;
  margin: 0;
}
</style>
