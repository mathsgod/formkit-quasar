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

        <FormKit type="q-input" label="Input1" name="input1" validation="required" outlined></FormKit>
        
        <FormKit type="q-input" label="Input" name="input2" validation="required">
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </FormKit>

        <FormKit type="q-select" label="Select" name="select1" validation="required" outlined clearable :options="[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
          { label: 'Option 4', value: 'option4' },
          { label: 'Option 5', value: 'option5' },
          { label: 'Option 6', value: 'option6' },
          { label: 'Option 7', value: 'option7' },
          { label: 'Option 8', value: 'option8' },
          { label: 'Option 9', value: 'option9' },
          { label: 'Option 10', value: 'option10' },
          { label: 'Option 11', value: 'option11' },
          { label: 'Option 12', value: 'option12' },
          { label: 'Option 13', value: 'option13' },
          { label: 'Option 14', value: 'option14' },
          { label: 'Option 15', value: 'option15' },
          { label: 'Option 16', value: 'option16' },
          { label: 'Option 17', value: 'option17' },
          { label: 'Option 18', value: 'option18' },
          { label: 'Option 19', value: 'option19' },
          { label: 'Option 20', value: 'option20' },
          { label: 'Option 21', value: 'option21' },
          { label: 'Option 22', value: 'option22' },
          { label: 'Option 23', value: 'option23' },
          { label: 'Option 24', value: 'option24' },
          { label: 'Option 25', value: 'option25' },
          { label: 'Option 26', value: 'option26' },
          { label: 'Option 27', value: 'option27' },
          { label: 'Option 28', value: 'option28' },
          { label: 'Option 29', value: 'option29' },
          { label: 'Option 30', value: 'option30' },
          { label: 'Option 31', value: 'option31' },
          { label: 'Option 32', value: 'option32' },
          { label: 'Option 33', value: 'option33' },
        ]">

        </FormKit>


      </q-page>
    </q-page-container>
  </q-layout>
</template>
