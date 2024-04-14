<script setup>
defineProps({
  modelValue: String,
});

let emit = defineEmits(["update:modelValue"]);

const onTabPress = (e) => {
  let textarea = e.target;

  let value = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd;

  textarea.value = value.substring(0, start) + "\t" + value.substring(end);

  textarea.selectionStart = textarea.selectionEnd = start + 1;
};

const updateVal = (e) => emit("update:modelValue", e.target.value);
</script>

<template>
  <textarea
    name=""
    @keydown.tab.prevent="onTabPress"
    cols="30"
    rows="10"
    @keyup="updateVal"
    v-text="modelValue"
  />
</template>
