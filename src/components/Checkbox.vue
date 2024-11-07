<script setup>
import { computed, ref } from 'vue'
import registerErrorMessage from '../utils/registerErrorMessage';
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

</script>
<template>
    <q-checkbox v-model="value" :label="context.label" v-bind="context.attrs" :error="error"
        :error-message="errorMessage">
        <template v-for="[s] in Object.entries($slots)" v-slot:[s]="props" :key="s">
            <slot :name="s" v-bind="props ?? {}"></slot>
        </template>
    </q-checkbox>
</template>