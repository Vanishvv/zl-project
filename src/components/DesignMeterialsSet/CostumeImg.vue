<template>
  <div>
    <imgViewer
      :eachCardData="cardItem"
      :commonData="eachCardData"
      v-for="(cardItem,index) in eachCardData.imgViewerData"
      :imgIndex="index"
      :key="index"
      v-if="viewerShow"
    ></imgViewer>
    <imgWaterfall
      v-if="waterfallShow"
      :waterfallData="eachCardData"
    ></imgWaterfall>
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
        eachCardData:flowerData.data,
        waterfallData:'',
        commonData:'',
        imgIndex:''
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
      getterimgViewerData(message){
        this.$log('imgViewerShow:'+message)
      },
      getterimgWaterfallData(message){
        this.$log("imgWaterfallShow:"+message)
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/styles/iconStyle.css";
</style>
