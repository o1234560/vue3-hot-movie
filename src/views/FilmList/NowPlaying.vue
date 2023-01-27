<template>
  <div id="nowplaying" ref="nowplaying">
    <ul v-if="filmList.length > 0">
      <film-item :filmList="filmList" @handleToPage="handleToPage" />
      <film-footer :showMore="showMore" />
    </ul>
    <van-empty v-else>加载中...</van-empty>
  </div>
</template>

<script>
import http from '@/util/http'
import _ from 'lodash'
// import debounce from '@/util/debounce'
// import throttle from '@/util/throttle'
import FilmItem from '@/components/FilmList/FilmItem.vue'
import FilmFooter from '@/components/FilmList/FilmFooter.vue'

export default {
  name: 'now-playing',
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
    // console.log('创建页面', this.$route)
    // 在created中，取数据
    // this.getFilm()
  },
  mounted () {
    // console.log('挂载页面', this.$route)
    // 在mounted中，处理页面事件：如，点击、滚动等
    // 在此处，也可以，取数据
    this.getFilm()
    this.addListen()
  },
  unmounted () {
    // console.log('销毁页面', this.$route)
  },
  activated () {
    /**
     * 进入页面时触发，即页面显示时触发
     * 通常在 keep-alive 切换页面时使用
     */
    // console.log('页面活动', this.$route)

  },
  deactivated () {
    /**
     * 离开页面时触发，即页面隐藏时触发
     * 通常在 keep-alive 切换页面时使用
     */
    // console.log('页面不活动', this.$route)
  },
  computed: {
    cityId () {
      return this.$store.state.cityId
    }
  },
  watch: {
    cityId (val) {
      if (val) {
        console.log('变化了')
        this.getFilm()
      }
    }
  },
  methods: {
    getFilm () {
      console.log('当前cityId为', this.cityId)

      http({
        url: `/gateway?cityId=${this.cityId}&pageNum=${this.pageNum}&pageSize=10&type=1&k=${Math.floor(Math.random() * 10000000)}`,
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
        // this.$store.dispatch('changeCityId', this.$store.state.cityId)
      })
    },
    getMoreFilm () {
      if (this.total !== 0 && this.count < this.total) {
        this.pageNum++
        this.getFilm()
      } else {
        this.showMore = false
      }
    },
    addListen () {
      // window.addEventListener('scroll', this.handleScroll) // 监听整个窗口（最外层窗口）滚动。切换页面时，需要清除监听。不好用。
      this.$refs.nowplaying.addEventListener('scroll', this.handleScroll) // 监听具体某个元素滚动，也可以直接在元素上面添加事件。
    },
    handleScroll: _.debounce(function () {
      console.log('滚动了')
      this.getMoreFilm()
    }, 200),
    handleToPage (filmId) {
      console.log('点击了，跳转到', filmId)
      this.$router.push({
        name: 'detail',
        params: {
          filmId
        }
      })
    }

  }
}
</script>

<style lang="scss">
#nowplaying {
  height: calc(100vh - 98px);
  overflow: auto;
}
</style>
