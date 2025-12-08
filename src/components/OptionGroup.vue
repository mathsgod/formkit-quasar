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
    <q-option-group v-model="value" :label="context.label" v-bind="context.attrs" :error="error"
        :type="(context.optionType as 'radio' | 'checkbox' | 'toggle' | undefined)" :error-message="errorMessage">
        <template v-for="(_, name) in slots" #[name]="slotProps: any" :key="name">
            <slot :name="name" v-bind="slotProps ?? {}"></slot>
        </template>
    </q-option-group>
</template>