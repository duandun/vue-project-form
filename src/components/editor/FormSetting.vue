<template lang="pug">
.widget-setting 
    component(
        v-if="props.activeElem"
        :is="getCurSettingCmp(props.activeElem)"
        :setting="props.activeElem"
        :ref="props.activeElem.gid"
    )
</template>

<script setup>
import { useFormDataStore } from '@/stores/formDataStore';
const props = defineProps({
    activeElem: Object
})
const store = useFormDataStore();
function getCurSettingCmp(elem) {
    if (elem) {
        return store.widgetSettings[elem.gid];
    }
    return null
}
</script>

<style lang="less" scoped>

</style>