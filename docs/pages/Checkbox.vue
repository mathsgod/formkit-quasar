<script setup lang="ts">
import { ref } from 'vue'
import DemoShell from './_DemoShell.vue'

const formData = ref<Record<string, unknown> | null>(null)
</script>

<template>
  <q-card flat bordered class="q-mb-md">
    <q-card-section>
      <div class="text-h5">q-checkbox</div>
      <div class="text-caption text-grey-7">
        Boolean checkbox. Use <code>validation="accepted"</code> for terms-of-service style "must be true" rules.
        Boolean value; pass <code>true-value</code> / <code>false-value</code> for custom booleans.
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
            <form-kit type="q-checkbox" name="agree" label="I agree to the terms" validation="accepted" />
            <form-kit type="q-checkbox" name="subscribe" label="Subscribe to newsletter" />
          </form-kit>
        </template>
      </demo-shell>
    </q-card-section>
  </q-card>
</template>
