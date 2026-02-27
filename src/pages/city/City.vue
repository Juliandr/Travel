<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="data.cities"></city-search>
    <city-list :cities="data.cities" :hotCities="data.hotCites" :letter="data.letter"></city-list>
    <city-alphabet :cities="data.cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/CityList.vue'
import CityAlphabet from './components/Alphabet.vue'
export default {
  name: 'CityView',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  setup () {
    const data = reactive({
      cities: {},
      hotCites: [],
      letter: ''
    })
    async function getCityInfo () {
      let res = await axios.get('/api/city.json')
      res = res.data
      if (res.ret && res.data) {
        const result = res.data
        data.cities = result.cities
        data.hotCites = result.hotCities
      }
    }
    function handleLetterChange (letter) {
      data.letter = letter
    }
    onMounted(() => {
      getCityInfo()
    })
    return {
      data,
      handleLetterChange
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
