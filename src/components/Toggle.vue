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
    <q-toggle v-model="value" :label="context.label" v-bind="context.attrs"></q-toggle>
</template>