<script setup lang="ts">
import { RouterView } from "vue-router";
import useRouteNames from "./router/router-names";

const { RouteName } = useRouteNames();
</script>

<template>
  <head>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link
      href="https://unpkg.com/primevue/resources/themes/lara-light-indigo/theme.css"
      rel="stylesheet"
    />
    <link
      href="https://unpkg.com/primevue/resources/primevue.min.css"
      rel="stylesheet"
    />
    <link href="https://unpkg.com/primeicons/primeicons.css" rel="stylesheet" />
  </head>

  <div
    class="top-nav position-fixed start-0 mt-10 translate-middle-y translate-middle-x"
  >
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="navbar-brand">
          <RouterLink :to="{ name: RouteName.USERS }" class="title"
            >Fetchify</RouterLink
          >
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </div>
  <RouterView />
</template>

<style>
.top-nav {
  width: 100%;
  top: 4%;
}

.title {
  color: white !important;
}
</style>
