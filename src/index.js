import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Icon from "./icon";
import { createPinia } from "pinia";

// createApp(App).use(router).mount("#root");

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount("#root");

Icon();
