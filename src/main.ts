import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// 样式
import "normalize.css";
import "./assets/main.css";
import "@/assets/styles/global.scss";
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
