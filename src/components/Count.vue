<template>
  <div class="container" style="display: grid; place-items: center; gap: 20px">
    <div
      class="box mt-6 has-background-white has-text-black is-size-5 has-text-weight-bold"
    >
      <p>Count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
    </div>
    <button class="button" @click="increment">Increment</button>
  </div>
</template>

<script setup lang="js">
import { ref, computed, watch } from "vue";

const count = ref(0);
const doubleCount = computed(() => {
      return count.value * 2;
    });

    watch(count, (newCount, oldCount) => {
      console.log(`Count changed from ${oldCount} to ${newCount}`);
    });

    function increment() {
      count.value++;
    }
</script>
