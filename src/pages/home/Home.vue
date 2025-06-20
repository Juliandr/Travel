<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>

<script>

import HomeHeader from './components/header.vue'
import HomeSwiper from './components/Swiper.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

</style>
