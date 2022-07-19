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
  <section class="json-wrapper">
    <t-card title="JSON 查看器" :bordered="false" shadow>
      <!-- 原 JSON -->
      <t-textarea v-model="json" class="source-json" placeholder="请输入要格式化的JSON" :autosize="{ minRows: 3, maxRows: 5 }" :status="status" :tips="tips" />
      <!-- 操作按钮 -->
      <t-row class="json-operate">
        <t-col :span="9">
          <t-button theme="primary" @click="handlerFormat">
            <template #icon>
              <HeartFilledIcon />
            </template>格式化
          </t-button>
          <t-button variant="outline" @click="handlerEmpty">
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
      <div v-if="html" class="json-format" v-html="html" />
    </t-card>
  </section>
  <t-card title="工具简介" :bordered="false" shadow>
    <p>JSON 是一种取代 XML 的一种轻量级的数据交换格式</p>
    <p>
      它独立于语言的文本格式的的同时还采用了类似于C语言家族的习惯 (包括C、 C++、C#、Java、JavaScript、Perl、Python等) 和 xml
      相比，它更小巧、易于人阅读和编写，并且描述能力也不差，同时也易于机器解析和生成。
    </p>
    <p>这些特性使 JSON 成为理想的数据交换语言，利于网络传输数据且节省流量而起到加快速度的作用。</p>
    <p>
      书写格式是：以 "{" 开始，"}" 结束。是一个无序的
      <t-tag theme="danger" variant="light">
        名称/值
      </t-tag>
      对集合。名称写在前面(在双引号中)，值对写在后面(同样在双引号中)，中间用冒号隔开。如果是字符串，那不管是键或值都需要用双引号引起来。
    </p>
    <p>
      <t-tag theme="danger" variant="light">
        例：{ "weburl": "https://shanfenqi.com" }
      </t-tag>
    </p>
  </t-card>
</template>

<style lang="less">
@import './JsonFormat.less';

.json-wrapper {
  margin-bottom: 40px;
  .source-json {
    margin-bottom: 10px;
  }
  .json-operate {
    .t-button {
      margin-right: 8px;
    }
  }
  .json-format {
    padding-top: 10px;
  }
}
</style>
