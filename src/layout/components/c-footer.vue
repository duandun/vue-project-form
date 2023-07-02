<template lang="pug">
div 
    span &copy; {{ props.copyright }}
</template>
  
<script setup>
  const props = defineProps({
    copyright: {
        type: [Number, String],
        default: 'CR'
    },
  })
  </script>
