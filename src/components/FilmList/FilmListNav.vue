<template>
  <div id="film-list-nav">
    <router-link to="/nowplaying">正在热映</router-link>
    <router-link to="/comingsoon">即将上映</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#film-list-nav {
  position: fixed;
  width: 100%;
  height: 49px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  vertical-align: middle;
  box-shadow: 0px -5px 10px rgba($color: #000000, $alpha: 0.5);

  a {
    height: 49px;
    line-height: 49px;
  }
}

.router-link-active,
.router-link-exct-active {
  color: red;
  border-bottom: 1px solid red;
}
</style>
