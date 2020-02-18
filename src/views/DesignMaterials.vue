<template>
  <div>
    <!--顶部导航&搜索框-->
    <headBar
      :headBarData="materialsData.headBarData"
    ></headBar>
    <!--素材标签页-->
    <indexTabs
      :indexTabsData="materialsData.indexTabsData"
    ></indexTabs>
  </div>
</template>

<script>
  import headBar from "../components/HeadBar"
  import indexTabs from "../components/IndexTabs"
  import designMaterialsData from "../../static/designMaterialsData"
  export default {
    name: "",
    data(){
      return{
        materialsData:designMaterialsData.data,
        indexTabsData:''
      }
    },
    components: {headBar,indexTabs}
  }
</script>

<style scoped>

</style>
