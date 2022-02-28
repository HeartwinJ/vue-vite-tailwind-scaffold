<script setup>
import { onMounted } from "vue";
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
  <div class="h-full w-full">
    <router-view />
  </div>
</template>
