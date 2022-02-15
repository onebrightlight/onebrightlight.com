<script setup>
  defineProps({
    webUrl: String,
    text: String,
    colors: {
      type: String,
      default: 'text-tart-500 bg-transparent hover:text-mint-500 hover:bg-tart-500'
    }
  })
</script>

<template>
  <a :href="webUrl" :class="['inline-block px-1 py-px -mx-1 -my-px font-bold rounded', colors]">{{ text }}</a>
</template>