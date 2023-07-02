<template lang="pug">
BaseSetting
    template(v-slot:label)
        Input(v-model="curSetting.label")
    template(v-slot:name)
        Input(v-model="curSetting.gid")
    template(v-slot:placeholder)
        Input(v-model="curSetting.placeholder")
    template(v-slot:default-value)
        Input(v-model="curSetting.value")
    template(v-slot:desc)
        Input(v-model="curSetting.desc")
    template(v-slot:asyncExpression)
        Input(v-model="curSetting.asyncExpression")
    template(v-slot:disabled)
        i-switch(v-model="curSetting.disabled")
</template>
<script setup>
import { computed } from 'vue'
import BaseSetting from '../base-setting.vue'
import { useFormDataStore } from '@/stores/formDataStore'
const store = useFormDataStore()
const props = defineProps({
    setting: Object
})
const curSetting = computed({
    get: () => props.setting,
    set: (val) => {
        store.updateSetting(val)
    }
})
</script>
