<template>
  <div class="container">
    <img src="/images/broken-door-sign.png" alt="Brooken door meme." />
    <h2>404</h2>
    <p>This is not the page you were looking for!</p>
  </div>
</template>

<script setup></script>
<style scoped>
img {
  height: 70%;
}

h2 {
  font-size: 5em;
  margin: 0 auto 0 auto;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: var(--modern-bg);
}

@media screen and (max-width: 800px) {
  img {
    height: 40%;
  }
}
</style>
