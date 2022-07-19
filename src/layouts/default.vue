<script setup>
const menus = [
  { name: 'home', show: '首页' },
  { name: 'HttpCode', show: 'HTTP状态码' },
  { name: 'about', show: '关于' },
]
</script>

<template>
  <div class="container">
    <!-- header -->
    <section class="header-wrapper">
      <div class="sfq-header">
        <div class="logo">
          <router-link :to="{ name: 'home' }">
            <img width="90" src="@/assets/images/logo.png" alt="logo">
          </router-link>
        </div>
        <div class="menus">
          <router-link v-for="(item, index) in menus" :key="index" :to="{ name: item.name }">
            {{ item.show }}
          </router-link>
        </div>
        <div class="operations">
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="search" /></a>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="user" /></a>
        </div>
      </div>
    </section>
    <!-- content -->
    <div class="content">
      <router-view />
    </div>
    <!-- footer -->
    <div class="footer">
      Copyright @ 2020-{{ new Date().getFullYear() }} 闪·芬奇 All Rights Reserved
    </div>
  </div>
</template>

<style lang="less">
.container {
  padding-top: 60px;
}
.header-wrapper {
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: saturate(50%) blur(4px);
  box-shadow: 0px 1px 4px rgba(0, 21, 41, 0.08);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.sfq-header {
  display: flex;
  width: 1200px;
  height: 60px;
  align-items: center;
  margin: 0 auto;
  .logo {
    margin-right: 30px;
  }
  .menus {
    display: flex;
    flex: 1;
    a {
      display: block;
      height: 32px;
      padding: 0 0.9em;
      margin-right: 8px;
      line-height: 32px;
      font-size: 16px;
      color: #555;
      border-radius: 999px;
      text-decoration: none;
      &:hover,
      &.router-link-exact-active {
        color: #fff;
        background-color: #feba41;
      }
    }
  }
  .operations {
    .t-icon {
      width: 40px;
      height: 40px;
      padding: 8px;
      line-height: 40px;
    }
    a:last-child .t-icon {
      margin-right: 0;
    }
  }
}
.content {
  width: 1200px;
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
