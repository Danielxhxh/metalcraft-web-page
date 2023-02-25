<template>
  <Goback />

  <div class="container">
    <div class="map-div">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1027.4004398522547!2d19.548766399877223!3d41.18208981786821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134fdfe897b4d4fd%3A0x8d19a84d5066c1e3!2sSpitali%20Kavaj%C3%AB%2C%20Rruga%20Qazim%20Karriqi%203034%2C%20Kavaj%C3%AB%2C%20Albania!5e0!3m2!1sen!2s!4v1677268807965!5m2!1sen!2s"
        style="height: 100%; width: 100%"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="contacts-div">
      <div class="contacts">
        <h3>Na kontaktoni në:</h3>
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

<script setup>
import Goback from "../components/Goback.vue";
</script>

<style scoped>
.custom-chip {
  background: var(--modern-primary);
}

.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.map-div {
  width: 50%;
  background-color: #f8f9fa;
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

tr {
  transition: all 0.2s ease-in-out;
}

tr:hover {
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
