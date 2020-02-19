<template>
<div>
  <imgViewer
    :eachCardData="cardItem"
    v-for="(cardItem,index) in eachCardData.imgViewerData"
    :key="index"
    v-if="viewerShow"
  ></imgViewer>
  <imgWaterfall></imgWaterfall>
</div>
</template>

<script>
  import imgViewer from '../ImgViewerCard'
  import imgWaterfall from '../ImgViewerWaterfall'
  import flowerData from '../../../static/flowerPatternImgData'
  import {mapGetters} from 'vuex'
  export default {
    name: "",
    data(){
      return{
        eachCardData:flowerData.data
      }
    },
    components: {imgViewer,imgWaterfall},
    computed: {
      viewerShow(){
        return this.$store.state.imgViewerShow
      },
      waterfallShow(){
        return this.$store.state.imgWaterfallShow
      },
      ...mapGetters([
        'getterimgViewerData',
        'getterimgWaterfallData'
      ])
    },
    watch:{
      getterViewerData(message){
        this.$log(message)
      },
      getterimgWaterfallData(message){
        this.$log(message)
      }
    }
  }
</script>

<style scoped>
@import "../../assets/styles/iconStyle.css";
</style>
