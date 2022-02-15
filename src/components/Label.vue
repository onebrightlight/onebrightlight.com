<script setup>
  defineProps({
    name: String,
    nameAttrib: String
  })
</script>

<template>
  <label class="w-32 font-bold text-right md:w-auto xl:w-32" v-bind="{ for: nameAttrib }">{{ name }}</label>  
</template>