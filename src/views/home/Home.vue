<template>
  <div class="home">
    <home-header></home-header>
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
  import { mapState } from 'vuex'
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
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
        lastCity: ''
      }
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      getHomeInfo() {
        axios
          .get('/static/mock/index.json?city=' + this.city)
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      }
    },
    mounted() {
      this.lastCity = this.city
      this.scroll = new Bscroll(this.$refs.wrapper, { mouseWheel: true })
      this.getHomeInfo()
    },
    activated() {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this.getHomeInfo()
      }
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
      top .85rem
      left 0
      right 0
      bottom 0
</style>
