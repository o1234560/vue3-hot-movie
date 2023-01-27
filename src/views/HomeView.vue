<template>
  <div id="home">
    <film-list-nav />
    <div class="container">
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import filmListNav from '@/components/FilmList/FilmListNav.vue'

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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
