<script setup>
import { injectAuth } from "vue-auth0-plugin";

const auth = injectAuth();
</script>

<template>
  <div
    class="flex h-full flex-col items-center justify-center bg-neutral-50 text-xl text-neutral-300"
  >
    <img :src="auth.user.picture" />
    <b>Name:</b> {{ auth.user.name }}<br />
    <b>Nickname:</b> {{ auth.user.nickname }}<br />
    <b>Email:</b> {{ auth.user.email }}

    <router-link to="/" class="mt-8 text-xl underline hover:text-neutral-400">Go Home</router-link>
  </div>
</template>
