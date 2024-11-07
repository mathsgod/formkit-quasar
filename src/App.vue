<script setup lang="ts">
import { reactive, ref } from "vue"
import { reset } from "@formkit/vue"
//load material icon from quasar extra
import "@quasar/extras/material-icons/material-icons.css"
//import "@quasar/extras/material-icons-outlined/material-icons-outlined.css"
const obj = reactive({
  group2: [],
  toggle2: [],

})

const onSubmit = (data, form) => {
  console.log(data)
  reset(form, data);

}

</script>
<template>
  <q-layout>
    <q-page-container>
      <q-page padding>



        <form-kit type="form" :value="{}" #default="{ value }">
          {{ value }}
          <q-separator />

          <form-kit type="q-input" name="text" label="Text" validation="required" sd="1" />
          <q-separator />

          <form-kit type="q-slider" name="slider" label="Slider" />

          <q-separator />

          <form-kit type="q-time" name="time" label="Time" />

          <q-separator />

          <form-kit type="q-select" name="select" label="Select" :options="[
            { label: 'Option 1', value: 'opt1', disable: true },
            { label: 'Option 2', value: 'opt2' },
            { label: 'Option 3', value: 'opt3' }]" />

          <q-separator />

          <form-kit type="q-radio" name="shape" val="line" label="Line" />
          <form-kit type="q-radio" name="shape" val="rectangle" label="Rectangle" />
          <form-kit type="q-radio" name="shape" val="ellipse" label="Ellipse" />

          <q-separator />


          <form-kit type="q-date" name="date" label="Date" />
          <q-separator />


          <form-kit type="q-checkbox" name="checkbox" label="Checkbox" validation="required" />
          <q-separator />

          <form-kit type='q-color' name="color" />
          <q-separator />

          <form-kit type="q-toggle" name="toggle" label="Toggle" />
          <q-separator />

          <form-kit type='q-btn-toggle' name="btnToggle" :options="[
            { label: 'Option 1', value: 'opt1' },
            { label: 'Option 2', value: 'opt2' },
            { label: 'Option 3', value: 'opt3' }]" />

        </form-kit>

      </q-page>
    </q-page-container>
  </q-layout>
</template>
