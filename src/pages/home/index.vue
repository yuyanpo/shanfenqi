<script setup lang="ts">
import HomeLinks from '@/components/HomeLinks.vue'
import JsonFormat from '@/components/json/JsonFormat.vue'
</script>

<template>
  <section class="home">
    <HomeLinks />
    <JsonFormat />
  </section>
</template>

<style lang="less">
.home {
  padding: 20px 0 40px;
}
</style>
