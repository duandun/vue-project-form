
<script setup>
import { ref } from 'vue'
const prefix = ref('c-layout')
</script>

<template lang="pug">
div(:class="prefix")
    div(:class="[prefix + '-header']")
        slot(name="header")
    div(:class="[prefix + '-menu']" v-if="$slots.menu")
        slot(name="menu")
    div(:class="[prefix + '-widgets']" v-if="$slots.widgets")
        slot(name="widgets")
    div(:class="[prefix + '-settings']" v-if="$slots.settings")
        slot(name="settings")
    div(:class="[prefix + '-content']")
        slot
    div(:class="[prefix + '-footer']")
        slot(name="footer")
</template>


  