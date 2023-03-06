<script setup lang="ts">
import { usePagination } from "@/composables/use-pagination";
const { searchValue } = usePagination();
</script>

<template>
  <div class="input-container">
    <div class="input-group">
      <input
        v-model="searchValue"
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  </div>
</template>

<style>
.input-container {
  position: fixed;
  top: 2%;
  right: 1%;
  width: 250px;
}
</style>
