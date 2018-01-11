<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- 幻灯内容 -->
      <swiper-slide v-for="slide in swiperSlides" :key="slide.id"><img :src="slide.picUrl" alt=""></swiper-slide>
      <!-- 以下控件元素均为可选 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    data() {
      return{
        swiperOption: {
          autoplay : 2000,
          loop : true,
          initialSlide: 0,
          autoplayDisableOnInteraction : false,
          pagination: '.swiper-pagination',
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    props: ['swiperSlides']
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../node_modules/swiper/dist/css/swiper.min.css"
  .swiper-slide
    img
      width: 100%
</style>
