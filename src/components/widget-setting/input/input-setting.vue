<template lang="pug">
BaseSetting
    template(v-slot:label)
        Input(v-model="setting.label")
    template(v-slot:name)
        Input(v-model="setting.name")
    template(v-slot:placeholder)
        Input(v-model="setting.placeholder")
    template(v-slot:default-value)
        Input(v-model="setting.value")
    template(v-slot:desc)
        Input(v-model="setting.desc")
    template(v-slot:asyncExpression)
        Input(v-model="setting.asyncExpression")
    template(v-slot:disabled)
        i-switch(v-model="setting.disabled")
</template>
<script setup>
import { watch, ref } from 'vue'
import BaseSetting from '../base-setting.vue'
const props = defineProps({
    setting: Object
})
const setting = ref(props.setting)
// watch(props.setting, (value) => {
//     setting.value = value
// })
</script>
