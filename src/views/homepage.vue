<template>
  <div class="main">
    <div class="header-div">
      <h1 style="margin-left: 25%">Nikolla's Metalcraft</h1>
    </div>
    <Menubar :model="menu" class="navbar"> </Menubar>

    <h3 id="y">Arti i punimit të hekurit.</h3>

    <p>
      Mirësevini në "Nikolla's Metalcraft", ku ne krenohemi me krijimin e dyerve
      të blinduara, portave, kangjellave dhe punimeve të tjera metalike me
      porosi që pasqyrojnë pasionin tonë për zanatin. Modelet tona variojnë nga
      moderne dhe elegante në klasike dhe me motive, duke siguruar që çdo klient
      të marrë një pjesë vërtet unike që i përshtatet stilit dhe nevojave të
      tij. Ajo që na dallon ne është përkushtimi ynë ndaj punimit cilësor dhe
      vëmendjes ndaj detajeve, duke rezultuar në produkte që jo vetëm duken
      mahnitëse, por janë ndërtuar edhe për të rezistuar në kohë. Shfletoni
      galerinë tonë të disa punimeve dhe zbuloni se si mund të rrisim pamjen dhe
      sigurinë e shtëpisë ose biznesit tuaj me artin e hekurit.
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
    label: "Faqja kryesore",
    icon: "pi pi-fw pi-home",
    to: "/",
  },
  {
    label: "Galeria",
    icon: "pi pi-fw pi-images",
    items: [
      {
        label: "Të gjitha",
        to: "/gallery",
      },
      {
        label: "Porta",
        to: "/gallery?q=Gates",
      },
      {
        label: "Dyer të blinduara",
        to: "/gallery?q=Doors",
      },
      {
        label: "Kangjella",
        to: "/gallery?q=Fences",
      },
      {
        label: "Të tjera",
        to: "/gallery?q=Others",
      },
    ],
  },
  {
    label: "Kontakte",
    icon: "pi pi-fw pi-comments",
    to: "/contacts",
  },
];
</script>

<style scoped>
.header-div {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url("https://archello.s3.eu-central-1.amazonaws.com/images/2018/01/23/636201774285263494.1516712169.5062.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 10%;
  margin-left: -50%;
  margin-right: -50%;
}

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
