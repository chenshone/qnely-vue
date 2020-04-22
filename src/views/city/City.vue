<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from './components/CityHeader'
  import CitySearch from './components/CitySearch'
  import CityList from './components/CityList'
  import CityAlphabet from './components/CityAlphabet'
  export default {
    name: 'City',
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    }
  }
</script>

<style lang="stylus" scoped></style>
