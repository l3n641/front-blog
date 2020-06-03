import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: ()=>import("../views/front/Index")
  },

    {
      path: '/posts',
      name: 'Posts',
      component: ()=>import("../views/front/PostList")
    },


    {
      path: '/posts/:id',
      name: 'Post',
      component: ()=>import("../views/front/PostDetail")
    },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
