<script setup>
import { computed, useSlots } from 'vue'
const props = defineProps({
    context: Object
});

const ss = Object.entries(useSlots()).map(([key]) => key);

const value = computed({
    get: () => props.context.value,
    set: (val) => props.context.node.input(val)
})

</script>
<template>
    <q-editor v-model="value" v-bind="context.attrs">
        <template v-for="s in ss" v-slot:[s]="props" :key="s">
            <slot :name="s" v-bind="props ?? {}"></slot>
        </template>
    </q-editor>
</template>