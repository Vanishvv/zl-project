<template>
  <div class="img-item">
    <div class="img-box" @click="show">
      <a>
        <el-image
          :src="eachCardInfo.url"
          :fit="commonInfo.fit"
          class="el-image"
        >
        </el-image>
        <viewer :images="commonData.srcList"
                class="viewer"
                ref="viewer"
                @inited="inited"
        >
          <img v-for="(src,index) in commonData.srcList" :src="src" :key="index" class="image">
        </viewer>
      </a>
    </div>
    <div class="img-tool">
      <div class="img-author">
        <el-avatar :size="30" :src="eachCardInfo.authorUrl"></el-avatar>
      </div>
      <div class="img-like">
        <i class="iconfont zl-shoucang"></i>
        <p class="like-num">{{eachCardInfo.likeNum}}</p>
      </div>
      <div class="img-view">
        <i class="iconfont zl-liulan"></i>
        <p class="view-num">{{eachCardInfo.viewNum}}</p>
      </div>
      <div class="img-download">
        <i class="iconfont zl-icon--"></i>
      </div>
      <div class="img-tool-bg"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'imgViewer',
    props:["eachCardData","commonData","imgIndex"],
    data(){
      return{
        eachCardInfo: this.eachCardData,
        commonInfo:this.commonData
      }
    },
    methods:{
      inited (viewer) {
        this.$viewer = viewer
      },
      show() {
        this.$viewer.view(this.imgIndex)
      }
    }
  }
</script>

<style scoped>
  @import "../assets/styles/imgViewerCard.css";
</style>
