<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ formData: Record<string, unknown> | null }>()
const emit = defineEmits<{ 'update:formData': [Record<string, unknown> | null] }>()

const local = ref<Record<string, unknown> | null>(props.formData)
const syncLocal = (v: Record<string, unknown> | null) => {
    local.value = v
    emit('update:formData', v)
}
</script>

<template>
  <div class="row q-col-gutter-md">
    <div class="col-12 col-md-8">
      <slot :sync="syncLocal" />
    </div>
    <div class="col-12 col-md-4">
      <q-card flat bordered class="sticky-card">
        <q-card-section class="bg-grey-2">
          <div class="text-h6">
            <q-icon name="code" class="q-mr-sm" />
            Live Form Data
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <pre class="form-data-preview">{{ JSON.stringify(local, null, 2) }}</pre>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
.sticky-card {
  position: sticky;
  top: 70px;
}
.form-data-preview {
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 12px;
  background: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  max-height: 70vh;
  overflow-y: auto;
  margin: 0;
}
</style>
