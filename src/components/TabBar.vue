<template>
  <div id="tab-bar">
    <router-link to="/">
      <span class="iconfont icon-dianying"></span>
    </router-link>
    <router-link to="/cinemas">
      <span class="iconfont icon-jianzhu"></span>
    </router-link>
    <router-link to="/about">
      <span class="iconfont icon-me"></span>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#tab-bar {
  position: fixed;
  z-index: 99;
  bottom: 0;
  width: 100%;
  height: 49px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: red;
  background: #fff;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.5);
}
.iconfont {
  font-size: 28px;
}
.router-link-active,
.router-link-exct-active {
  color: red;
}
</style>
