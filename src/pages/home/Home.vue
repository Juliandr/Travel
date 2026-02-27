<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper :list="data.swiperList"></home-swiper>
        <home-icons :iconList="data.iconList"></home-icons>
        <home-recommend :recommendList="data.recommendList"></home-recommend>
        <home-weekend :weekendList="data.weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { reactive, onMounted } from 'vue'

export default {
  name: 'HomeView',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  setup () {
    const data = reactive({
      swiperList: [],
      iconList: [],
      weekendList: [],
      recommendList: []
    })
    const store = useStore()
    const city = store.state.city
    async function getHomeInfo () {
      let res = await axios.get('/api/index.json?city=' + city.value)
      res = res.data
      if (res.ret && res.data) {
        const resData = res.data
        data.swiperList = resData.swiperList
        data.iconList = resData.iconList
        data.weekendList = resData.weekendList
        data.recommendList = resData.recommendList
      }
    }
    onMounted(() => {
      getHomeInfo()
    })
    return { data }
  }
}
</script>

<style scoped>

</style>
