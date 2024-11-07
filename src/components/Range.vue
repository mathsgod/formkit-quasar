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
    <q-range v-model="value" v-bind="context.attrs">
        <template v-for="[s] in Object.entries($slots)" v-slot:[s]="props" :key="s">
            <slot :name="s" v-bind="props ?? {}"></slot>
        </template>
    </q-range>
</template>