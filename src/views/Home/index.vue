<template>
  <div class="lh-home">
    <van-search
        v-model="value"
        shape="round"
        background="#4fc08d"
        placeholder="请输入搜索关键词"
        class="pl-16 pr-16"
    >
        <div slot="action" @click="onSearch" class="text-blue">搜索</div>
    </van-search>
    <div class="carousel" style="height: 400px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    onSearch() {
      console.log('search')
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.lh-home {

  /deep/ .van-search__content {
    border-radius: 20px;
    border: 1px solid $blue;
  }
}
</style>
