<script setup>
  import Label from './Label.vue'
  defineProps({
    name: String,
    nameAttrib: String,
    id: String,
    required: Boolean,
    type: String,
    placeholder: String,
  })
</script>

<template>
  <Label v-bind="{ name: name, nameAttrib: nameAttrib }" />
  <!-- TODO: Fix that right now the input returns a required value, irrespective of the prop being passed in. -->
  <input class="footer-input" v-bind="{ name: nameAttrib, id: id, required: required, type: type, placeholder: placeholder }">
</template>