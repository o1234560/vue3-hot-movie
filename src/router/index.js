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
        component: () => import(/* webpackChunkName: "nowplaying" */ '../views/FilmList/ComingSoon.vue')
      }
    ]
  },
  {
    path: '/detail',
    component: () => import(/* webpackChunkName: "nowplaying" */ '../views/DetailView.vue'),
    meta: {
      hasTabBar: true
    }
  },
  {
    path: '/detail:filmId',
    component: () => import(/* webpackChunkName: "nowplaying" */ '../views/DetailView.vue'),
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
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.vue')
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
  if (to.meta.hasTabBar) {
    store.commit('SHOW_TABBAR')
  } else {
    store.commit('HIDE_TABBAR')
  }
  next()
})

export default router
