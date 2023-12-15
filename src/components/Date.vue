<script setup>
import { computed, ref } from 'vue'
const props = defineProps({
    context: Object
});

const value = computed({
    get: () => props.context.value,
    set: (val) => props.context.node.input(val)
})

</script>
<template>
    <q-date v-model="value" v-bind="context.attrs">
        <slot></slot>
    </q-date>
</template>