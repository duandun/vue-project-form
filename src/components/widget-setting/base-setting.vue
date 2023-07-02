<template lang="pug">
.base-setting(:class="props.cls")    
    .label(v-if='$slots.label')
      .sub-title 标题:
      slot(name='label')

    .label(v-if='$slots.showvalue')
      .sub-title 显示值:
      slot(name='showvalue')

    .label(v-if='$slots.name')
      .sub-title 组件标识（表单name，唯一）:
      slot(name='name')

    .label(v-if='$slots.placeholder')
      .sub-title 占位提示:
      slot(name='placeholder')

    .label(v-if='$slots["default-value"]')
      .sub-title 默认值:
      slot(name='default-value')

    .label(v-if='$slots.desc')
      .sub-title 组件说明:
      slot(name='desc')

    .label(v-if="$slots.asyncExpression")
      .sub-title 异步校验表达式：
      slot(name="asyncExpression")

    .label(v-if='$slots.color')
      .sub-title 字体颜色:
      slot(name='color')

    .label(v-if='$slots.fontSize')
      .sub-title 字体大小:
      slot(name='fontSize')

    .label(v-if='$slots.selectMultiple')
      .sub-title 添加多个人员:
      slot(name='selectMultiple')

    .label(v-if='$slots.nowDate')
      .sub-title 当前时间:
      slot(name='nowDate')

    .label(v-if='$slots.disabled')
      .sub-title 组件禁止:
      slot(name='disabled')

    .label(v-if="$slots.mobileHide")
      .sub-title 移动端隐藏:
      slot(name="mobileHide")

    slot

    .label(v-if='$slots.rules')
      .sub-title 规则:
      slot(name='rules')
</template>

<script setup>
const props = defineProps({
    cls: String,
})
</script>