<script setup>
import Alert from "./Buttons/Alert";

const clicked = () => {
  alert("Tested Work!");
  console.count("click");
};
</script>

<template>
  <div>
    <div class="content" style="display: flex; align-items: center; gap: 15px">
      <h1>Learn Vue</h1>
      <p>I try to make something more interesting.</p>
      <router-link class="button is-centered" to="/about"
        >Go to About</router-link
      >
      <Alert @click="clicked" text="BUTTON ME!" />
    </div>
  </div>
</template>

<style scoped>
@import url(https://fonts.bunny.net/css?family=varta:400);

* {
  font-family: "Varta", sans-serif;
}
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>
