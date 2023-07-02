<script setup lang="ts">
import { RouterView } from 'vue-router'
import { CLayout, CFooter } from '@/layout'
</script>

<template>
  <CLayout>
    <template v-slot:header>
      <div>Form</div>
    </template>
    <RouterView />
    <template v-slot:footer>
      <CFooter :copyright="new Date().getFullYear()"/>
    </template>
  </CLayout>
</template>
