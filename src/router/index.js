import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/Home'
import Movie from '@/components/Movie'
import Sub from '@/components/Sub'
import DetailSub from '@/components/DetailSub'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/sub',
      name: 'Sub',
      component: Sub
    },
    {
      path: '/detailSub/:index',
      name: 'DetailSub',
      component: DetailSub
    }
  ]
})
