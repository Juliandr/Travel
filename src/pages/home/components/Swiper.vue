<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_b2c_001/379f40a1-a851-4aa4-957a-104f8edbdd22.gif_180x120x90_87bee0d4.gif'
      }, {
        id: '0002',
        imgUrl: 'https://img1.baidu.com/it/u=2259444725,4182202579&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1066'
      }]
    }
  }
}

</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff !important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background-color: #eee
    .swiper-img
      width: 100%
</style>
