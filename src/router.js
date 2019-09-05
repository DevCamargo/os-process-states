import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/applications'
    },
    {
      path: '/applications',
      name: 'applications',
      component: () => import('@views/Applications.vue')
    },
    {
      path: '/process',
      name: 'process',
      component: () => import('@views/Process.vue')
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
})
