<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {});
</script>

<template>
  <div id="main-div">
    <router-view />
  </div>
</template>

<style scoped>
#main-div {
  margin: 0 auto 0 0;
  padding: 0 auto 2em 0;
  overflow: auto;
  width: 100%;
  z-index: 0;
}

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
