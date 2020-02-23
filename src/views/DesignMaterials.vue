<template>
  <div>
    <!--顶部导航&搜索框-->
    <headBar
      :headBarData="materialsData.headBarData"
    ></headBar>
    <!--侧边栏-->
    <sideBar>
    </sideBar>
    <!--素材标签页-->
    <indexTabs
      :indexTabsData="materialsData.indexTabsData"
    ></indexTabs>
    <!--图片排列方式切换-->
    <div class="img-arrangement">
      <i class="iconfont zl-caidan-" @click="imgViewerSelected"></i>
      <i class="iconfont zl-pailie-kuai" @click="imgWaterfallSelected"></i>
    </div>
  </div>
</template>

<script>
  import headBar from "../components/HeadBar"
  import indexTabs from "../components/IndexTabs"
  import designMaterialsData from "../../static/designMaterialsData"
  import sideBar from "../components/SideBar"
  export default {
    name: "",
    data(){
      return{
        materialsData:designMaterialsData.data,
        indexTabsData:'',
      }
    },
    methods:{
    imgViewerSelected(){
      this.$log('选择图片排列方式为等高等宽');
      this.$store.commit('changeViewerShow', true);
      this.$store.commit('changeWaterfallShow',false);
    },
    imgWaterfallSelected(){
      this.$log('选择图片排列方式为瀑布流');
      this.$store.commit('changeViewerShow', false);
      this.$store.commit('changeWaterfallShow',true);
    }
    },
    components: {headBar,indexTabs,sideBar}
  }
</script>

<style scoped>
@import "../assets/styles/deisgnMaterials.css";
</style>
