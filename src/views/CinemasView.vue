<template>
  <div id="cinemas">
    <van-nav-bar :left-text="cityId" @click-left="changeCity" />
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
    <h1>cinemas</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {

  },
  computed: {
    cityId () {
      return this.$store.state.cityId
    }
  },
  methods: {
    changeCity () {
      this.$router.push('/citylist')
    }
  }
}
</script>

<style>
</style>
