<template>
  <div class="index-tabs">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="(tabItem,index) in tabsData"
        :key="index"
        :label="tabItem.labelName"
        :name="tabItem.tabName"
        v-if="tabItem.show"
      >
        <router-view ref="imgViewerMethods"></router-view>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: "",
    props:["indexTabsData"],
    data(){
      return{
        tabsData:this.indexTabsData.tabsData,
        activeName: this.indexTabsData.activeName,
        fatherPath: this.indexTabsData.fatherPath
      }
    },
    methods:{
      handleClick(tab,event) {
        this.$log(tab,event);
        this.$router.push(''+this.fatherPath+this.activeName);
      }
    }
  }
</script>

<style scoped>
  @import "../assets/styles/indexTabs.css";
</style>
