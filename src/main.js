import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";

import Menubar from "primevue/menubar";
import Card from "primevue/card";
import Button from "primevue/button";
import Galleria from "primevue/galleria";
import Chip from "primevue/chip";

const app = createApp(App);

app.component("Menubar", Menubar);
app.component("Card", Card);
app.component("Button", Button);
app.component("Galleria", Galleria);
app.component("Chip", Chip);

app.use(PrimeVue).use(router).mount("#app");
