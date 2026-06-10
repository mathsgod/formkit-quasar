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

const options = computed<unknown[]>(() => {
    const raw = (props.context.attrs as Record<string, unknown> | undefined)?.options
    return Array.isArray(raw) ? raw : []
})

const hasOptions = computed(() => options.value.length > 0)
</script>

<template>
    <q-option-group
        v-if="hasOptions"
        v-model="value"
        :label="context.label"
        v-bind="context.attrs"
        type="radio"
        :error="error"
        :error-message="errorMessage"
    >
        <template v-for="(_, name) in slots" #[name]="slotProps: any" :key="name">
            <slot :name="name" v-bind="slotProps ?? {}"></slot>
        </template>
    </q-option-group>
    <q-radio
        v-else
        v-model="value"
        :label="context.label"
        v-bind="(context.attrs as any)"
        :error="error"
        :error-message="errorMessage"
    >
        <template v-for="(_, name) in slots" #[name]="slotProps: any" :key="name">
            <slot :name="name" v-bind="slotProps ?? {}"></slot>
        </template>
    </q-radio>
</template>
