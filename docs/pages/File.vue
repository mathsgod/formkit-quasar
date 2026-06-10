<script setup lang="ts">
import { ref } from 'vue'
import DemoShell from './_DemoShell.vue'

const formData = ref<Record<string, unknown> | null>(null)
</script>

<template>
  <q-card flat bordered class="q-mb-md">
    <q-card-section>
      <div class="text-h5">q-file</div>
      <div class="text-caption text-grey-7">
        File picker bound to <code>File | File[] | null</code>. Use <code>multiple</code>, <code>accept</code>,
        <code>max-file-size</code> via attrs. Note: rejected files (size/type) are NOT currently surfaced
        as a FormKit error — use Quasar's <code>@rejected</code> listener if needed.
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
            <form-kit type="q-file" name="avatar" label="Avatar" accept="image/*" max-file-size="1048576" />
            <form-kit type="q-file" name="docs" label="Documents" multiple />
          </form-kit>
        </template>
      </demo-shell>
    </q-card-section>
  </q-card>
</template>
