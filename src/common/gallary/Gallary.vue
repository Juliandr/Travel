<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of imgs" :key="item.index">
          <img class="gallery-img" :src="item" />
        </swiper-slide>
        <template #pagination>
          <div class="swiper-pagination"></div>
        </template>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    z-index: 99
    .wrapper
      overflow: hidden
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallery-img
        width: 100%
      .swiper-pagination
        color: white
        bottom: -1rem
</style>
