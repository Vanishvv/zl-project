<template>
  <div class="material-list">
    <!--顶部导航&搜索框-->
    <headBar
      :headBarData="indexData.headBarData"
    ></headBar>
    <!--资源标签页-->
    <indexTabs
      :indexTabsData="indexData.indexTabsData"
    ></indexTabs>
    <!--筛选开关-->
    <div class="switch-list">
      <el-switch
        class="index-switch"
        v-model="switchItem.value"
        :active-color="indexData.activeColor"
        :inactive-color="indexData.inactiveColor"
        :active-text="switchItem.name"
        v-for="(switchItem,index) in indexData.switchData" :key="index"
      >
      </el-switch>
    </div>
    <div class="similar-search" @click="similarSearch">
      <i class="iconfont zl-chazhaoxiangsi"></i>
    </div>
  </div>
</template>

<script>
  import headBar from "../components/HeadBar"
  import indexTabs from "../components/IndexTabs"
  import materialListData from "../../static/designResourceData"
  export default {
    name: '',
    data(){
      return {
        indexData:materialListData.data,
        indexTabsData: '',
        headBarData: ''
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$log(key, keyPath);
      },
      similarSearch(){
        this.$store.commit('changeWebsiteSearch', false);
        this.$store.commit('changeSimilarSearch',true);
      }
    },
    components:{headBar,indexTabs}
  }
</script>

<style scoped>
  @import "../assets/styles/designResource.css";
</style>
