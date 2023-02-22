<template>
  <h2>Some of our greatest projects</h2>
  <div style="display: flex; justify-content: center">
    <Galleria
      style="border-radius: 50%"
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="5"
      :circular="true"
      containerStyle="max-width: 640px"
      :showItemNavigators="true"
      :showThumbnails="false"
      :showItemNavigatorsOnHover="true"
      :showIndicators="true"
      :autoPlay="true"
      :transitionInterval="4000"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        />
      </template>
      <template #thumbnail="slotProps">
        <img
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          style="display: block"
        />
      </template>
    </Galleria>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const images = [
  {
    itemImageSrc: "/products/Door00.jpg",
  },
  {
    itemImageSrc: "/products/Gate1.jpg",
  },
  {
    itemImageSrc: "/products/Door36.jpg",
  },
];
const responsiveOptions = [
  {
    breakpoint: "1024px",
    numVisible: 5,
  },
  {
    breakpoint: "768px",
    numVisible: 3,
  },
  {
    breakpoint: "560px",
    numVisible: 1,
  },
];
</script>

<style scoped></style>
