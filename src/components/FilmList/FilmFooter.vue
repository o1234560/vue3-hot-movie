<template>
  <div class="footer" v-if="showMore">加载中...</div>
  <div class="footer" v-else>没有更多了</div>
</template>

<script>
export default {
  name: 'film-footer',
  props: {
    showMore: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
.footer {
  background-color: #fff;
  text-align: center;
  padding: 10px;
  color: #999;
}
</style>
