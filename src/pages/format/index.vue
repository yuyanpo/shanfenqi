<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="sfq-base-content">
    {{ route.meta?.title }}
  </div>
</template>
