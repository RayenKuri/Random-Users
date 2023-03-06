<script setup lang="ts">
import { usePagination } from '@/composables/use-pagination';
import Paginator from 'primevue/paginator/'
import {ref} from 'vue'
const { totalUsers, rows, first, onPage} = usePagination();

const targetRef = ref(null);
</script>

<template>
  <Paginator 
    :totalRecords="totalUsers" 
    :rows="rows" 
    v-model="first"
    @page="onPage($event)"
    ></Paginator>
</template>