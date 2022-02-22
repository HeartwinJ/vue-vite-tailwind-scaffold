import { createApp } from "vue";
import Bugsnag from "@bugsnag/js";
import BugsnagPluginVue from "@bugsnag/plugin-vue";
import "./tailwind.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";
import VueAuth0Plugin from "vue-auth0-plugin";
import posthog from "posthog-js";

Bugsnag.start({
  apiKey: import.meta.env.BGSNG_API_KEY,
  plugins: [new BugsnagPluginVue()],
});

const app = createApp(App);

const bugsnagVue = Bugsnag.getPlugin("vue");

posthog.init(import.meta.env.PH_API_KEY, {
  api_host: import.meta.env.PH_API_HOST,
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const auth0Options = {
  domain: import.meta.env.AUTH0_DOMAIN,
  client_id: import.meta.env.AUTH0_CLIENT_ID,
  redirect_uri: import.meta.env.AUTH0_REDIRECT_URI,
};

app.use(bugsnagVue);
app.use(router);
app.use(VueAuth0Plugin, auth0Options);
app.mount("#app");
