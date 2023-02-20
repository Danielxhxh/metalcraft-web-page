<template>
  <Chip
    label="Go back"
    class="back-chip"
    icon="pi pi-arrow-left"
    @click="$router.push('/')"
  />

  <div class="main">
    <h2>Gallery</h2>
    <Galleria
      :value="images"
      v-model:activeIndex="activeIndex"
      :responsiveOptions="responsiveOptions"
      :numVisible="7"
      containerStyle="max-width: 850px"
      :circular="true"
      :fullScreen="true"
      :showItemNavigators="true"
      :showThumbnails="false"
      v-model:visible="displayCustom"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        />
      </template>
      <!-- <template #thumbnail="slotProps">
        <img
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          style="display: block;"
        />
      </template> -->
    </Galleria>

    <div v-if="images" class="grid">
      <div v-for="(image, index) of images" class="col-3" :key="index">
        <img
          :src="image.thumbnailImageSrc"
          class="grid-item"
          style="cursor: pointer"
          @click="imageClick(index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// let images = ref(null);
let activeIndex = ref(0);
let displayCustom = ref(false);

function imageClick(index) {
  this.activeIndex = index;
  this.displayCustom = true;
}
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

const images = [
  {
    itemImageSrc:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    thumbnailImageSrc:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    itemImageSrc:
      "https://image.petmd.com/files/styles/863x625/public/CANS_dogsmiling_379727605.jpg",
    thumbnailImageSrc:
      "https://image.petmd.com/files/styles/863x625/public/CANS_dogsmiling_379727605.jpg",
  },
  {
    itemImageSrc:
      "https://pbs.twimg.com/profile_images/679414083616038913/AlN6yJdA_400x400.jpg",
    thumbnailImageSrc:
      "https://pbs.twimg.com/profile_images/679414083616038913/AlN6yJdA_400x400.jpg",
  },
  {
    itemImageSrc:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    thumbnailImageSrc:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    itemImageSrc:
      "https://image.petmd.com/files/styles/863x625/public/CANS_dogsmiling_379727605.jpg",
    thumbnailImageSrc:
      "https://image.petmd.com/files/styles/863x625/public/CANS_dogsmiling_379727605.jpg",
  },
  {
    itemImageSrc:
      "https://pbs.twimg.com/profile_images/679414083616038913/AlN6yJdA_400x400.jpg",
    thumbnailImageSrc:
      "https://pbs.twimg.com/profile_images/679414083616038913/AlN6yJdA_400x400.jpg",
  },
  {
    itemImageSrc:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    thumbnailImageSrc:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    itemImageSrc:
      "https://image.petmd.com/files/styles/863x625/public/CANS_dogsmiling_379727605.jpg",
    thumbnailImageSrc:
      "https://image.petmd.com/files/styles/863x625/public/CANS_dogsmiling_379727605.jpg",
  },
  {
    itemImageSrc:
      "https://pbs.twimg.com/profile_images/679414083616038913/AlN6yJdA_400x400.jpg",
    thumbnailImageSrc:
      "https://pbs.twimg.com/profile_images/679414083616038913/AlN6yJdA_400x400.jpg",
  },
];
</script>

<style scoped>
.back-chip {
  position: absolute;
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

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(5vw, auto);
  grid-gap: 15px;
}

.grid-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
