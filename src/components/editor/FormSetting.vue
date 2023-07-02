<template lang="pug">
.widget-setting 
    component(
        :is="store.settingCmp"
        :setting="props.activeElem"
    )
</template>

<script setup>
import { useFormDataStore } from '@/stores/formDataStore';
const props = defineProps({
    activeElem: Object
})
const store = useFormDataStore();
</script>

<style lang="less" scoped>

</style>