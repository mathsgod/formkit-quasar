<script setup>
import { computed, ref } from 'vue'
import { getValidationMessages } from "@formkit/validation"
const props = defineProps({
    modelValue: String,
    context: Object
});

let error = ref(false);
let errorMessage = ref(null);
function showErrorMessage(msg) {
    if (msg.name == "message-updated") {
        if (msg.payload.type == "validation") {
            errorMessage.value = msg.payload.value;
        }
    }

    if (msg.name == "message-removed") {
        if (msg.payload.type == "validation") {
            errorMessage.value = "";
            error.value = false;
        }
    }

    if (msg.name == "message-added") {
        if (msg.payload.type == "validation") {
            errorMessage.value = msg.payload.value;
            error.value = true;
        }
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