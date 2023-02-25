<template>
  <Chip
    label="Kthehu"
    class="back-chip"
    icon="pi pi-arrow-left"
    @click="$router.push('/')"
  />
</template>
<script setup></script>
<style scoped>
.back-chip {
  position: fixed;
  bottom: 5%;
  right: 5%;
  background: var(--modern-secondary);
}

.back-chip {
  transition: all 0.2s ease-in-out;
}
.back-chip:hover {
  transform: scale(1.3);
}
</style>
