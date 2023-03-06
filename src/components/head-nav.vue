<script setup lang="ts">
import pagination from "./pagination.vue";
import searchFilter from "./search-filter.vue";
import genderFilter from "./gender-filter.vue";
</script>

<template>
  <div class="paginate">
    <pagination></pagination>
  </div>
  <div>
    <searchFilter></searchFilter>
  </div>
  <div class="dropdown-container">
    <genderFilter></genderFilter>
  </div>
</template>


<style>

.paginate {
  position: fixed;
  left: 0;
  bottom: 0;
  margin-left: 33%;
}
.dropdown-container {
  position: fixed;
  top: 5px;
  left: 6%;
}

</style>