<script setup>
import { computed, ref } from 'vue'
const props = defineProps({
    modelValue: String,
    context: Object
});

const value = computed({
    get: () => props.context.value,
    set: (val) => props.context.node.input(val)
})

</script>
<template>
    <q-time v-model="value" v-bind="context.attrs"></q-time>
</template>