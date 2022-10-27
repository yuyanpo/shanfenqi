<template>
  <section class="sfq-banner bg-gray-200">
    <div class="sfq-banner-inner mx-auto h-[360px] pt-[100px]">
      <h1 class="w-[500px] text-2xl text-green-600">
        工具箱
      </h1>
      <p class="w-[500px] text-sm text-gray-500 mt-2">
        如果您在一遍又一遍的重复着相同的功能类，那么您最好将他们提取到一个组件或者模板片断，这样就会得到一个单一的源文件，因此可以在一个地方对他们修改。
      </p>
    </div>
  </section>
</template>

<style lang="less" scoped>
.sfq-banner {
  // background-image: linear-gradient(-38deg, #fddb92 0%, #d1fdff 100%);
  background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
}
.sfq-banner-inner {
  width: var(--base-width);
}
</style>
