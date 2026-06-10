<script setup lang="ts">
import { ref } from 'vue'
import DemoShell from './_DemoShell.vue'

const formData = ref<Record<string, unknown> | null>(null)
</script>

<template>
  <q-card flat bordered class="q-mb-md">
    <q-card-section>
      <div class="text-h5">q-input</div>
      <div class="text-caption text-grey-7">
        Wraps Quasar's <code>QInput</code> as a FormKit input. Supports <code>input-type</code> for native HTML types
        and forwards slot content (e.g. <code>prepend</code>, <code>append</code>).
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <demo-shell v-model:form-data="formData">
        <template #default="{ sync }">
          <form-kit 
            type="form"
            :value="{ email: 'me@example.com' }"
            @submit="(d: Record<string, unknown>) => sync(d)"
          >
            <form-kit type="q-input" name="text" label="Text" validation="required" hint="Required field">
              <template #prepend><q-icon name="person" /></template>
            </form-kit>

            <form-kit type="q-input" name="email" label="Email" validation="email" input-type="email">
              <template #prepend><q-icon name="email" /></template>
            </form-kit>

            <form-kit type="q-input" name="password" label="Password" input-type="password">
              <template #prepend><q-icon name="lock" /></template>
            </form-kit>

            <form-kit type="q-input" name="number" label="Age" input-type="number" />

            <form-kit type="q-input" name="search" label="Search" input-type="search" />

          </form-kit>
        </template>
      </demo-shell>
    </q-card-section>
  </q-card>
</template>
