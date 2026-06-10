<script setup lang="ts">
import { ref } from 'vue'
import DemoShell from './_DemoShell.vue'

const formData = ref<Record<string, unknown> | null>(null)
</script>

<template>
  <q-card flat bordered class="q-mb-md">
    <q-card-section>
      <div class="text-h5">q-toggle</div>
      <div class="text-caption text-grey-7">
        On/off switch. Pass <code>color</code>, <code>label</code>, <code>true-value</code>/<code>false-value</code>
        via attrs. Error message is rendered below as a caption when validation fails.
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
            <form-kit type="q-toggle" name="notifications" label="Enable notifications" color="green" />
            <form-kit type="q-toggle" name="darkMode" label="Dark mode" color="primary" />
            <form-kit type="q-toggle" name="required1" label="Required toggle" validation="accepted" />
          </form-kit>
        </template>
      </demo-shell>
    </q-card-section>
  </q-card>
</template>
