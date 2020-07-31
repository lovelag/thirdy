import Vue from "vue";
import VueRouter from "vue-router";
import HomeCourse from "../views/subject/HomeCourse.vue";

//import Login from "../components/Login.vue"

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
  {
    path: "/",
    name: "root",
    component: HomeCourse
  },
  {
    path: "/register",
    name: "register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/Register.vue");
    }
  },
  {
    path: "/login",
    name: "login",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/Login.vue");
    }
    
  },
  {
    path: "/songs",
    name: "songs",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/Songs.vue");
    }
    
  },
  {
    path: "/songs/create",
    name: "songs-create",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/CreateSong.vue");
    }
    
  },
  {
    path: "/songs/:songId",
    name: "song",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/ViewSong.vue");
    }
    
  }
]
})

 
