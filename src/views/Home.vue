<script setup>
import { injectAuth } from "vue-auth0-plugin";
import { CodeIcon } from "@heroicons/vue/outline";

const auth = injectAuth();

function login() {
  auth.loginWithRedirect();
}

function logout() {
  auth.logout({
    returnTo: window.location.origin,
  });
}
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center bg-neutral-50">
    <CodeIcon class="h-28 text-neutral-300" />
    <h1
      class="tracking-light text-center text-5xl font-bold leading-9 text-neutral-300"
    >
      Basic Scaffold
    </h1>
    <div v-if="auth" class="mt-8">
      <router-link
        v-if="auth.authenticated"
        to="/profile"
        class="text-xl text-neutral-400 underline hover:text-neutral-500"
        >Go to Profile</router-link
      >
      <div class="mt-8" v-if="!auth.loading">
        <button
          class="rounded-lg bg-neutral-200 px-2 py-1 text-neutral-400"
          v-if="!auth.authenticated"
          @click="login"
        >
          Log in
        </button>
        <button
          class="rounded-lg bg-neutral-200 px-2 py-1 text-neutral-400"
          v-if="auth.authenticated"
          @click="logout"
        >
          Log out
        </button>
      </div>
    </div>
  </div>
</template>
