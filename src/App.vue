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

        <FormKit type="form">
          <FormKit type="q-input" label="Text" name="text1" validation="required"></FormKit>
        </FormKit>

      </q-page>
    </q-page-container>
  </q-layout>
</template>
