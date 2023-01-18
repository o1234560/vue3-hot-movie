<template>
  <div id="home">
    <film-list-nav />
    <div class="container">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script>
import filmListNav from '@/components/FilmListNav.vue'

export default {
  name: 'HomeView',
  components: {
    filmListNav
  }

}
</script>

<style lang="scss" scoped>
#home {
  .container {
    padding-top: 49px;
  }
}
</style>
