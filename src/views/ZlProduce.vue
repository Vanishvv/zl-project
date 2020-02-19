<template>
<div>
  <!--顶部导航&搜索框-->
  <headBar
    :headBarData="produceData.headBarData"
  ></headBar>
</div>
</template>

<script>
  import headBar from "../components/HeadBar"
  import produceData from "../../static/ZlProduceData"
    export default {
      name: "",
      data(){
        return{
          produceData:produceData.data
        }
      },
      components: {headBar}
    }
</script>

<style scoped>

</style>
