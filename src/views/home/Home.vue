<template>
  <div class="home">
    <home-header :city="city"></home-header>
    <div class="my-wrapper" ref="wrapper">
      <div class="content">
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
      </div>
    </div>
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader'
  import HomeSwiper from './components/HomeSwiper'
  import HomeIcons from './components/HomeIcons'
  import HomeRecommend from './components/HomeRecommend'
  import HomeWeekend from './components/HomeWeekend'

  import axios from 'axios'
  import Bscroll from 'better-scroll'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    data() {
      return {
        city: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    methods: {
      getHomeInfo() {
        axios.get('/static/mock/index.json').then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.city = data.city
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper)
      this.getHomeInfo()
    }
  }
</script>
<style lang="stylus" scoped>
  .home
    overflow hidden
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    .my-wrapper
      overflow hidden
      position absolute
      top .88rem
      left 0
      right 0
      bottom 0
</style>
