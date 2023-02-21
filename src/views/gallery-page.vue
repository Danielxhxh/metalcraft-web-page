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
      <div class="break" style="width: 100%"></div>
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
        v-model:activeIndex="activeIndex"
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

const AllImages = [
  {
    itemImageSrc: "/images/door.png",
    type: "Door",
  },
  {
    itemImageSrc:
      "https://image.petmd.com/files/styles/863x625/public/CANS_dogsmiling_379727605.jpg",
    type: "Gate",
  },
  {
    itemImageSrc:
      "https://pbs.twimg.com/profile_images/679414083616038913/AlN6yJdA_400x400.jpg",
    type: "Fence",
  },
  {
    itemImageSrc:
      "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXN8ZW58MHx8MHx8&w=1000&q=80",
    type: "Door",
  },
  {
    itemImageSrc:
      "https://image.petmd.com/files/styles/863x625/public/CANS_dogsmiling_379727605.jpg",
    type: "Other",
  },
  {
    itemImageSrc:
      "https://pbs.twimg.com/profile_images/679414083616038913/AlN6yJdA_400x400.jpg",
    type: "Other",
  },
  {
    itemImageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRemxBXu0PG6M-YaDpy-5MlNOCSQ6V2k4U77A&usqp=CAU",
    type: "Fence",
  },
  {
    itemImageSrc:
      "https://image.petmd.com/files/styles/863x625/public/CANS_dogsmiling_379727605.jpg",
    type: "Gate",
  },
  {
    itemImageSrc:
      "https://pbs.twimg.com/profile_images/679414083616038913/AlN6yJdA_400x400.jpg",
    type: "Door",
  },
  {
    itemImageSrc:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    type: "Other",
  },
  {
    itemImageSrc:
      "https://image.petmd.com/files/styles/863x625/public/CANS_dogsmiling_379727605.jpg",
    type: "Fence",
  },
  {
    itemImageSrc:
      "https://pbs.twimg.com/profile_images/679414083616038913/AlN6yJdA_400x400.jpg",
    type: "Gate",
  },
  {
    itemImageSrc:
      "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXN8ZW58MHx8MHx8&w=1000&q=80",
    type: "Door",
  },
  {
    itemImageSrc:
      "https://image.petmd.com/files/styles/863x625/public/CANS_dogsmiling_379727605.jpg",
    type: "Gate",
  },
  {
    itemImageSrc:
      "https://pbs.twimg.com/profile_images/679414083616038913/AlN6yJdA_400x400.jpg",
    type: "Other",
  },
  {
    itemImageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRemxBXu0PG6M-YaDpy-5MlNOCSQ6V2k4U77A&usqp=CAU",
    type: "Fence",
  },
  {
    itemImageSrc:
      "https://image.petmd.com/files/styles/863x625/public/CANS_dogsmiling_379727605.jpg",
    type: "Other",
  },
  {
    itemImageSrc:
      "https://pbs.twimg.com/profile_images/679414083616038913/AlN6yJdA_400x400.jpg",
    type: "Gate",
  },
];

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
  images.value = AllImages.filter((image) => {
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
  this.activeIndex = index;
  this.displayCustom = true;
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
  width: 70%;
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
  .main {
    flex-direction: column;
  }

  .div-options {
    width: 100%;
    position: relative;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .div-gallery {
    padding-top: 5%;
    padding-bottom: 5%;
    width: 100%;
  }
}
</style>
