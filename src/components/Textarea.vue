<script setup>
import registerErrorMessage from '../utils/registerErrorMessage';
import { computed, ref, useSlots } from 'vue'
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
    <q-input v-model="value" :label="context.label" v-bind="context.attrs" :error="error" :error-message="errorMessage"
        type="textarea">
        <template v-for="s in ss" v-slot:[s]="props" :key="s">
            <slot :name="s" v-bind="props ?? {}"></slot>
        </template>
    </q-input>
</template>