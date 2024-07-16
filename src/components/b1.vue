<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<script>
export default {
  name: "b1",
};
</script>

<template>
  <h1>我是B1页面</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
