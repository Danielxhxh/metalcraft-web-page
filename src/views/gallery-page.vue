<template>
  <Chip
    label="Go back"
    class="back-chip"
    icon="pi pi-arrow-left"
    @click="$router.push('/')"
  />

  <div class="main">
    <div class="div-options">
      <h3>Gallery</h3>
      <p>Doors</p>
      <InputSwitch v-model="checkedDoors" />
      <p>Fences</p>
      <InputSwitch v-model="checkedFences" />
      <p>Gates</p>
      <InputSwitch v-model="checkedGates" />
      <p>Others</p>
      <InputSwitch v-model="checkedOthers" />
    </div>

    <div class="div-gallery">
      <Galleria
        :value="images"
        :activeIndex="activeIndex"
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
            style="width: 80%; display: block"
          />
        </template>
      </Galleria>

      <div v-if="images" class="grid">
        <div v-for="(image, index) of images" class="col-3" :key="index">
          <img
            :src="image.itemImageSrc"
            class="grid-item"
            style="cursor: pointer"
            @click="imageClick(index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

let activeIndex = ref(0);
let displayCustom = ref(false);
let images = ref([]);

let checkedDoors = ref(true);
let checkedFences = ref(true);
let checkedGates = ref(true);
let checkedOthers = ref(true);

let AllImages = ref([]);

const requireFiles = import.meta.glob("/public/products/**/*.*");
for (const path in requireFiles) {
  if (requireFiles.hasOwnProperty(path)) {
    AllImages.value.push({
      itemImageSrc: path.replace("/public", ""),
      type: path.replace("/public/products/", "").match(/(.*?)\d+/)[1],
    });
  }
}

onMounted(() => {
  if (Object.keys(route.query).length !== 0) {
    checkedDoors.value = false;
    checkedFences.value = false;
    checkedGates.value = false;
    checkedOthers.value = false;

    switch (route.query.q) {
      case "Doors":
        checkedDoors.value = true;
        break;
      case "Fences":
        checkedFences.value = true;
        break;
      case "Gates":
        checkedGates.value = true;
        break;
      case "Others":
        checkedOthers.value = true;
        break;
      default:
        break;
    }
  }

  updateImages();
});

watch([checkedDoors, checkedFences, checkedGates, checkedOthers], updateImages);

function updateImages() {
  images.value = AllImages.value.filter((image) => {
    if (
      (checkedDoors.value && image.type === "Door") ||
      (checkedFences.value && image.type === "Fence") ||
      (checkedGates.value && image.type === "Gate") ||
      (checkedOthers.value && image.type === "Other")
    )
      return image;
  });
}

function imageClick(index) {
  activeIndex.value = index;
  displayCustom.value = true;
}
</script>

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

.main {
  background-color: var(--modern-primary);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
}

.div-options {
  background-color: var(--modern-bg);
  position: fixed;
  width: 20%;
  height: 100vh;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.div-gallery {
  padding-top: 5%;
  padding-bottom: 5%;
  width: 80%;
  min-height: 100vh;
}

.grid {
  display: grid;
  width: 90%;
  margin: auto;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(5vw, auto);
  grid-gap: 15px;
}

.grid-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 800px) {
  .div-options {
    width: 30%;
  }
  .div-gallery {
    width: 70%;
  }

  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
