<script setup>
import { onMounted } from "vue";
import { CodeIcon } from "@heroicons/vue/outline";
import axios from "axios";

onMounted(() => {
  const options = {
    method: "POST",
    url: `https://${import.meta.env.AUTH0_DOMAIN}/oauth/token`,
    headers: { "content-type": "application/json" },
    data: {
      grant_type: "client_credentials",
      client_id: import.meta.env.AUTH0_CLIENT_ID,
      client_secret: import.meta.env.AUTH0_CLIENT_SECRET,
      audience: import.meta.env.AUTH0_API_IDENTIFIER,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("expires_in", response.data.expires_in);
    })
    .catch(function (error) {
      console.error(error);
    });
});
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center bg-neutral-50">
    <CodeIcon class="h-28 text-neutral-300" />
    <h1
      class="tracking-light text-center text-5xl font-bold leading-9 text-neutral-300"
    >
      Basic Scaffold
    </h1>
  </div>
</template>
