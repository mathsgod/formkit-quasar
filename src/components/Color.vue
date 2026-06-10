<script setup lang="ts">
import getErrorMessage from '../utils/getErrorMessage'
import type { FormKitFrameworkContext } from '@formkit/core'
import { computed, useSlots } from 'vue'

const props = defineProps<{
    context: FormKitFrameworkContext
}>()

const slots = useSlots()
const { error, errorMessage } = getErrorMessage(props.context.node)

const value = computed({
    get: () => props.context.value,
    set: (val) => props.context.node.input(val)
})
</script>
<template>
    <q-color v-model="value" v-bind="context.attrs" :class="{ 'q-field--error': error }">
        <template v-for="(_, name) in slots" #[name]="slotProps: any" :key="name">
            <slot :name="name" v-bind="slotProps ?? {}"></slot>
        </template>
    </q-color>
    <div v-if="error && errorMessage" class="text-negative q-mt-xs text-caption">{{ errorMessage }}</div>
</template>