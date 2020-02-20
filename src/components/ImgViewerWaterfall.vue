<template>
<div>
  <waterfall :col='col'
             :width="itemWidth"
             :gutterWidth="gutterWidth"
             :data="data"
             @loadmore="loadmore">
    <template >
      <div class="cell-item" v-for="(imgItem,index) in waterfallInfo.imgViewerData" :key="index + '-only'" @click="show(index)">
        <img v-if="imgItem.url" :lazy-src="imgItem.url" alt="load error" class="waterfall-img"/>
        <div class="img-tool">
          <div class="img-author">
            <el-avatar :size="25" :src="imgItem.authorUrl"></el-avatar>
          </div>
          <div class="img-like">
            <i class="iconfont zl-shoucang"></i>
            <p class="like-num">{{imgItem.likeNum}}</p>
          </div>
          <div class="img-view">
            <i class="iconfont zl-liulan"></i>
            <p class="view-num">{{imgItem.viewNum}}</p>
          </div>
          <div class="img-download">
            <i class="iconfont zl-icon--"></i>
          </div>
          <div class="img-tool-bg"></div>
        </div>
        <viewer :images="waterfallInfo.srcList"
                class="viewer"
                ref="viewer"
                @inited="inited"
        >
          <img v-for="(src,index) in waterfallInfo.srcList" :src="src" :key="index" class="image">
        </viewer>
      </div>
    </template>
  </waterfall>
</div>
</template>

<script>
  export default {
    name: "",
    props:["waterfallData"],
    data(){
      return{
        waterfallInfo:this.waterfallData,
        col:5
      }
    },
    computed:{
      itemWidth(){
        return (138*0.48*(document.documentElement.clientWidth/375))
      },
      gutterWidth(){
        return (9*0.5*(document.documentElement.clientWidth/375))
      }
    },
    methods:{
      switchCol(col){
        this.col = col
        console.log(this.col)
      },
      loadmore(index){
        this.data = this.data.concat(this.data)
      },
      inited (viewer) {
        this.$viewer = viewer
      },
      show(index) {
        this.$viewer.view(index);
      }
    }
  }
</script>

<style>
@import "../assets/styles/imgViewerWaterfall.css";
</style>
