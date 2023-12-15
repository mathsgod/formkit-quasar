<script setup>
import registerErrorMessage from '../utils/registerErrorMessage';
import { computed, ref, useSlots } from 'vue'
const props = defineProps({
    modelValue: String,
    context: Object
});

let error = ref(false);
let errorMessage = ref(null);

registerErrorMessage(props.context.node, error, errorMessage);

const slots = useSlots();

const ss = Object.entries(slots).map(([key, value]) => {
    return key;
});

const value = computed({
    get: () => props.context.value,
    set: (val) => props.context.node.input(val)
})
</script>
<template>
    <q-input v-model="value" :label="context.label" v-bind="context.attrs" :error="error" :type="context.inputType"
        :error-message="errorMessage">

        <template v-for="s in ss" v-slot:[s]="props" :key="s">
            <slot :name="s" v-bind="props ?? {}"></slot>
        </template>

        <slot></slot>
    </q-input>
</template>