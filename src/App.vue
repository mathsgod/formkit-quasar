<script setup>
import { reactive } from "vue"

//load material icon from quasar extra
import "@quasar/extras/material-icons/material-icons.css"
//import "@quasar/extras/material-icons-outlined/material-icons-outlined.css"
const obj = reactive({
  group2: [],
  toggle2: [],

})

const onSubmit = (data) => {
  console.log(data)
}

</script>


<template>
  <q-layout>
    <q-page-container>
      <q-page padding>


        <FormKit type="form" v-model="obj" #default="{ value, state }" :actions="false" @submit="onSubmit">

          {{ value }}
          <FormKit type="q-input" label="Q Input" name="input1" validation="required"></FormKit>

          <FormKit type="q-select" label="Q Select" name="select1" validation="required" :options="[
            'Monaco',
            'Vatican City',
            'Maldives',
            'Tuvalu',
          ]
            " />

          <FormKit type="q-checkbox" label="Q Checkbox" name="checkbox1" />

          <FormKit type="q-radio" name="radio1" val="line" label="Line" />

          <FormKit type="q-option-group" name="group" :options="[
            { label: 'Battery too low', value: 'bat' },
            { label: 'Friend request', value: 'friend', color: 'green' },
            { label: 'Picture uploaded', value: 'upload', color: 'red' }]
            " />

          <hr />

          <FormKit type="q-option-group" option-type="checkbox" name="group2" :options="[
            { label: 'Battery too low', value: 'bat' },
            { label: 'Friend request', value: 'friend', color: 'green' },
            { label: 'Picture uploaded', value: 'upload', color: 'red' }]
            " />

          <FormKit type="q-toggle" label="Q Toogle" name="toogle1" />

          <hr />
          <FormKit type="q-rating" name="rating1" />
          <hr />
          <FormKit type="q-btn-toggle" name="btn_toggle" :options="[
            { label: 'One', value: 'one' },
            { label: 'Two', value: 'two' },
            { label: 'Three', value: 'three' }
          ]" />

          <hr />

          <FormKit type="q-date" name="date1" />
          <hr />

          <FormKit type="q-file" label="Q File" name="file1" />

          <FormKit type="q-range" label="Q Range" name="range1" />

          <FormKit type="q-color" label="Q Color" name="color1" />

          <FormKit type="q-textarea" label="Q Textarea" name="textarea1" validation="required" outlined></FormKit>



          <hr />


          <FormKit type="submit" :disabled="!state.valid || !state.dirty" />


        </FormKit>

      </q-page>
    </q-page-container>
  </q-layout>
</template>
