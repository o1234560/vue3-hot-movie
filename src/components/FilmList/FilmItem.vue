<template>
  <li
    class="film-item"
    v-for="film in filmList"
    :key="film.filmId"
    @click="handleToPage(film.filmId)"
  >
    <div class="left">
      <img :src="film.poster" alt="图片加载失败" />
    </div>
    <div class="middle">
      <div class="title">
        {{ film.name }}
        <span>{{ film.item.name }}</span>
      </div>
      <div class="grade">
        <div v-if="film.grade">
          观众评分<span> {{ film.grade }} </span>
        </div>
      </div>
      <div class="actors">
        主演:
        <li v-for="(actor, index) in film.actors" :key="index">
          {{ actor.name }}
        </li>
      </div>
      <div class="other">{{ film.nation }} | {{ film.runtime }}分钟</div>
    </div>
    <div class="right"><span>购票</span></div>
  </li>
</template>

<script>
export default {
  name: 'FilmItem',
  props: {
    filmList: {
      type: Object
    }
  },
  emits: ['handleToPage'],
  methods: {
    handleToPage (filmId) {
      this.$emit('handleToPage', filmId)
    }
  }
}
</script>

<style lang="scss" scoped>
.film-item {
  width: 100%;
  // height: 94px;
  display: flex;
  padding: 15px;
  background: #fff;
  box-sizing: border-box;
  .left {
    width: 66px;
    img {
      width: 100%;
    }
  }
  .middle {
    flex: 1;
    overflow: hidden;
    padding: 0 10px;
    .title {
      span {
        color: #fff;
        font-size: 12px;
        padding: 0 2px;
        background: #ccc;
      }
    }
    .grade,
    .actors,
    .other {
      height: 20px;
      line-height: 20px;
      font-size: 13px;
      color: #999;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .grade {
      span {
        margin: 0 4px;
        font-size: 14px;
        color: #ffb232;
      }
    }
    .actors {
      li {
        display: inline-block;
        padding: 0 4px;
      }
    }
  }
  .right {
    width: 50px;
    display: flex;
    // justify-content: center;
    align-items: center;
    span {
      font-size: 15px;
      padding: 2px 6px;
      color: red;
      border: 1px solid red;
    }
  }
}
</style>
