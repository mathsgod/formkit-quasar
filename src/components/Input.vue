<script setup type="ts">

import getErrorMessage from '../utils/getErrorMessage';
import { computed, useSlots } from 'vue'
const props = defineProps({
    context: Object
})

//asserts props.context
if (props.context === undefined) throw new Error('context is undefined')

const { error, errorMessage } = getErrorMessage(props.context.node);
const ss = Object.entries(useSlots()).map(([key]) => key);

const value = computed({
    get: () => props.context?.value,
    set: (val) => props.context?.node.input(val)
})


const onBlur = () => {
    if (errorMessage.value) {
        error.value = true
    } else {
        error.value = false
    }
}
</script>
<template>
    <q-input v-model="value" :label="context.label" v-bind="context.attrs" :error="error" :type="context.inputType"
        :error-message="errorMessage" @blur="onBlur">
        <template v-for="s in ss" v-slot:[s]="props" :key="s">
            <slot :name="s" v-bind="props ?? {}"></slot>
        </template>
    </q-input>
</template>