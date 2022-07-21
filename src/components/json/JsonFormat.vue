<script setup>
import { ref } from 'vue'

import { MessagePlugin } from 'tdesign-vue-next'
import { ClearIcon, HeartFilledIcon, TipsIcon } from 'tdesign-icons-vue-next'
import { json2HTML } from '@/utils/jsonFormat'

// mock data
// const obj = {"err_no":403,"err_msg":"must login","data":"https://www.shanfenqi.com/"};

const json = ref('')
const html = ref('')
const status = ref(null)
const tips = ref('')

// 格式化句柄
function handlerFormat() {
  resetTips()
  if (!json.value)
    return MessagePlugin.warning('请输入要格式化的JSON')

  try {
    html.value = json2HTML(json.value)
  }
  catch (e) {
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
function handlerEmpty() {
  json.value = ''
  html.value = ''
}

// 举例
function handlerExample() {
  json.value = '{ "name": "闪·芬奇", "description": "五彩缤纷工具箱", "weburl": "https://shanfenqi.com" }'
  handlerFormat()
}

// 新功能
function newTools() {
  MessagePlugin.success('新功能开发中...')
}
</script>

<template>
  <section class="bg-white px-4 pb-4 mb-6 rounded-md shadow hover:shadow-lg transition-shadow duration-500">
    <div class="h-10 leading-10 pl-2 text-16px font-bold text-gray-500 border-b-1 border-gray-200 mb4">
      JSON 查看器
    </div>
    <!-- 原 JSON -->
    <t-textarea v-model="json" class="mb-4" placeholder="请输入要格式化的JSON" :autosize="{ minRows: 3, maxRows: 5 }" :status="status" :tips="tips" />
    <!-- 操作按钮 -->
    <t-row>
      <t-col :span="9">
        <t-button class="mr-2" theme="primary" @click="handlerFormat">
          <template #icon>
            <HeartFilledIcon />
          </template>格式化
        </t-button>
        <t-button class="mr-2" variant="outline" @click="handlerEmpty">
          <template #icon>
            <ClearIcon />
          </template>清空
        </t-button>
        <t-button variant="outline" @click="handlerExample">
          <template #icon>
            <TipsIcon />
          </template>举例
        </t-button>
      </t-col>
      <!-- <t-col :span="3">111</t-col> -->
    </t-row>
    <!-- JSON 格式化 展示 -->
    <div v-if="html" class="mt-4" v-html="html" />
  </section>

  <section class="bg-white px-4 pb-4 mb-6 rounded-md shadow hover:shadow-lg transition-shadow duration-500">
    <div class="h-10 leading-10 pl-2 text-16px font-bold text-gray-500 border-b-1 border-gray-200 mb4">
      JSON 简介
    </div>
    <div class="leading-6 text-gray-700">
      <p class="my-2">
        JSON 是一种取代 XML 的一种轻量级的数据交换格式
      </p>
      <p class="my-2">
        它独立于语言的文本格式的的同时还采用了类似于C语言家族的习惯 (包括C、 C++、C#、Java、JavaScript、Perl、Python等) 和 xml
        相比，它更小巧、易于人阅读和编写，并且描述能力也不差，同时也易于机器解析和生成。
      </p>
      <p class="my-2">
        这些特性使 JSON 成为理想的数据交换语言，利于网络传输数据且节省流量而起到加快速度的作用。
      </p>
      <p class="my-2">
        书写格式是：以 "{" 开始，"}" 结束。是一个无序的
        <t-tag theme="danger" variant="light">
          名称/值
        </t-tag>
        对集合。名称写在前面(在双引号中)，值对写在后面(同样在双引号中)，中间用冒号隔开。如果是字符串，那不管是键或值都需要用双引号引起来。
      </p>
      <p class="my-2">
        <t-tag theme="danger" variant="light">
          例：{ "weburl": "https://shanfenqi.com" }
        </t-tag>
      </p>
    </div>
  </section>
</template>

<style lang="less" scoped>
@import './JsonFormat.less';
</style>
