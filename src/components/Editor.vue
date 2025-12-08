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
    <q-editor v-model="value" v-bind="context.attrs"></q-editor>
</template>