<template lang="pug">
.input-widget
  //- 编辑状态
  Input(:placeholder="props.elem.placeholder" :disabled="props.elem.disabled" :type="inputType")
  //- 详情状态
  .show-text-no-edit(v-if='props.editable === false')
    .no-edit-value(v-if="!props.elem.password") {{vModelValue || ''}}
    .no-edit-value(v-else) ******
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  elem: {
    type: Object
  },
  editable: Boolean,
  formData: {
    type: Object
  }
})
const inputType = computed(() => props.elem.password ? 'password' : 'text');
</script>
