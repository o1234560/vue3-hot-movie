<template>
  <div class="detail-navbar" :class="{ hide: isHide }">
    <span class="iconfont icon-left" @click="handleBack()"></span>
    <span v-show="!isHide" class="title" :class="{ hide: isHide }">{{
      title
    }}</span>
  </div>
</template>

<script>
// import _ from 'lodash'

export default {
  data () {
    return {
      isHide: true
    }
  },
  props: {
    title: {
      type: String,
      default: '标题'
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleBack () {
      this.$router.back()
    },
    handleScroll () {
      const scrollY = document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollY)
      if (scrollY === 0) {
        this.isHide = true
      } else {
        this.isHide = false
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.detail-navbar {
  position: fixed;
  height: 49px;
  width: 100%;
  line-height: 49px;
  text-align: center;
  display: flex;
  align-items: center;
  background: rgba($color: #fff, $alpha: 1);
  .icon-left {
    height: 26px;
    width: 26px;
    line-height: 26px;
    border-radius: 50%;
    background: rgba($color: #fff, $alpha: 0.8);
    margin: 0 10px;
  }
  .title {
    flex: 1;
    margin-right: 36px;
    // visibility: hidden;
  }
}
.hide {
  background: rgba($color: #fff, $alpha: 0);
}
</style>
