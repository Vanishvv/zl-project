<template>
<div>
  <!--顶部导航&搜索框-->
  <headBar
    :headBarData="workData.headBarData"
  ></headBar>
  <!--作品标签页-->
  <indexTabs
    :indexTabsData="workData.indexTabsData"
  ></indexTabs>
</div>
</template>

<script>
  import headBar from "../components/HeadBar"
  import indexTabs from "../components/IndexTabs"
  import zlWorkData from "../../static/zlWorkData"
  export default {
    name: "",
    data(){
      return{
        workData:zlWorkData.data,
        indexTabsData:''
      }
    },
    components: {headBar,indexTabs}
  }
</script>

<style scoped>

</style>
