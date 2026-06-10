<script setup lang="ts">
import { ref } from 'vue'
import DemoShell from './_DemoShell.vue'

const formData = ref<Record<string, unknown> | null>(null)
</script>

<template>
  <q-card flat bordered class="q-mb-md">
    <q-card-section>
      <div class="text-h5">q-editor</div>
      <div class="text-caption text-grey-7">
        Rich-text editor. Bound to a string of HTML. Pass <code>min-height</code>, <code>toolbar</code>, etc. via attrs.
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <demo-shell v-model:form-data="formData">
        <template #default="{ sync }">
          <form-kit 
            type="form"
            :value="{ editor: '<p>Hello World</p>' }"
            @submit="(d: Record<string, unknown>) => sync(d)"
          >
            <form-kit type="q-editor" name="editor" min-height="10rem" />
          </form-kit>
        </template>
      </demo-shell>
    </q-card-section>
  </q-card>
</template>
