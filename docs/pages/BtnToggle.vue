<script setup lang="ts">
import { ref } from 'vue'
import DemoShell from './_DemoShell.vue'

const formData = ref<Record<string, unknown> | null>(null)

const options = [
    { label: 'One', value: 'one' },
    { label: 'Two', value: 'two' },
    { label: 'Three', value: 'three' }
]
</script>

<template>
  <q-card flat bordered class="q-mb-md">
    <q-card-section>
      <div class="text-h5">q-btn-toggle</div>
      <div class="text-caption text-grey-7">
        Button group acting as a single-value selector. <strong>Deprecated by Quasar</strong> — prefer
        <code>QBtnGroup</code> with manually managed state for new code. Kept here for completeness.
        Pass <code>:options</code> as <code>[{ label, value }]</code> and <code>spread</code>, <code>glossy</code>, etc. via attrs.
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
            <form-kit type="q-btn-toggle" name="pick" :options="options" spread glossy />
            <form-kit type="q-btn-toggle" name="size" :options="[
              { label: 'S', value: 's' },
              { label: 'M', value: 'm' },
              { label: 'L', value: 'l' }
            ]" unelevated toggle-color="primary" class="q-mt-md" />
          </form-kit>
        </template>
      </demo-shell>
    </q-card-section>
  </q-card>
</template>
