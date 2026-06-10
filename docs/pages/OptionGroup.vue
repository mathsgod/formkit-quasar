<script setup lang="ts">
import { ref } from 'vue'
import DemoShell from './_DemoShell.vue'

const formData = ref<Record<string, unknown> | null>(null)
</script>

<template>
  <q-card flat bordered class="q-mb-md">
    <q-card-section>
      <div class="text-h5">q-option-group</div>
      <div class="text-caption text-grey-7">
        Group of options rendered as radio buttons (<code>option-type="radio"</code>, default) or checkboxes
        (<code>option-type="checkbox"</code>) or toggles (<code>option-type="toggle"</code>).<br />
        Pass <code>:options</code> as <code>[{ label, value, color? }]</code>.
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
            <form-kit type="q-option-group" name="alerts" label="Notifications" option-type="radio" :options="[
              { label: 'Battery too low', value: 'bat' },
              { label: 'Friend request', value: 'friend', color: 'green' },
              { label: 'Picture uploaded', value: 'upload', color: 'red' }
            ]" />

            <form-kit type="q-option-group" name="features" label="Enabled features" option-type="checkbox" :options="[
              { label: 'Dark mode', value: 'dark' },
              { label: 'Beta features', value: 'beta' },
              { label: 'Telemetry', value: 'telemetry' }
            ]" />

          </form-kit>
        </template>
      </demo-shell>
    </q-card-section>
  </q-card>
</template>
