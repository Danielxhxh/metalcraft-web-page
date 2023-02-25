<template>
  <h2>Përse ne?</h2>

  <div class="container slide-in-left" ref="element1">
    <div class="logo-div">
      <img src="/images/padlock-128.png" />
    </div>
    <div>
      <h4>Të sigurta</h4>
      <p>
        Përdorimi i materialeve cilësore dhe i teknikave rigoroze të saldimit
        dhe instalimit plotësojnë dhe tejkalojnë standardet e sigurisë, duke
        siguruar që klientët të mund të shijojnë bukurinë e produkteve dhe të
        mbajnë mendjen e qetë.
      </p>
    </div>
  </div>
  <hr />
  <div class="container slide-in-right" ref="element2">
    <div class="right">
      <h4>Rezistente</h4>
      <p>
        Çdo produkt është bërë për të zgjatur në kohë, me veshje rezistente ndaj
        motit dhe ndryshkut për të parandaluar konsumimin dhe gërryerjen.
      </p>
    </div>
    <div class="logo-div">
      <img src="/images/shield-128.png" />
    </div>
  </div>
  <hr />
  <div class="container slide-in-left" ref="element3">
    <div class="logo-div">
      <img src="/images/banknotes-128.png" />
    </div>
    <div>
      <h4>Të leverdisshme</h4>
      <p>
        Kosto të ulëta dhe çmime konkurruese në krahasim me kompanitë më të
        mëdha që ofrojnë produkte të personalizuara sipas kërkesave specifike të
        klientëve.
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
    var(--modern-secondary),
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
  color: var(--modern-primary);
  text-align: center;
}

.logo-div > img {
  height: 100px;
  display: block;
  margin: auto;
}

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

  .logo-div > img {
    height: 50px;
  }
}
</style>
