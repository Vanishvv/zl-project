import Vue from 'vue'
import Router from 'vue-router'
import DesignResources from '../views/DesignResource'
import DesignMaterial from '../views/DesignMaterial'
import ZlProduce from '../views/ZlProduce'
import ZlWork from '../views/ZlWork'
import Login from '../views/Login'
import Register from '../views/Register'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DesignResources',
      component: DesignResources
    },
    {
      path: '/material',
      name: 'DesignMaterial',
      component: DesignMaterial
    },
    {
      path: '/produce',
      name: 'Zlproduce',
      component: ZlProduce
    },
    {
      path: '/work',
      name: 'ZlWork',
      component: ZlWork
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
