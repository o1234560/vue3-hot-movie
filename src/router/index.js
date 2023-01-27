import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      hasTabBar: true
    },
    redirect: '/nowplaying',
    children: [
      {
        path: '/nowplaying',
        name: 'nowplaying',
        component: () => import(/* webpackChunkName: "nowplaying" */ '../views/FilmList/NowPlaying.vue')
      },
      {
        path: '/comingsoon',
        name: 'comingsoon',
        component: () => import(/* webpackChunkName: "comingsoon" */ '../views/FilmList/ComingSoon.vue')
      }
    ]
  },
  {
    path: '/detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/FilmDetail.vue'),
    meta: {
      hasTabBar: false
    }
  },
  {
    path: '/detail/:filmId',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/FilmDetail.vue'),
    meta: {
      hasTabBar: false
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      hasTabBar: true
    }
  },
  {
    path: '/cinemas',
    component: () => import(/* webpackChunkName: "cinemas" */ '../views/CinemasView.vue'),
    meta: {
      hasTabBar: true
    }
  },
  {
    path: '/citylist',
    name: 'citylist',
    component: () => import(/* webpackChunkName: "cinemas" */ '../views/CityList.vue')
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.vue'),
    meta: {
      hasTabBar: false
    }
  },
  {
    path: '/:pathMatch(.*)*', // 匹配任意路径
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('路由跳转', from.fullPath, '到', to.fullPath)
  if (to.meta.hasTabBar) {
    store.commit('SHOW_TABBAR')
  } else {
    store.commit('HIDE_TABBAR')
  }
  next()
})

export default router
