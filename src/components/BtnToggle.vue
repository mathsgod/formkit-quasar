<script setup lang="ts">
import getErrorMessage from '../utils/getErrorMessage'
import type { FormKitFrameworkContext } from '@formkit/core'
import { computed } from 'vue'

const props = defineProps<{
    context: FormKitFrameworkContext
}>()

const { error, errorMessage } = getErrorMessage(props.context.node)

const value = computed({
    get: () => props.context.value,
    set: (val) => props.context.node.input(val)
})
</script>
<template>
    <q-btn-toggle v-model="value" v-bind="(context.attrs as any)" :class="{ 'q-field--error': error }"></q-btn-toggle>
    <div v-if="error && errorMessage" class="text-negative q-mt-xs text-caption">{{ errorMessage }}</div>
</template>