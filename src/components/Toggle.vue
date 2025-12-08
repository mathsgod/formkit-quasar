<script setup lang="ts">
import type { FormKitFrameworkContext } from '@formkit/core'
import { computed, useSlots } from 'vue'

const props = defineProps<{
    context: FormKitFrameworkContext
}>()

const slots = useSlots()

const value = computed({
    get: () => props.context.value,
    set: (val) => props.context.node.input(val)
})
</script>
<template>
    <q-toggle v-model="value" :label="context.label" v-bind="context.attrs">
        <template v-for="(_, name) in slots" #[name]="slotProps: any" :key="name">
            <slot :name="name" v-bind="slotProps ?? {}"></slot>
        </template>
    </q-toggle>
</template>