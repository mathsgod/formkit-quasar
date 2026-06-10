<script setup lang="ts">
import { ref } from 'vue'
import DemoShell from './_DemoShell.vue'

const formData = ref<Record<string, unknown> | null>(null)

const options = [
    { label: 'Option 1', value: 'opt1', disable: true },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Option 3', value: 'opt3' }
]
</script>

<template>
  <q-card flat bordered class="q-mb-md">
    <q-card-section>
      <div class="text-h5">q-select</div>
      <div class="text-caption text-grey-7">
        Dropdown selector. Pass <code>:options</code> as a plain string array or
        <code>[{ label, value, disable? }]</code> object array. Supports <code>multiple</code>, <code>use-chips</code>,
        etc. via attrs.
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <demo-shell v-model:form-data="formData">
        <template #default="{ sync }">
          <form-kit 
            type="form"
            @submit="(d: Record<string, unknown>) => sync(d)"
          >
            <form-kit type="q-select" name="city" label="City" validation="required"
              :options="['Monaco', 'Vatican City', 'Maldives', 'Tuvalu']" />
            <form-kit type="q-select" name="fruit" label="Fruit (object options)" :options="options" />
            <form-kit type="q-select" name="tags" label="Tags (multiple + chips)" multiple use-chips emit-value map-options
              :options="['vue', 'quasar', 'formkit']" />
          </form-kit>
        </template>
      </demo-shell>
    </q-card-section>
  </q-card>
</template>
