<script setup>
import { ref } from 'vue'
import * as Config from '@/constant/WidgetList'
import { useFormDataStore } from '@/stores/formDataStore'

const widgetList = ref(Config.getWidgetList())
const store = useFormDataStore();

function addWidget(type) {
    store.addWidget(type);
}
</script>

<template lang="pug">
.widgets-menu 
    .container
        Button(type="primary" ghost long v-for="(item, k) in widgetList" :key="k" @click="addWidget(item._type)") {{ item.name }}
</template>
<style lang="less">
    .widgets-menu {
        .container {
            width: 100%;
            height: 100%;
            padding: 10px;
            background: #f4f2f2;
            button {
                margin-bottom: 10px;
                width: 48%;
                height: 50px;
                &:nth-child(odd) {
                    margin-right: 5px;
                }
            }
        }
    }
</style>