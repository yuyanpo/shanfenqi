<template>
  <div class="container">
    <!-- header -->
    <t-head-menu v-model="menu" theme="light" @change="handleChange">
      <template #logo>
        <img width="136" src="@/assets/images/logo.png" alt="logo" />
      </template>
      <t-menu-item value="home">首页</t-menu-item>
      <t-menu-item value="about">关于我们</t-menu-item>
      <template #operations>
        <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="search" /></a>
        <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="user" /></a>
      </template>
    </t-head-menu>
    <!-- content -->
    <div class="content">
      <router-view />
    </div>
    <!-- footer -->
    <div class="footer">Copyright @ 2020-{{ new Date().getFullYear() }} 闪·芬奇 All Rights Reserved</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '../routers';

const menu = ref('home');

const handleChange = (active) => {
  router.push({ name: active });
};
</script>

<style lang="less">
.t-head-menu {
  box-shadow: 0px 1px 4px rgba(0, 21, 41, 0.08);
}
.t-menu__logo > * {
  margin-left: 24px;
}
.content {
  width: 1024px;
  margin: 0 auto;
}
.footer {
  height: 56px;
  line-height: 56px;
  color: rgba(0, 0, 0, 0.4);
  text-align: center;
  background-color: #e7e7e7;
}
</style>
