import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Songs from './components/Songs.vue';
import CreateSong from './components/CreateSong.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs,
    }, {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }, {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
