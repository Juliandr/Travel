<template>
    <div class="search">
      <input type="text" class="search-input" placeholder="搜索城市">
    </div>
</template>

<script>

export default {
  name: 'CitySearch',
  data () {
    return {
    }
  },
  props: {
  },
  methods: {
  }
}
</script>

<style lang="stylus">
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background-color: $bgColor
    .search-input
      box-sizing: border-box
      padding: 0 .1rem
      width: 100%
      height: .62rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
</style>
