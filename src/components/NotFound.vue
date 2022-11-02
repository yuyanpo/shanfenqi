<script setup lang="ts">
import NotFound from '@/assets/images/404.svg'
</script>

<template>
  <div class="h-[calc(100vh-var(--nav-height)-77px)] text-center flex flex-col justify-center">
    <img class="w-240px mx-auto" :src="NotFound">
    <h2 class="uppercase text-xl text-gray-500">
      Page Not Found
    </h2>
    <p class="text-gray-400 my-2">
      o(╥﹏╥)o 所访问的页面不存在，请确保路径正确
    </p>
  </div>
</template>
