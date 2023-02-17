<script setup>
import { ref, onMounted } from "vue";

const blob = ref(null);
onMounted(() => {
  document.onpointermove = (event) => {
    const { clientX, clientY } = event;

    blob.value.animate(
      { left: `${clientX}px`, top: `${clientY}px` },
      { duration: 3000, fill: "forwards" }
    );
  };
});
</script>

<template>
  <div id="blob" ref="blob"></div>
  <div id="blur">
    <router-view />
  </div>
</template>

<style scoped>
#blob {
  background: linear-gradient(to right, aquamarine, mediumpurple);
  height: 34vmax;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  animation: rotate 20s infinite;
  z-index: -1;
  opacity: 0.8;
}

#blur {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 0;
  backdrop-filter: blur(12vmax);
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
