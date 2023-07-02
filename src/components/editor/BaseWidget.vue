<template lang="pug">
.base-widget 
    Form-item(:prop="props.elem.gid" class="form-label")
        template(v-slot:label)
            span.elem-label {{ props.elem.label }}
        component(
            :is="props.curWidget"
            :elem="props.elem"
            :curRow="props.curRow"
            :formId="props.formId"
            :ref="props.elem.gid"
            :editable="props.editable"
        )
</template>

<script setup>
const props = defineProps({
    curWidget: {
        type: Object,
    },
    elem: Object,
    curRow: {
        type: Array,
        default: () => []
    },
    formId: String,
    editable: Boolean,
    rules: {
        type: Array,
        default: () => []
    }
})
</script>

<style lang="less" scoped>
.base-widget {
    .subTable-widget {
      display: inline-block;
      width: 90%;
    }
    .ivu-form-item-label {
      text-align: left;
    }
    .error-tip {
      display: inline-block;
      margin-left: 1px;
      .icon-tip {
        font-size: 14px;
        vertical-align: middle;
        color: red;
      }
    }
  }
</style>