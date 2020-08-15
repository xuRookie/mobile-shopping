<template>
  <div class="lh-home">
    <van-search
        v-model="value"
        shape="round"
        show-action
        placeholder="请输入搜索关键词"
        class="top-search"
    >
        <template #action>
            <div @click="onSearch" class="text-primary">搜索</div>
        </template>
    </van-search>
    <div class="top-swiper">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <van-image
                    lazy-load
                    :src="image"
                    class="swiper-img" />
            </van-swipe-item>
        </van-swipe>
    </div>
    <div class="middle-content">
        <c-divider>推荐商家</c-divider>
    </div>
  </div>
</template>

<script>
import CDivider from '@components/Divider.vue'

export default {
    components: {
        CDivider
    },
    data() {
        return {
        value: '',
        images: [
            require('@/assets/images/summer.png'),
            require('@/assets/images/fall.png'),
            require('@/assets/images/winters.png')
        ]
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
        border: 1px solid $primary;
    }
    .top-search {
        padding: 10px 0 10px 8px;
    }
    .swiper-img {
        width: 100%;
        height: 200px;
        max-width: 100%;
    }
}
</style>
