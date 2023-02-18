<template>
  <div class="container">
    <div class="map-div">
      <span style="color: black">Here add the google map</span>
    </div>
    <div class="contacts-div">
      <div class="contacts">
        <h3>Contact us:</h3>

        <table>
          <tr>
            <td><Chip label="Email" icon="pi pi-envelope" /></td>
            <td>
              <a href="mailto:d.xhakalliu@gmail.com"
                >xhakalliunikolla@gmail.com</a
              >
            </td>
          </tr>
          <tr>
            <td><Chip label="Phone" icon="pi pi-phone" /></td>
            <td><a href="tel:+35569401952">+35569401952</a></td>
          </tr>
          <tr>
            <td><Chip label="Whatsapp" icon="pi pi-whatsapp" /></td>
            <td>
              <a href="https://wa.me/35569401952" target="blank"
                >+35569401952</a
              >
            </td>
          </tr>
          <tr>
            <td><Chip label="Facebook" icon="pi pi-facebook" /></td>
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
tr td:first-child {
  text-align: right;
}

tr td:first-child + td {
  text-align: left;
}

.container {
  display: flex;
  height: 100%;
}

.map-div {
  width: 50%;
  background-color: white;
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

table:hover > tr:not(:hover) {
  transform: scale(0.7);
}
</style>
