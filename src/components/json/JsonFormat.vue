<script setup lang="ts">
import { ref } from 'vue'

import { MessagePlugin } from 'tdesign-vue-next'
import { ClearIcon, HeartFilledIcon, TipsIcon } from 'tdesign-icons-vue-next'
import Description from './desc.md'
import { json2HTML } from '@/utils/jsonFormat'

// mock data
// const obj = {"err_no":403,"err_msg":"must login","data":"https://www.shanfenqi.com/"};

const json = ref('')
const html = ref('')
const status = ref<'success' | 'warning' | 'error' | null>(null)
const tips = ref('')

// 格式化
function handleFormat() {
  resetTips()
  if (!json.value)
    return MessagePlugin.warning('请输入查看的 JSON 数据')

  try {
    html.value = json2HTML(json.value)
  }
  catch (e: any) {
    status.value = 'warning'
    tips.value = e.message || '请检查格式是否正确！'
  }
}

// 重置提示
function resetTips() {
  status.value = null
  tips.value = ''
}

// 清空
function handleEmpty() {
  json.value = ''
  html.value = ''
}

// 举例
function handleExample() {
  json.value = '{ "name": "闪·芬奇", "description": "五彩缤纷工具箱", "star": 1024, "skills": ["format", "encrypt", "doc"], "url": "https://shanfenqi.com" }'
  handleFormat()
}
</script>

<template>
  <section class="sfq-card">
    <div class="sfq-card-title">
      JSON 查看器
    </div>
    <!-- 原 JSON -->
    <t-textarea v-model="json" class="mb-4" placeholder="请输入查看的 JSON 数据" :autosize="{ minRows: 3, maxRows: 5 }" :status="status" :tips="tips" />
    <!-- 操作按钮 -->
    <t-row>
      <t-col :span="9">
        <t-button class="mr-2" theme="primary" @click="handleFormat">
          <template #icon>
            <HeartFilledIcon />
          </template>
          <span>格式化</span>
        </t-button>
        <t-button class="mr-2" variant="outline" @click="handleEmpty">
          <template #icon>
            <ClearIcon />
          </template>
          <span>清空</span>
        </t-button>
        <t-button variant="outline" @click="handleExample">
          <template #icon>
            <TipsIcon />
          </template>
          <span>举例</span>
        </t-button>
      </t-col>
      <!-- <t-col :span="3">111</t-col> -->
    </t-row>
    <!-- JSON 格式化 展示 -->
    <div v-if="html" class="mt-4" v-html="html" />
  </section>

  <section class="sfq-card">
    <div class="sfq-card-title">
      JSON 简介
    </div>
    <div class="leading-6 text-gray-700">
      <Description />
    </div>
  </section>
</template>

<style lang="less" scoped>
@import './JsonFormat.less';
</style>
