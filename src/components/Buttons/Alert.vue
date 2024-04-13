<script setup>
const props = defineProps({ text: { type: String } });
const emit = defineEmits(["click"]);
</script>

<template>
  <button
    class="button is-centered has-background-danger"
    type="button"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>
