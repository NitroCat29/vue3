<script setup>
import { ref } from "vue";
import TextArea from "./subComponents/TextArea.vue";

// count
const count = ref(0);
const increment = () => count.value++;
const decrement = () => (count.value > 0 ? count.value-- : 0);

// textarea

const comment = ref("test value");
</script>

<template>
  <div class="section">
    <div class="container">
      <h1 class="title">Hello World: About</h1>
      <p>Count: {{ count }}</p>
      <div class="buttons is-centered">
        <button id="increment" class="button is-primary" @click="increment">
          Tambah +
        </button>
        <button
          id="decrement"
          class="button has-background-link"
          @click="decrement"
        >
          Kurang -
        </button>
      </div>
      <router-link class="button" to="/">Back to Home</router-link>
      <TextArea v-model="comment" class="textarea mt-2"></TextArea>
    </div>
  </div>
</template>

<style scoped>
@import url(https://fonts.bunny.net/css?family=varta:400);

* {
  font-family: "Varta", sans-serif;
}

.section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 120%;
}

.container {
  scale: 110%;
  text-align: center;
}

.is-centered {
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
}
</style>
