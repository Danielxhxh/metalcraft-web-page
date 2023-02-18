<template>
  <h2>Why us?</h2>

  <div class="container slide-in-left" ref="element1">
    <div class="logo-div">
      <i class="pi pi-lock"></i>
    </div>
    <div>
      <h4>Safe</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
        labore?
      </p>
    </div>
  </div>
  <hr />
  <div class="container slide-in-right" ref="element2">
    <div class="right">
      <h4>Durable</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
        labore?
      </p>
    </div>
    <div class="logo-div">
      <i class="pi pi-shield"></i>
    </div>
  </div>
  <hr />
  <div class="container slide-in-left" ref="element3">
    <div class="logo-div">
      <i class="pi pi-dollar"></i>
    </div>
    <div>
      <h4>Convenient</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
        labore?
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const element1 = ref(null);
const element2 = ref(null);
const element3 = ref(null);

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("slide-in-left"))
        entry.target.classList.add("slide-in-left--active");
      if (entry.target.classList.contains("slide-in-right"))
        entry.target.classList.add("slide-in-right--active");
    }
  });
}, observerOptions);

onMounted(() => {
  observer.observe(element1.value);
  observer.observe(element2.value);
  observer.observe(element3.value);
});
</script>

<style scoped>
h4 {
  font-size: 1.5em;
  margin-bottom: 0;
}

hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    mediumpurple,
    rgba(0, 0, 0, 0)
  );
}
.container {
  align-items: center;
  display: flex;
  margin: 2em auto;
}

.logo-div {
  width: 30%;
  color: aquamarine;
  text-align: center;
}

/* .logo-div > img {
  height: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
} */

.logo-div > i {
  font-size: 3em;
}

.right {
  text-align: right;
}

.slide-in-left {
  position: relative;
  left: -50%;
}
.slide-in-left--active {
  animation: slide-in-left 3s forwards;
}

.slide-in-right {
  position: relative;
  right: -50%;
}

.slide-in-right--active {
  animation: slide-in-right 3s forwards;
}

@keyframes slide-in-left {
  from {
    left: -50%;
  }
  to {
    left: 0;
  }
}

@keyframes slide-in-right {
  from {
    right: -50%;
  }
  to {
    right: 0;
  }
}

@media screen and (max-width: 800px) {
  .logo-div {
    width: 60%;
  }
}
</style>
