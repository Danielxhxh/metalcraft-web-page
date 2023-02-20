<template>
  <div class="footer-basic">
    <footer>
      <p class="copyright">Nikolla's Metalcraft © 2023</p>
      <p class="copyright">
        <i class="pi pi-code" style="font-size: 13px"></i> by
        <a href="https://github.com/Danielxhxh" target="blank"
          >Daniel Xhakalliu</a
        >
      </p>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

.footer-basic {
  padding: 40px 0;
  background-color: rgba(0, 0, 0, 0);
}

.footer-basic .copyright {
  margin-top: 15px;
  text-align: center;
  font-size: 16px;
  color: var(--modern-primary);
  margin-bottom: 0;
}
</style>
