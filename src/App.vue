<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {});
</script>

<template>
  <router-view />
</template>

<style scoped>
@keyframes rotate {
  from {
    rotate: 0deg;
  }
  50% {
    scale: 1 1.5;
  }
  to {
    rotate: 360deg;
  }
}
</style>
