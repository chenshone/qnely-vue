<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from './components/CityHeader'
  import CitySearch from './components/CitySearch'
  import CityList from './components/CityList'
  import CityAlphabet from './components/CityAlphabet'

  import axios from 'axios'
  export default {
    name: 'City',
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    data() {
      return {
        cities: {},
        hotCities: [],
        letter: ''
      }
    },
    methods: {
      getCityInfo() {
        axios
          .get('/qnely-vue/static/mock/city.json')
          .then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc(res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
      },
      handleLetterChange(letter) {
        this.letter = letter
      }
    },
    mounted() {
      this.getCityInfo()
    }
  }
</script>

<style lang="stylus" scoped></style>
