import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResouce from 'vue-resource'
import store from './store/index'


Vue.use(VueRouter)
Vue.use(VueResouce)

//一级路由
import Home from './components/Home'
import Admin from './components/Admin'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'
import Add from './components/Add'
import Edit from './components/Edit'
import Information from './components/Information'
import loggedIn from './components/loggedIn'


//二级路由
import Contact from './components/about/Contact'
import Introduce from './components/about/Introduce'
import Operation from './components/about/Operation'


const routes = [
  {path:'/',name:'homeLink',component:Home},
  {path:'/admin',name:'adminLink',component:Admin},
  {path:'/about',name:'aboutLink',component:About,redirect : '/about/introduce',children:[
    {path:'/about/contact',name:'contactLink',component:Contact},
    {path:'/about/introduce',name:'introduceLink',component:Introduce},
    {path:'/about/operation',name:'operationLink',component:Operation},
  ]},
  {path:'/login',name:'loginLink',component:Login},
  {path:'/register',name:'registerLink',component:Register},
  {path:'/add',name:'addLink',component:Add},
  {path:'/edit/:id',component:Edit},
  {path:'/information/:id',component:Information},
  {path:'/login/success',name:'loggedInLink',component:loggedIn},
  {path : '*', redirect : '/'}//redirect 默认路由地址
]

const router = new VueRouter({
  routes,
  mode:"history"
})



router.beforeEach((to,from,next) =>{
  if(to.path=='/admin' && store.getters.isLogin == false){
      alert("未登录，请先登录!");
      next('/login')
    }else{
      next()
    }
  if(to.path=='/login' && store.getters.isLogin == false){
    next('/login')
  }else if(to.path=='/login' && store.getters.isLogin == true){
    next({name:'loggedInLink'})
  }else{
    next()
  }
}) 



new Vue({
  el: '#app',
  store,
  router, 
  render: h => h(App)
})
