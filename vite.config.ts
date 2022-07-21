import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

// TODO 自动导入 tdesign 按需导入
// yarn add -D unplugin-vue-components unplugin-auto-import
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { TDesignResolver } from 'unplugin-vue-components/resolvers'

import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    Vue(),

    /* AutoImport({
      resolvers: [TDesignResolver({
        library: 'vue-next',
      })],
    }),

    Components({
      resolvers: [TDesignResolver({
        library: 'vue-next',
      })],
    }), */

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
  ],
})
