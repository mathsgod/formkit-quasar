<script setup lang="ts">
import { ref } from 'vue'
import DemoShell from './_DemoShell.vue'

const formData = ref<Record<string, unknown> | null>(null)
</script>

<template>
  <q-card flat bordered class="q-mb-md">
    <q-card-section>
      <div class="text-h5">q-textarea</div>
      <div class="text-caption text-grey-7">
        Multi-line text input built on <code>QInput</code> with <code>type="textarea"</code>.
        Pass <code>rows</code> via attrs to control height.
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
            <form-kit type="q-textarea" name="bio" label="Bio" rows="3" validation="required" />
            <form-kit type="q-textarea" name="notes" label="Notes" rows="5" />
          </form-kit>
        </template>
      </demo-shell>
    </q-card-section>
  </q-card>
</template>
