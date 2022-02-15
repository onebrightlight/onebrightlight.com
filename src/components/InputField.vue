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
  <Label :name="name" :nameAttrib="nameAttrib" />
  <input class="footer-input" :name="nameAttrib" :id="id" :required="required" :type="type" :placeholder="placeholder">
</template>