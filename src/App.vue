<template>
  <div id="app">
    <tab-bar v-if="$store.state.showTabBar" />
    <section>
      <router-view v-slot="{ Component }">
        <keep-alive include="HomeView">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </section>
  </div>
</template>

<script>
import '@/assets/icon/iconfont.css'
import tabBar from '@/components/TabBar.vue'

export default {
  components: {
    tabBar
  },
  setup () {
  }
}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  position: relative;
  background: #eee;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
  color: #000;
  &:hover {
    color: #000;
  }
}
img {
  height: 100%;
}
#app {
  overflow: hidden;
  section {
    width: 100%;
    // height: calc(100% - 49px);
    margin-bottom: 49px;
    overflow: auto;
  }
}
</style>
