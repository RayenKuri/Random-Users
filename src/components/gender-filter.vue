<script setup lang="ts">
import Dropdown from "primevue/dropdown";
import { usePagination } from "@/composables/use-pagination";

const { selectedGender, gender } = usePagination();
</script>

<template>
  <div class="drop-down">
    <Dropdown
      v-model="selectedGender"
      :options="gender"
      placeholder="Select a Gender"
    />
  </div>
</template>