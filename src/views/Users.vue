<script setup lang="ts">
import { useFetchApi } from "../composables/use-fetch-api";
import { usePagination } from "@/composables/use-pagination";
import useSearchParams from "@/composables/use-search-params";
import headnav from "@/components/head-nav.vue";
import useRouteNames from "@/router/router-names";

const { url } = useSearchParams();
const { filterUsers } = usePagination();
const { getUsers } = useFetchApi();
const { RouteName } = useRouteNames();

getUsers(url);

</script>
<template>
  <div class="user-container row row-cols-3 scroll-bar">
    <div
      class="card mx-1 card-holder col card-container"
      style="width: 155px; height: 200px;"
      v-for="user in filterUsers"
    >
      <div class="image-holder">
        <img
          class="card-img-top img-thumbnail rounded-circle"
          :src="user.picture.large"
          alt="Card image cap"
        />
      </div>
      <div class="card-body link-holder">
        <router-link :user="user"
          v-if="typeof user.login.uuid !== 'undefined'"
          :to="{ name: RouteName.USERDETAILS, params: { uuid: user.login.uuid } }"
          >{{ user.name.first }} {{ user.name.last }}</router-link
        >
      </div>
    </div>
  </div>

  <headnav></headnav>
</template>

<style>
.scroll-bar {
  overflow: auto;
  height: 500px;
  scroll-behavior: smooth;
}

.user-container {
  position: fixed;
  top: 17%;
  left: 23%;
  margin: auto;
  width: 850px;
}

.card-container {
  margin-bottom: 20px;
}

#link {
  color: black;
}

a:link, :visited{
  text-decoration: none;
  color: black;
}

.image-holder {
  background-color: rgb(231, 229, 229);
}

.link-holder {
  text-align: center;
  word-wrap: break-word;
  height: 50px;
}
</style>
