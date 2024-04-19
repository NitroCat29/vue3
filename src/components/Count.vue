<script setup lang="js">
import { ref, computed, watch } from "vue";
import { useCounter } from "./stores/counterStore.js";

const count = ref(0);
const doubleCount = computed(() => {
  return count.value * 2;
});

let counter = useCounter();

watch(count, (newCount, oldCount) => {
  console.log(`Count changed from ${oldCount} to ${newCount}`);
});

function increment() {
  count.value++;
}
</script>

<template>
  <div class="container" style="display: grid; place-items: center; gap: 20px">
    <div
      class="box mt-6 has-background-white has-text-black is-size-5 has-text-weight-bold"
    >
      <p>Count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
    </div>
    <div
      class="box mt-6 has-background-white has-text-black is-size-5 has-text-weight-bold"
    >
      <p>Count: {{ counter.count }}</p>
    </div>
    <button class="button" @click="increment">Increment</button>
    <button class="button has-background-info" @click="counter.count++">
      Pinia Increment
    </button>
  </div>
</template>
