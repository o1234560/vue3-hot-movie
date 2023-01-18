<template>
  <div id="nowplaying">
    <ul v-if="filmList.length > 0">
      <li class="film-item" v-for="film in filmList" :key="film.filmId">
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
      <div v-if="showMore" @click="getMoreFilm()">加载更多</div>
      <div v-else>没有更多了</div>
    </ul>
  </div>
</template>

<script>
import http from '@/util/http'

export default {
  data () {
    return {
      filmList: [],
      total: 0,
      count: 0,
      pageNum: 1,
      showMore: true
    }
  },
  created () {
    this.getFilm()
  },
  methods: {
    getFilm () {
      http({
        url: `/gateway?cityId=310100&pageNum=${this.pageNum}&pageSize=10&type=1&k=8654075`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data.data)
        this.filmList = [...this.filmList, ...res.data.data.films]
        this.total = res.data.data.total
        this.count += res.data.data.films.length
        if (this.count === this.total) {
          this.showMore = false
        }
      })
    },
    getMoreFilm () {
      if (this.total !== 0 && this.count < this.total) {
        this.pageNum++
        this.getFilm()
      } else {
        this.showMore = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#nowplaying {
  height: calc(100vh - 98px);
  overflow: auto;
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
}
</style>
