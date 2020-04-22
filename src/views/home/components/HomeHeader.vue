<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <span class="header-right">
        <span class="city-text">{{ this.city }}</span>
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </span>
    </router-link>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'HomeHeader',
    computed: {
      ...mapState(['city'])
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .header
    display flex
    line-height .86rem
    background $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex 1
      height .62rem
      line-height .62rem
      background #fff
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      border-radius .1rem
      color #ccc
    .header-right
      display flex
      width 1.24rem
      float right
      text-align center
      color #fff
      justify-content space-between
      padding-left .12rem
      padding-right .12rem

      .city-text
        display inline-block
        width .84rem
        text-align center
        ellipsis()
      .arrow-icon
        margin-left -.04rem
        font-size .24rem
</style>
