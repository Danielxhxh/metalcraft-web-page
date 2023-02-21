<template>
  <Chip
    label="Go back"
    class="back-chip"
    icon="pi pi-arrow-left"
    @click="$router.push('/')"
  />

  <div class="container">
    <div class="map-div">
      <span style="color: black">Here add the google map</span>
    </div>
    <div class="contacts-div">
      <div class="contacts">
        <h3>Contact us:</h3>
        <table>
          <tr>
            <td>
              <Chip label="Email" class="custom-chip" icon="pi pi-envelope" />
            </td>
            <td>
              <a href="mailto:d.xhakalliu@gmail.com"
                >xhakalliunikolla@gmail.com</a
              >
            </td>
          </tr>
          <tr>
            <td>
              <Chip label="Phone" class="custom-chip" icon="pi pi-phone" />
            </td>
            <td><a href="tel:+35569401952">+35569401952</a></td>
          </tr>
          <tr>
            <td>
              <Chip
                label="Whatsapp"
                class="custom-chip"
                icon="pi pi-whatsapp"
              />
            </td>
            <td>
              <a href="https://wa.me/35569401952" target="blank"
                >+35569401952</a
              >
            </td>
          </tr>
          <tr>
            <td>
              <Chip
                label="Facebook"
                class="custom-chip"
                icon="pi pi-facebook"
              />
            </td>
            <td>
              <a
                href="https://www.facebook.com/nikolla.xhakalliu/"
                target="blank"
                >Nikolla Xhakalliu</a
              >
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.back-chip {
  position: fixed;
  bottom: 5%;
  right: 5%;
  background: var(--modern-secondary);
}

.custom-chip {
  background: var(--modern-primary);
}

.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.map-div {
  background-color: white;
  width: 50%;
}

.contacts-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%;
}

.contact {
  margin-top: 2em;
}

a {
  text-decoration: none;
  color: white;
}

tr,
.back-chip {
  transition: all 0.2s ease-in-out;
}

tr:hover,
.back-chip:hover {
  transform: scale(1.3);
}

tr td:first-child {
  text-align: right;
}

tr td:first-child + td {
  text-align: left;
}

table:hover > tr:not(:hover) {
  transform: scale(0.7);
}

@media screen and (max-width: 800px) {
  .container {
    flex-direction: column;
    height: 100vh;
  }

  .map-div,
  .contacts-div {
    width: 100%;
    height: 50vh;
  }
}
</style>
