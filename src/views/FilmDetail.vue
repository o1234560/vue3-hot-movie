<template>
  <div id="detail">
    <div v-if="film">
      <detail-navbar :title="film.name"></detail-navbar>

      <div
        class="film-poster"
        :style="'background-image: url(' + film.poster + ');'"
      ></div>

      <div class="film-info">
        <div class="info-title">
          <span>{{ film.name }}</span>
          <span
            ><span>{{ film.item.name }}</span></span
          >
          <span>
            <span>{{ film.grade || 0 }}</span
            >分
          </span>
        </div>
        <div>
          {{ film.category }}
        </div>
        <div>{{ formatDate(film.premiereAt) }} 上映</div>
        <div>{{ film.nation }} | {{ film.runtime }}分钟</div>
        <div class="film-more">
          <div ref="moreContent">{{ film.synopsis }}</div>
        </div>
        <div class="show-more">
          <van-icon
            @click="toggleMore()"
            :name="showMore ? 'arrow-down' : 'arrow-up'"
          ></van-icon>
        </div>
      </div>

      <div class="film-actor">
        <div>演职人员</div>
        <ul>
          <li v-for="(actor, index) in film.actors" :key="index">
            <div
              class="avatar"
              :style="'background-image: url(' + actor.avatarAddress + ');'"
            ></div>
            <div class="name">{{ actor.name }}</div>
            <div class="role">{{ actor.role }}</div>
          </li>
        </ul>
      </div>

      <div class="film-photo">
        <div>剧照</div>
        <ul>
          <li v-for="(item, index) in film.photos" :key="index">
            <img :src="item" @click="handlePhoto(index)" />
          </li>
        </ul>
      </div>

      <detail-footer></detail-footer>

      <photo-show
        v-if="photoShow"
        :photos="film.photos"
        :index="index"
        @close-show="closeShow()"
      ></photo-show>
    </div>
    <van-empty v-else>加载中...</van-empty>
  </div>
</template>

<script>
import http from '@/util/http'
import moment from 'moment'
import DetailNavbar from '@/components/FilmDetail/detail-navbar.vue'
import DetailFooter from '@/components/FilmDetail/detail-footer.vue'
import PhotoShow from '@/components/FilmDetail/photo-show.vue'

export default {
  name: 'FilmDetail',
  data () {
    return {
      film: null,
      showMore: true,
      photoShow: false,
      index: 0
    }
  },
  components: {
    DetailNavbar,
    DetailFooter,
    PhotoShow
  },
  created () {
    this.getFilm()
  },
  mounted () {
  },
  methods: {
    getFilm () {
      // console.log(this.$route.params.filmId)
      // debugger
      http({
        url: `gateway?filmId=${this.$route.params.filmId}&k=${Math.floor(Math.random() * 10000000)}`,
        headers: {
          'X-Host': 'mall.film-ticket.film.info'
        }
      }).then(res => {
        console.log(res.data.data.film)
        this.film = res.data.data.film
      })
    },
    formatDate (date) {
      return moment(date * 1000).format('YYYY-MM-DD')
    },
    toggleMore () {
      // console.log(this.$refs)
      if (this.showMore) {
        this.$refs.moreContent.parentNode.style = 'height:' + this.$refs.moreContent.offsetHeight + 'px;'
      } else {
        this.$refs.moreContent.parentNode.style = 'height:' + 40 + 'px;'
      }
      this.showMore = !this.showMore
    },
    handlePhoto (index) {
      console.log(index)
      this.index = index
      this.photoShow = true
    },
    closeShow () {
      this.photoShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
#detail {
  height: 100%;
  width: 100%;
}
.film-poster {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}
.film-info {
  background-color: #fff;
  font-size: 13px;
  color: #797d82;
  padding: 16px;
  line-height: 20px;
  div {
    margin: 4px 0;
  }
  .info-title {
    font-size: 18px;
    color: #000;
    display: flex;
    span:nth-child(2) {
      flex: 1;
      height: 18px;
      margin: 0 10px;
      span {
        background-color: #ccc;
        color: #fff;
        font-size: 13px;
        padding: 0 3px;
        border-radius: 3px;
      }
    }
    span:nth-child(3) {
      color: #ffb232;
      span {
        font-style: italic;
      }
    }
  }
  .film-more {
    width: 100%;
    height: 40px;
    overflow: hidden;
    transition: height 0.5s;
    margin: 10px 0 0;
  }
  .show-more {
    text-align: center;
    height: 13px;
    margin: 0;
    color: #ccc;
  }
}

.film-actor {
  background-color: #fff;
  margin: 10px 0;
  padding: 16px;
  overflow: hidden;
  height: 170px;
  ul {
    height: 150px;
    display: flex;
    overflow-x: auto;
    padding: 10px 0 20px;
    font-size: 12px;
    li {
      margin: 0 10px 0 0;
      text-align: center;
      .avatar {
        height: 100px;
        width: 85px;
        background-size: cover;
      }
      .name {
        padding: 10px 0 0;
      }
      .role {
        color: #797d82;
      }
    }
  }
}

.film-photo {
  background-color: #fff;
  margin: 10px 0;
  padding: 16px;
  height: 130px;
  overflow: hidden;
  ul {
    height: 100px;
    display: flex;
    padding: 10px 0 30px 0;
    overflow: auto;
    li {
      margin: 0 10px 0 0;
    }
  }
}
</style>
