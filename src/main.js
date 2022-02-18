import { createApp } from "vue";
import Bugsnag from "@bugsnag/js";
import BugsnagPluginVue from "@bugsnag/plugin-vue";
import "./tailwind.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";

Bugsnag.start({
  apiKey: import.meta.env.BGSNG_API_KEY,
  plugins: [new BugsnagPluginVue()],
});

const app = createApp(App);

const bugsnagVue = Bugsnag.getPlugin("vue");

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(bugsnagVue);
app.use(router);
app.mount("#app");
