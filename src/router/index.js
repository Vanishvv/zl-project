import Vue from 'vue'
import Router from 'vue-router'
import DesignResources from '../views/DesignResource'
import DesignMaterials from '../views/DesignMaterials'
import ZlProduce from '../views/ZlProduce'
import ZlWork from '../views/ZlWork'
import Login from '../views/Login'
import Register from '../views/Register'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:"index",
      meta:{
        title:"主页面"
      },
      redirect:'/resource'
    },
    {
      path: '/resource',
      name: 'DesignResources',
      meta:{
        title: "设计资源"
      },
      redirect:'/resource/nav',
      component: DesignResources,
      children:[
        {
          path:"nav",
          name:"DesignNavSite",
          meta:{
            title:"设计导航网站"
          },
          component:()=>import("../components/DeignResourceSet/DesignNavSite")
        },
        {
          path:"materials",
          name:"DesignMaterialSite",
          meta:{
            title:"设计素材网站"
          },
          component:()=>import("../components/DeignResourceSet/DesignMaterialsSite")
        },
        {
          path:"tool",
          name:"DesignToolSite",
          meta:{
            title:"设计工具网站"
          },
          component:()=>import("../components/DeignResourceSet/DesignToolSite")
        },
        {
          path:"recommended",
          name:"HighlyRecommendedSite",
          meta:{
            title:"重点推荐网站"
          },
          component:()=>import("../components/DeignResourceSet/HighlyRecommendedSite")
        },
        {
          path:"other",
          name:"OtherSite",
          meta:{
            title:"其他网站"
          },
          component:()=>import("../components/DeignResourceSet/OtherSite")
        },
        {
          path:"collection",
          name:"PersonalCollectedSite",
          meta:{
            title:"个人收藏网站"
          },
          component:()=>import("../components/DeignResourceSet/PersonalCollectedSite")
        }
      ]
    },
    {
      path: '/material',
      name: 'DesignMaterial',
      meta:{
        title: "设计素材"
      },
      redirect:'/material/flower',
      component: DesignMaterials,
      children:[
        {
          path:"collection",
          name:"PersonalCollectedImg",
          meta:{
            title:"个人收藏图片"
          },
          component:()=>import("../components/DesignMeterialsSet/PersonalCollectedImg")
        },
        {
          path:"digital",
          name:"DigitalGraphicsImg",
          meta:{
            title:"数字图形图片"
          },
          component:()=>import("../components/DesignMeterialsSet/DigitalGraphicsImg")
        },
        {
          path:"flower",
          name:"FlowerPatternImg",
          meta:{
            title:"花型图片"
          },
          component:()=>import("../components/DesignMeterialsSet/FlowerPatternImg")
        },
        {
          path:"fabric",
          name:"FabricImg",
          meta:{
            title:"面料图片"
          },
          component:()=>import("../components/DesignMeterialsSet/FabricImg")
        },
        {
          path:"costume",
          name:"CostumeImg",
          meta:{
            title:"服装图片"
          },
          component:()=>import("../components/DesignMeterialsSet/CostumeImg")
        },
        {
          path:"apparel",
          name:"ApparelImg",
          meta:{
            title:"服饰图片"
          },
          component:()=>import("../components/DesignMeterialsSet/ApparelImg")
        }
      ]
    },
    {
      path: '/produce',
      name: 'Zlproduce',
      meta:{
        title: "浙理轻定"
      },
      component: ZlProduce
    },
    {
      path: '/work',
      name: 'ZlWork',
      meta:{
        title: "浙理作品"
      },
      redirect:'/work/show',
      component: ZlWork,
      children: [
        {
          path:"collection",
          name:"PersonalCollectedWork",
          meta:{
            title:"个人收藏作品"
          },
          component:()=>import("../components/ZlWorkSet/PersonalCollectedWork")
        },
        {
          path:"show",
          name:"GraduationShow",
          meta:{
            title:"毕业汇演"
          },
          component:()=>import("../components/ZlWorkSet/GraduationShow")
        },
        {
          path:"costume",
          name:"CostumeArtDesign",
          meta:{
            title:"服装艺术设计"
          },
          component:()=>import("../components/ZlWorkSet/CostumeArtDesign")
        },
        {
          path:"textile",
          name:"TextileArtDesign",
          meta:{
            title:"纺织品艺术设计"
          },
          component:()=>import("../components/ZlWorkSet/TextileArtDesign")
        },
        {
          path:"characters",
          name:"CharactersDesign",
          meta:{
            title:"人物形象设计"
          },
          component:()=>import("../components/ZlWorkSet/CharactersDesign")
        },
        {
          path:"extracurricular",
          name:"ExtracurricularWorks",
          meta:{
            title:"课外作品"
          },
          component:()=>import("../components/ZlWorkSet/ExtracurricularWorks")
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      meta:{
        title: "登录"
      },
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      meta:{
        title: "注册"
      },
      component: Register
    }
  ]
})
