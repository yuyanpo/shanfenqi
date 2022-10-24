import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/pages/home/index.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/format',
        name: 'Format',
        redirect: '/format/json',
        meta: {
          title: '格式化工具',
        },
        children: [
          {
            path: 'json',
            name: 'JSON',
            component: () => import('@/pages/format/json.vue'),
            meta: {
              title: 'JSON格式化',
            },
          },
          {
            path: 'html',
            name: 'HTML',
            component: () => import('@/pages/format/index.vue'),
            meta: {
              title: 'HTML格式化/压缩',
            },
          },
          {
            path: 'javascript',
            name: 'Javascript',
            component: () => import('@/pages/format/index.vue'),
            meta: {
              title: 'Javascript格式化/压缩',
            },
          },
          {
            path: 'css',
            name: 'CSS',
            component: () => import('@/pages/format/index.vue'),
            meta: {
              title: 'CSS格式化/压缩',
            },
          },
          {
            path: 'sql',
            name: 'SQL',
            component: () => import('@/pages/format/index.vue'),
            meta: {
              title: 'SQL格式化/压缩',
            },
          },
          {
            path: 'json2xml',
            name: 'JSON2XML',
            component: () => import('@/pages/format/index.vue'),
            meta: {
              title: 'JSON/XML互转',
            },
          },
          {
            path: 'xml',
            name: 'XML',
            component: () => import('@/pages/format/index.vue'),
            meta: {
              title: 'XML格式化',
            },
          },
        ],
      },
      {
        path: '/encrypt',
        name: 'Encrypt',
        redirect: '/encrypt/base64',
        meta: {
          title: '编码/加密',
        },
        children: [
          {
            path: 'base64',
            name: 'Base64',
            component: () => import('@/pages/format/index.vue'),
            meta: {
              title: 'Base64编码/解码',
            },
          },
          {
            path: 'utf8',
            name: 'Utf8',
            component: () => import('@/pages/format/index.vue'),
            meta: {
              title: 'UTF-8编码汉字互转',
            },
          },
          {
            path: 'ascii',
            name: 'Ascii',
            component: () => import('@/pages/format/index.vue'),
            meta: {
              title: 'ASCii编码汉字互转',
            },
          },
          {
            path: 'url',
            name: 'Url',
            component: () => import('@/pages/format/index.vue'),
            meta: {
              title: 'URL编码/解码',
            },
          },
        ],
      },
      {
        path: '/doc',
        name: 'Doc',
        redirect: '/doc/http_code',
        meta: {
          title: '文档/手册',
        },
        children: [
          {
            path: 'http_code',
            name: 'HttpCode',
            component: () => import('@/pages/doc/http-code.vue'),
            meta: {
              title: 'HTTP状态码',
            },
          },
        ],
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/pages/about/index.vue'),
        meta: {
          title: '关于',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title ? `${to.meta.title} | 闪·芬奇-五彩缤纷的工具箱` : '闪·芬奇-五彩缤纷的工具箱'
    next()
  }
})

export default router
