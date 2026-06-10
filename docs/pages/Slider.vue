<script setup lang="ts">
import { ref } from 'vue'
import DemoShell from './_DemoShell.vue'

const formData = ref<Record<string, unknown> | null>(null)
</script>

<template>
  <q-card flat bordered class="q-mb-md">
    <q-card-section>
      <div class="text-h5">q-slider &nbsp;/&nbsp; q-range &nbsp;/&nbsp; q-rating</div>
      <div class="text-caption text-grey-7">
        <strong>q-slider:</strong> single numeric value. <code>:min</code>, <code>:max</code>, <code>step</code>, <code>label</code>.<br />
        <strong>q-range:</strong> range value, bound to <code>{ min, max }</code>.<br />
        <strong>q-rating:</strong> star rating bound to a number. <code>:max</code>, <code>icon</code>, <code>icon-selected</code>, <code>color</code>.
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <demo-shell v-model:form-data="formData">
        <template #default="{ sync }">
          <form-kit 
            type="form"
            :value="{ slider: 50, range: { min: 20, max: 80 }, rating: 3 }"
            @submit="(d: Record<string, unknown>) => sync(d)"
          >
            <form-kit type="q-slider" name="slider" label="Volume" :min="0" :max="100" label-always />
            <form-kit type="q-range" name="range" label="Price range" :min="0" :max="100" label-always class="q-mt-lg" />
            <form-kit type="q-rating" name="rating" :max="5" size="2em" color="yellow" icon="star_border" icon-selected="star" class="q-mt-md" />
          </form-kit>
        </template>
      </demo-shell>
    </q-card-section>
  </q-card>
</template>
