<script setup lang="ts">
// import { useRoute } from 'vue-router'
import { CodeIcon, FileCopyIcon, UnfoldLessIcon } from 'tdesign-icons-vue-next'
// const route = useRoute()
</script>

<template>
  <div class="json-wrapper">
    <section class="mb-6 rounded-md shadow hover:shadow-lg transition-shadow duration-500 overflow-hidden">
      <!-- 编辑器 -->
      <div id="editor">
        var a = 'This is a string variable'
      </div>
      <!-- 操作 -->
      <div class="py-3 pl-3 bg-white">
        <t-button class="mr-2">
          <template #icon>
            <CodeIcon />
          </template>
          <span>格式化</span>
        </t-button>
        <t-button variant="outline" class="mr-2">
          <template #icon>
            <UnfoldLessIcon />
          </template>
          <span>压缩</span>
        </t-button>
        <t-button variant="outline">
          <template #icon>
            <FileCopyIcon />
          </template>
          <span>复制</span>
        </t-button>
      </div>
    </section>
    <!-- 说明 -->
    <div class="sfq-card">
      <div class="sfq-card-title">
        JSON格式化使用技巧
      </div>
      <div class="leading-6 text-gray-700">
        <p>这里是说明文案！</p>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.json-wrapper {
  #editor {
    height: 400px;
    background-color: #1d1f21;
    padding: 10px;
    color: bisque;
  }
}
</style>
