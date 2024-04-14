<template>
  <div>
    <button @click="startStopwatch">Start</button>
    <button @click="stopStopwatch">Stop</button>
    <button @click="resetStopwatch">Reset</button>
    <p>{{ elapsedTime }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const startTime = ref(null);
const elapsedTime = ref('00:00:00');
let interval;

const updateElapsedTime = () => {
  const currentTime = new Date();
  const timeDiff = currentTime - startTime.value;
  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  elapsedTime.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const startStopwatch = () => {
  startTime.value = new Date();
  interval = setInterval(updateElapsedTime, 1000);
};

const stopStopwatch = () => {
  clearInterval(interval);
};

const resetStopwatch = () => {
  startTime.value = null;
  elapsedTime.value = '00:00:00';
};

onMounted(() => {
  // Optional: Start the stopwatch on mount
   startStopwatch();
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
