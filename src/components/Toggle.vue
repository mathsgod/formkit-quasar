<script setup>
import registerErrorMessage from '../utils/registerErrorMessage';
import { computed, ref } from 'vue'
const props = defineProps({
    context: Object
});

let error = ref(false);
let errorMessage = ref(null);

registerErrorMessage(props.context.node, error, errorMessage);

const value = computed({
    get: () => props.context.value,
    set: (val) => props.context.node.input(val)
})

const ss = Object.entries(useSlots()).map(([key, value]) => {
    return key;
});

</script>
<template>
    <q-toggle v-model="value" :label="context.label" v-bind="context.attrs" :error="error"
        :error-message="errorMessage"></q-toggle>
</template>