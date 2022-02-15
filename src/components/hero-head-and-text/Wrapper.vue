<script setup>
  defineProps({
    background: {
      type: String,
      default: 'bg-jet-100'
    },
    textColor: {
      type: String,
      default: 'text-jet-700'
    },
    id: {
      type: String
    }
  })
</script>

<template>
  <div :id="id" :class="['py-12 md:py-24 lg:py-36', background]">
    <div :class="['container grid gap-4 mx-auto container-padding md:gap-12 md:grid-cols-2', textColor]">
      <slot/>
    </div>
  </div>
</template>