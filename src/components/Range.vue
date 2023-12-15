<script setup>
import { computed, ref, useSlots } from 'vue'
const props = defineProps({
    context: Object
});

const value = computed({
    get: () => props.context.value,
    set: (val) => props.context.node.input(val)
})

const ss = Object.entries(useSlots()).map(([key, value]) => {
    return key;
});

</script>
<template>
    <q-range v-model="value" v-bind="context.attrs">
        <template v-for="s in ss" v-slot:[s]="props" :key="s">
            <slot :name="s" v-bind="props ?? {}"></slot>
        </template>
    </q-range>
</template>