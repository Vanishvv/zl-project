<template>
  <div class="material-list">
    <!--顶部导航&搜索框-->
    <headBar></headBar>
    <!--设计标签页-->
    <el-menu
      :default-active="indexData.activeIndex"
      class="design-menu"
      :mode="indexData.indexMenuMode"
      @select="handleSelect"
      :active-text-color="indexData.activeColor">
      <el-menu-item
        :index="(index+'')"  v-for="(designMenuItem,index) in indexData.designMenuData" :key="index"
      >{{designMenuItem.itemName}}</el-menu-item>
    </el-menu>
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
  </div>
</template>

<script>
  import headBar from "../components/HeadBar"
  import materialListData from "../../static/designResourceData"
  export default {
    name: '',
    data(){
      return {
        indexData:materialListData.data
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$log(key, keyPath);
      },
      handleClick(tab, event) {
        this.$log(tab, event);
      }
    },
    components:{headBar}
  }
</script>

<style scoped>
  @import "../assets/styles/designResource.css";
</style>
