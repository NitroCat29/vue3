<template>
  <div class="container">
    <div class="header">
      <h1 class="title">{{ name }}</h1>
      <p>ID: {{ id }}</p>
      <p>Age: {{ age }}</p>
    </div>
    <div class="box" v-if="ageGuess">
      <h2 class="guess">{{ guess }}</h2>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const props = defineProps({
  name: { type: String, required: true },
  id: { type: Number },
  age: { type: Number },
});
const route = useRoute();
const age = Number(route.query.age);
const ageGuess = age >= 5 ? "correct" : "wrong";
const guess = ageGuess === "correct" ? "Menang!" : "Kalah!";
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.header {
  text-align: center;
  margin-bottom: 50px;
}

.title {
  font-weight: bold;
}

.guess {
  font-weight: bold;
  font-size: 24px;
}
</style>
