<script setup lang="ts">
import { ref } from 'vue'
import DemoShell from './_DemoShell.vue'

const formData = ref<Record<string, unknown> | null>(null)
</script>

<template>
  <q-card flat bordered class="q-mb-md">
    <q-card-section>
      <div class="text-h5">q-color</div>
      <div class="text-caption text-grey-7">
        Color picker. Bound to a hex string. Pass <code>default-view</code>, <code>format-model</code>,
        <code>palette</code> via attrs. Validation errors render as a red caption below.
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <demo-shell v-model:form-data="formData">
        <template #default="{ sync }">
          <form-kit 
            type="form"
            :value="{ color: '#1976d2' }"
            @submit="(d: Record<string, unknown>) => sync(d)"
          >
            <form-kit type="q-color" name="color" default-view="palette" />
            <form-kit type="q-color" name="accent" default-view="palette" no-header no-footer />
          </form-kit>
        </template>
      </demo-shell>
    </q-card-section>
  </q-card>
</template>
