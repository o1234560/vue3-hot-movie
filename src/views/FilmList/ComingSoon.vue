<template>
  <div id="comingsoon">
    <ul v-if="filmList.length > 0">
      <film-item :filmList="filmList"></film-item>
      <film-footer :showMore="showMore"></film-footer>
    </ul>
    <van-empty v-else description="加载中..." />
  </div>
</template>

<script>
import http from '@/util/http'
import FilmItem from '@/components/FilmList/FilmItem.vue'
import FilmFooter from '@/components/FilmList/FilmFooter.vue'

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
  components: {
    FilmItem,
    FilmFooter
  },
  created () {
    this.getFilm()
  },
  computed: {
    cityId () {
      return this.$store.state.cityId
    }
  },
  methods: {
    getFilm () {
      http({
        url: `/gateway?cityId=${this.cityId}&pageNum=${this.pageNum}&pageSize=10&type=2&k=${Math.floor(Math.random() * 10000000)}`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        // console.log(res.data.data)
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
#comingsoon {
  height: calc(100vh - 98px);
  overflow: auto;
}
</style>
