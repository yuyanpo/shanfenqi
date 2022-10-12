<script setup lang="ts">
import { computed } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { routes } from '@/routers'
import logo from '@/assets/images/logo.svg'

const menus = computed(() => {
  return filterHidden(routes[0].children as Array<RouteRecordRaw>)
})

function filterHidden(data: Array<RouteRecordRaw>) {
  const filterMenus = data.filter((route: any) => {
    if (route.children && route.children.length)
      route.children = filterHidden(route.children)
    if (!route.meta?.hidden)
      return true
    else
      return false
  })
  return filterMenus
}
</script>

<template>
  <div class="sfq-container">
    <!-- header -->
    <section class="header-wrapper">
      <div class="sfq-header">
        <div class="logo">
          <router-link :to="{ name: 'Home' }">
            <img :src="logo" alt="logo">
            <span>闪·芬奇</span>
          </router-link>
        </div>
        <nav class="menus">
          <div v-for="(item, index) in menus" :key="index">
            <div v-if="item.children" class="menu-group">
              <button>
                <span>{{ item.meta?.title }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="menu-text-icon">
                  <path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z" />
                </svg>
              </button>
              <div class="menu-sub">
                <router-link v-for="(sub, idx) in item.children" :key="idx" :to="{ name: sub.name }" class="menu-sub-item">
                  {{ sub.meta?.title }}
                </router-link>
              </div>
            </div>
            <router-link v-else :to="{ name: item.name }" class="menu-item">
              {{ item.meta?.title }}
            </router-link>
          </div>
        </nav>
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
      <span>Tips: 本站部分工具整合自网上已有工具、开源包等，并全部遵循原有协议发布，著作权归属原作者或团队</span>
      <span>Copyright @ 2020-{{ new Date().getFullYear() }} 闪·芬奇 All Rights Reserved</span>
    </div>
  </div>
</template>

<style lang="less">
@import "@/assets/styles/main.css";

.sfq-container {
  padding-top: var(--nav-height);
}
.header-wrapper {
  width: 100%;
  height: var(--nav-height);
  background-color: var(--bg-global);
  backdrop-filter: saturate(50%) blur(4px);
  // box-shadow: 0px 1px 4px rgba(0, 21, 41, 0.08);
  border-bottom: 1px solid var(--border-color-gray);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.sfq-header {
  display: flex;
  width: 1200px;
  height: var(--nav-height);
  align-items: center;
  margin: 0 auto;
  .logo {
    margin-right: 50px;
    a {
      display: flex;
      align-items: center;
    }
    img {
      display: block;
      width: 28px;
      fill: red;
      margin-right: 8px;
    }
    span {
      font-size: 15px;
    }
  }
  .menus {
    display: flex;
    flex: 1;
    .menu-item {
      display: block;
      padding: 0 12px;
      line-height: calc(var(--nav-height) - 1px);
      font-size: 13px;
      font-weight: 500;
      color: var(--text-default);
      transition: color .25s;
      white-space: nowrap;
      &:hover {
        color: var(--text-primary);
      }
      &.router-link-exact-active {
        border-bottom: 1px solid var(--text-primary);
      }
    }
    .menu-group {
      position: relative;
      button {
        display: flex;
        align-items: center;
        padding: 0 12px;
        height: var(--nav-height);
        color: var(--text-default);
        border: none;
        background-color: transparent;
        cursor: pointer;
        transition: color .5s;
        span {
          display: block;
          font-size: 13px;
          font-weight: 500;
        }
        .menu-text-icon {
          display: block;
          margin-left: 4px;
          width: 14px;
          height: 14px;
          fill: currentColor;
        }
      }
      &:hover {
        button {
          color: rgba(60, 60, 60, .7);
        }
        .menu-sub {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
      }
    }
    .menu-sub {
      border-radius: 4px;
      padding: 12px 0;
      min-width: 180px;
      border: 1px solid transparent;
      background: #fff;
      box-shadow: 0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);
      position: absolute;
      top: calc(var(--nav-height) / 2 + 15px);
      left: 0;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-4px);
      transition: opacity .25s, visibility .25s, transform .25s;
      & > a {
        display: block;
        padding: 0 18px;
        line-height: 28px;
        font-size: 13px;
        font-weight: 400;
        color: var(--text-default);
        white-space: nowrap;
        transition: color .25s;
        &:hover {
          color: var(--text-primary);
        }
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
  padding: 20px 0;
  margin: 0 auto;
}
.footer {
  padding: 16px 0;
  line-height: 1.8em;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  text-align: center;
  border-top: 1px solid var(--border-color-gray);
  span {
    display: block;
  }
}
</style>
