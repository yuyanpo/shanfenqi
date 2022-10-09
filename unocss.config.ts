import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
    ['sfq-card', 'bg-white px-4 pb-4 mb-6 rounded-md shadow hover:shadow-lg transition-shadow duration-500'],
    ['sfq-card-title', 'h-10 leading-10 text-16px font-bold text-gray-500 border-b-1 border-gray-200 mb4'],
  ],
})
