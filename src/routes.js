import Home from "./views/Home.vue";
import Profile from "./views/Profile.vue";
import NotFound from "./views/NotFound.vue";

import { AuthenticationGuard } from 'vue-auth0-plugin';

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home },
  { path: "/profile", component: Profile, beforeEnter: AuthenticationGuard },
  { path: "/:path(.*)", component: NotFound },
];
