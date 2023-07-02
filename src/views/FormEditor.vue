<script setup>
import WidgetsMenu from '@/components/editor/WidgetsMenu.vue';
import FormView from '@/components/editor/FormView.vue';
import FormSetting from '@/components/editor/FormSetting.vue'
import { useFormDataStore } from '@/stores/formDataStore';
const store = useFormDataStore();
</script>

<template lang="pug">
.form-editor
    .widgets-container 
        h3.title 组件列表
        WidgetsMenu
    .form-container 
        FormView(
            :schema="store.schema"
            :activeIndex="store.activeIndex"
        )
    .settings-container 
        h3.title 属性列表
        FormSetting(
            :activeElem="store.activeElem"
        )
</template>
<style lang="less">
    .form-editor {
        display: flex;
        justify-content: center;
    }
    .widgets-container {
        width: 15rem;
        max-height: 31rem;
        overflow-y: auto;
        z-index: 11;
        background: #fafafa;
        border-radius: 5px;
        .title {
            font-size: 1rem;
            font-weight: bold;
            padding: 4px 6px;
            background: #ddd;
        }
    }
    .settings-container {
        width: 17rem;
        background: #fafafa;
        z-index: 11;
        max-height: 31rem;
        overflow-y: auto;
        border-radius: 5px;
        .title {
            font-size: 1rem;
            font-weight: bold;
            padding: 4px 6px;
            background: #ddd;
        }
    }
    .form-container {
        display: flex;
        flex: 1;
    }
</style>