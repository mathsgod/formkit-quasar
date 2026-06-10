<script setup lang="ts">
import { ref } from 'vue'
import DemoShell from './_DemoShell.vue'

const formData = ref<Record<string, unknown> | null>(null)
</script>

<template>
  <q-card flat bordered class="q-mb-md">
    <q-card-section>
      <div class="text-h5">q-radio</div>
      <div class="text-caption text-grey-7">
        <strong>Group mode:</strong> pass <code>:options</code> and it auto-renders as
        <code>QOptionGroup type="radio"</code> (mutually exclusive).<br />
        <strong>Single mode:</strong> without <code>options</code>, renders a single <code>QRadio</code>
        — but for the FormKit model, prefer group mode for a single-choice value.
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
            <form-kit type="q-radio" name="shape" label="Shape" validation="required"
              :options="[
                { label: 'Line', value: 'line' },
                { label: 'Rectangle', value: 'rectangle' },
                { label: 'Ellipse', value: 'ellipse' }
              ]" />
          </form-kit>
        </template>
      </demo-shell>
    </q-card-section>
  </q-card>
</template>
