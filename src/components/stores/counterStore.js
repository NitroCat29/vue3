import { defineStore } from "pinia";

export let useCounter = defineStore("counter", {
  state() {
    return { count: 0 };
  },
});
