<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { useClipboard } from '@vueuse/core'
import type { EditorView } from '@codemirror/view'
import type { EditorState } from '@codemirror/state'
import { CheckIcon, CodeIcon, FileCopyIcon, UnfoldLessIcon } from 'tdesign-icons-vue-next'
import { Codemirror } from 'vue-codemirror'
import { json } from '@codemirror/lang-json'
import { oneDark } from '@codemirror/theme-one-dark'
import Description from './json.desc.md'

const extensions = [json(), oneDark]
const code = ref('{ "name": "闪·芬奇", "description": "五彩缤纷工具箱", "star": 1024, "skills": ["format", "encrypt", "doc"], "url": "https://shanfenqi.com" }')
const { copy, copied } = useClipboard({ source: code })

// Codemirror EditorView instance ref
const editor = shallowRef()

const editorErrorMsg = ref('')

interface EditorPayload {
  view: EditorView
  state: EditorState
  container: HTMLDivElement
}

function handleReady(payload: EditorPayload) {
  editor.value = payload.view
}

function handleFormat(flag: boolean) {
  // flag --> true: 压缩 | false: 格式化

  // CodeMirror6 用法  http://events.jianshu.io/p/963fec25d957
  /* const code = editor.value.state.doc.toString()
  let formatCode = code

  try {
    formatCode = JSON.stringify(JSON.parse(code), null, flag ? 0 : 2)
  }
  catch (error: any) {
    editorErrorMsg.value = error.message || '📢 请确保 JSON 格式正确'
    return false
  }
  // 验证正确
  editorErrorMsg.value = ''
  editor.value.dispatch({
    changes: {
      from: 0,
      to: code.length,
      insert: formatCode,
    },
  }) */

  // new logic
  editorErrorMsg.value = ''
  try {
    code.value = JSON.stringify(JSON.parse(code.value), null, flag ? 0 : 2)
  }
  catch (error: any) {
    editorErrorMsg.value = error.message || '📢 请确保 JSON 格式正确'
  }
}
</script>

<template>
  <div class="json-wrapper">
    <section class="mb-6 rounded-md shadow hover:shadow-lg transition-shadow duration-500 overflow-hidden">
      <!-- 编辑器 -->
      <codemirror
        v-model="code"
        placeholder="输入要格式化的JSON数据"
        :style="{ height: '400px' }"
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="extensions"
        @ready="handleReady"
      />
      <!-- 操作 -->
      <div class="p-3 bg-white flex content-center">
        <div class="flex-1">
          <t-button class="mr-2" @click="handleFormat(false)">
            <template #icon>
              <CodeIcon />
            </template>
            <span>格式化</span>
          </t-button>
          <t-button variant="outline" class="mr-2" @click="handleFormat(true)">
            <template #icon>
              <UnfoldLessIcon />
            </template>
            <span>压缩</span>
          </t-button>
          <t-button variant="outline" @click="copy(code)">
            <template #icon>
              <FileCopyIcon v-if="!copied" />
              <CheckIcon v-else />
            </template>
            <span v-if="!copied">复制</span>
            <span v-else>完成</span>
          </t-button>
        </div>
        <!-- Error Message -->
        <span v-show="editorErrorMsg" class="leading-[32px] text-red">{{ editorErrorMsg }}</span>
      </div>
    </section>
    <!-- 说明 -->
    <div class="sfq-card">
      <div class="sfq-card-title">
        JSON 格式化使用技巧
      </div>
      <div class="leading-6 text-gray-700">
        <Description />
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
