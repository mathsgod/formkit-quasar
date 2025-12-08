<script setup lang="ts">
import type { FormKitFrameworkContext } from '@formkit/core'
import { computed } from 'vue'

const props = defineProps<{
    context: FormKitFrameworkContext
}>()

const value = computed({
    get: () => props.context.value,
    set: (val) => props.context.node.input(val)
})
</script>
<template>
    <!-- q-btn-toggle slots are passed via options[].slot property, not via template slots -->
    <q-btn-toggle v-model="value" v-bind="(context.attrs as any)"></q-btn-toggle>
</template>