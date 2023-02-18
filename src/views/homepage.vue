<template>
  <div class="main">
    <h1>Nikolla's Metalcraft</h1>
    <Menubar :model="menu" class="navbar" />
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
  </div>
</template>

<script setup>
import Features from "../components/Features.vue";
import MainGalleria from "../components/MainGalleria.vue";

const menu = [
  {
    label: "Edit",
    icon: "pi pi-fw pi-pencil",
    items: [
      {
        label: "Left",
        icon: "pi pi-fw pi-align-left",
      },
      {
        label: "Right",
        icon: "pi pi-fw pi-align-right",
      },
      {
        label: "Center",
        icon: "pi pi-fw pi-align-center",
      },
      {
        label: "Justify",
        icon: "pi pi-fw pi-align-justify",
      },
    ],
  },
  {
    label: "Users",
    icon: "pi pi-fw pi-user",
    items: [
      {
        label: "New",
        icon: "pi pi-fw pi-user-plus",
      },
      {
        label: "Delete",
        icon: "pi pi-fw pi-user-minus",
      },
      {
        label: "Search",
        icon: "pi pi-fw pi-users",
        items: [
          {
            label: "Filter",
            icon: "pi pi-fw pi-filter",
            items: [
              {
                label: "Print",
                icon: "pi pi-fw pi-print",
              },
            ],
          },
          {
            icon: "pi pi-fw pi-bars",
            label: "List",
          },
        ],
      },
    ],
  },
  {
    label: "Events",
    icon: "pi pi-fw pi-calendar",
    items: [
      {
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Save",
            icon: "pi pi-fw pi-calendar-plus",
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
      {
        label: "Archieve",
        icon: "pi pi-fw pi-calendar-times",
        items: [
          {
            label: "Remove",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
    ],
  },
  {
    label: "Quit",
    icon: "pi pi-fw pi-power-off",
  },
];
</script>

<style scoped>
.main {
  width: 60%;
  margin: auto;
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
  transform: scale(0.6); /* make the other images smaller */
}

@media screen and (max-width: 800px) {
  .main {
    width: 90%;
  }
}
</style>
