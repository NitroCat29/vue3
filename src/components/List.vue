<template>
  <div class="box">
    <input
      class="input is-info"
      v-model="searchQuery"
      placeholder="Search..."
    />
    <ul>
      <li
        v-for="item in filteredItems"
        :key="item.id"
        :class="{ hovered: hovered === item.id }"
        @mouseover="hovered = item.id"
        @mouseleave="hovered = null"
        @click="navigateToItem(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";

const items = ref([
  { id: 1, name: "Pisang", age: Math.floor(Math.random() * 10) + 1 },
  { id: 2, name: "Nanas", age: Math.floor(Math.random() * 10) + 1 },
  { id: 3, name: "Cherry", age: Math.floor(Math.random() * 10) + 1 },
  { id: 4, name: "Kurma", age: Math.floor(Math.random() * 10) + 1 },
  { id: 5, name: "Jengkol", age: Math.floor(Math.random() * 10) + 1 },
  { id: 6, name: "Jeruk nipis", age: Math.floor(Math.random() * 10) + 1 },
  { id: 7, name: "Jeruk purut", age: Math.floor(Math.random() * 10) + 1 },
  { id: 8, name: "Mangga", age: Math.floor(Math.random() * 10) + 1 },
  { id: 9, name: "Kedondong", age: Math.floor(Math.random() * 10) + 1 },
  { id: 10, name: "Jeruk buah", age: Math.floor(Math.random() * 10) + 1 },
]);

const searchQuery = ref("");
const hovered = ref(null);
const router = useRouter();

const navigateToItem = (item) => {
  router.push({
    name: "Detailed",
    params: {
      name: item.name.toLowerCase(),
    },
    query: { id: Number(item.id), age: Number(item.age) },
  });
};

const filteredItems = computed(() => {
  return items.value.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

watch(searchQuery, (newQuery, oldQuery) => {
  console.log(`Search query changed from "${oldQuery}" to "${newQuery}"`);
});
</script>

<style scoped>
.box {
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input {
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  cursor: pointer;
  transition: all;
  text-align: center;
}

.hovered {
  color: red;
  font-weight: bold;
  font-size: 20px;
}
</style>
