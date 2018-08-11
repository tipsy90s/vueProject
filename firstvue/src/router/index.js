import Vue from 'vue'
import Router from 'vue-router'
import hotSearch from '@/components/hotSearch.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'hotSearch',
      component: hotSearch,
    }
  ],
})
