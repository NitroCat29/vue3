import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Icon from "./icon";

createApp(App).use(router).mount("#root");
Icon();
