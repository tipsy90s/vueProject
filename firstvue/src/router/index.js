import Vue from 'vue'
import Router from 'vue-router'
import web from '@/components/web.vue'
import video from '@/components/video.vue'
import music from '@/components/music.vue'
import news from '@/components/news.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/webs',
      // name: 'webs',
      component: web,
    },
    {
      path: '/videos',
      // name: 'videos',
      component: video,
    },
    {
      path: '/music',
      // name: 'music',
      component: music,
    },
    {
      path: '/news',
      // name: 'news',
      component: news,
    }
  ],
})
