<template>
  <div class="main">
    <h1>Nikolla's Metalcraft</h1>
    <Menubar :model="menu" class="navbar"> </Menubar>

    <h3>The art of metal.</h3>

    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi
      illo doloremque laborum magnam. Facilis culpa, eos illo ratione vitae
      veritatis eveniet, magni architecto tempore rerum exercitationem odio quas
      beatae! Minima iste ratione nostrum cupiditate, repudiandae quia sequi
      voluptates ad, quasi quam officia sint animi odit, repellendus aperiam
      aspernatur alias? Voluptatibus debitis commodi ullam tenetur, eligendi
      nemo delectus natus alias inventore saepe earum? Aut, modi! Reiciendis
      debitis maxime culpa ipsum.
    </p>
    <div class="carousel-designs">
      <img src="/images/gate.png" alt="gate design" />
      <img src="/images/door.png" alt="door design" />
      <img src="/images/fence.png" alt="fence design" />
    </div>

    <Features />
    <MainGalleria />
    <Footer />
  </div>
</template>

<script setup>
import Features from "../components/Features.vue";
import MainGalleria from "../components/MainGalleria.vue";
import Footer from "../components/Footer.vue";

const menu = [
  {
    label: "Homepage",
    icon: "pi pi-fw pi-home",
    to: "/",
  },
  {
    label: "Gallery",
    icon: "pi pi-fw pi-images",
    items: [
      {
        label: "Gates",
        to: "/gallery",
      },
      {
        label: "Doors",
        to: "/gallery",
      },
      {
        label: "Fences",
        to: "/gallery",
      },
      {
        label: "Others",
        to: "/gallery",
      },
    ],
  },
  {
    label: "Contacts",
    icon: "pi pi-fw pi-comments",
    to: "/contacts",
  },
];
</script>

<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: white;
  display: flex;
}

.carousel-designs {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.carousel-designs > img {
  width: 30%;
  aspect-ratio: 1;
  transition: all 0.3s ease-in-out; /* add a smooth transition */
}
.carousel-designs > img:hover {
  transform: scale(1.3); /* make the hovered image larger */
  z-index: 1;
}

.carousel-designs:hover > img:not(:hover) {
  transform: scale(0.7); /* make the other images smaller */
}
</style>
