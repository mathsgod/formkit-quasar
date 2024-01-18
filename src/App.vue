<script setup>
import { reactive } from "vue"
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


        
        <FormKit type="form" @submit="onSubmit" :value="{ text1: 'a', text2: 'b', editor1: '<p>hello</p>' }"
          #default="{ state, value }">

          <FormKit type="q-input" label="Text" name="text1" validation="required"></FormKit>

          <FormKit type="q-toggle" name="toggle1" :label="`Mode: ${value.toggle1}`" true-value="prod" false-value="dev" />
          {{ state }}

          {{ value }}

          <FormKit type="q-editor" name="editor1"></FormKit>
          <FormKit type="q-input" label="Text" name="text1" validation="required"></FormKit>
          <FormKit type="text" label="Text2" name="text2" validation="required"></FormKit>
        </FormKit>

      </q-page>
    </q-page-container>
  </q-layout>
</template>
