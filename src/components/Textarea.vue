<script setup>
import { computed, ref } from 'vue'
import { getValidationMessages } from "@formkit/validation"
const props = defineProps({
    modelValue: String,
    context: Object
});

let error = ref(false);
let errorMessage = ref(null);
function showErrorMessage() {
    const messages = getValidationMessages(props.context.node);//Map

    const first = messages.entries().next().value;
    if (first) {
        const msg = first[1];
        error.value = true;
        errorMessage.value = msg[0].value;
    } else {
        error.value = false;
        errorMessage.value = null;
    }
}

const value = computed({
    get: () => props.context.value,
    set: (val) => props.context.node.input(val)
})

props.context.node.on("message-added", showErrorMessage);
props.context.node.on("message-removed", showErrorMessage);
props.context.node.on("message-updated", showErrorMessage);


</script>
<template>
    <q-input v-model="value" :label="context.label" v-bind="context.attrs" :error="error"
        :error-message="errorMessage" type="textarea"></q-input>
</template>