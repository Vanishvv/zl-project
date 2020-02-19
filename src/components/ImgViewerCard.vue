<template>
  <div class="img-item">
    <div class="img-box" @click="show">
      <a>
        <el-image
          :src="eachCardInfo.url"
          :fit="eachCardInfo.fit"
          class="el-image"
        >
        </el-image>
        <viewer :images="eachCardInfo.srcList"
                class="viewer"
                ref="viewer"
                @inited="inited"
        >
          <img v-for="src in eachCardInfo.srcList" :src="src" :key="src" class="image">
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
    props:["eachCardData"],
    data(){
      return{
        eachCardInfo: this.eachCardData
      }
    },
    methods:{
      inited (viewer) {
        this.$viewer = viewer
      },
      show() {
        this.$viewer.view(this.eachCardInfo.imgIndex)
      }
    }
  }
</script>

<style scoped>
  @import "../assets/styles/imgViewerCard.css";
</style>
