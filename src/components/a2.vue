<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<script>
export default {
  name: "a2",
};
</script>

<template>
  <h1>我是A2页面</h1>
  <div>{{ count }}</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
