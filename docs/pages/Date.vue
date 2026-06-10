<script setup lang="ts">
import { ref } from 'vue'
import DemoShell from './_DemoShell.vue'

const formData = ref<Record<string, unknown> | null>(null)
</script>

<template>
  <q-card flat bordered class="q-mb-md">
    <q-card-section>
      <div class="text-h5">q-date &nbsp;/&nbsp; q-time</div>
      <div class="text-caption text-grey-7">
        Date and time pickers. Bound to a string by default. Pass <code>mask</code>, <code>default-view</code>,
        <code>landscape</code> etc. via attrs. Validation errors render as a red caption below the picker.
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <demo-shell v-model:form-data="formData">
        <template #default="{ sync }">
          <form-kit 
            type="form"
            :value="{ date: '2026-01-15' }"
            @submit="(d: Record<string, unknown>) => sync(d)"
          >
            <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6">
                <form-kit type="q-date" name="date" label="Date" />
              </div>
              <div class="col-12 col-sm-6">
                <form-kit type="q-time" name="time" label="Time" mask="HH:mm" />
              </div>
            </div>
            <form-kit type="q-date" name="range" label="Date range" range />
          </form-kit>
        </template>
      </demo-shell>
    </q-card-section>
  </q-card>
</template>
