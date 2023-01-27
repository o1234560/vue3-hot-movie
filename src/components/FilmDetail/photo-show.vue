<template>
  <ul class="photo-show" @click="handleClose()">
    <van-icon class="close" name="close"></van-icon>
    <div class="title">{{ now + 1 }}/{{ photos.length }}</div>
    <div
      class="photo-show-item"
      :style="'background-image: url(' + photos[now] + ');'"
    ></div>
    <van-icon class="right" name="arrow" @click.stop="nextNow()"></van-icon>
    <van-icon class="left" name="arrow-left" @click.stop="prevNow()"></van-icon>
  </ul>
</template>

<script>
export default {
  name: 'photo-show',
  data () {
    return {
      now: 0
    }
  },
  props: {
    photos: {
      type: Array
    },
    index: {
      type: Number,
      default: 0
    }
  },
  emits: ['close-show'],
  methods: {
    handleClose () {
      this.$emit('close-show')
    },
    nextNow () {
      this.now++
      if (this.now >= this.photos.length) {
        this.now = 0
      }
    },
    prevNow () {
      this.now--
      if (this.now < 0) {
        this.now = this.photos.length - 1
      }
    }

  },
  created () {
    // console.log('图片预览')
  },
  mounted () {
    console.log('收到的index', this.index)
    this.now = this.index
  }
}
</script>

<style lang="scss" scoped>
.photo-show {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  overflow: hidden;
  color: #fff;
  background: #000;
  display: flex;

  .close {
    position: fixed;
    top: 20px;
    left: 20px;
    font-size: 24px;
  }

  .title {
    position: fixed;
    width: 20px;
    top: 20px;
    left: calc(50% - 10px);
    font-size: 20px;
  }

  .photo-show-item {
    flex-shrink: 0; // 为0时不缩水
    height: 100%;
    width: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  .left,
  .right {
    position: fixed;
    top: calc(50% - 0.5em);
    font-size: 50px;
    // background-color: rgba($color: #fff, $alpha: 0.5);
    // border-radius: 10%;
    opacity: 0.8;
  }
  .right {
    right: 0;
  }
}
</style>
