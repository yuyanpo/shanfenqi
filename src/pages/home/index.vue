<script setup lang="ts">
import { ref } from 'vue'

import HomeLinks from '@/components/HomeLinks.vue'
import JsonFormat from '@/components/json/JsonFormat.vue'
import Banner from '@/components/Banner.vue'

const showBanner = ref(false)
</script>

<template>
  <Banner v-if="showBanner" />
  <section class="sfq-base-content">
    <HomeLinks />
    <JsonFormat />
  </section>
</template>

<style lang="less">
</style>
