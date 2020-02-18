<template>
<div class="card">
  <el-card class="website-card" shadow="hover">
    <div class="card-body">
      <img class="card-logo" :src="eachCardInfo.logoUrl">
      <div class="=card-detail">
        <div class="card-title">{{eachCardInfo.title}}</div>
        <div class="card-info">{{eachCardInfo.info}}</div>
      </div>
    </div>
    <div class="card-menu">
      <div class="card-author">
        <el-avatar :size="30" :src="eachCardInfo.authorUrl"></el-avatar>
      </div>
      <div class="card-like">
        <i class="iconfont zl-shoucang"></i>
        <p class="like-num">{{eachCardInfo.likeNum}}</p>
      </div>
      <div class="card-view">
        <i class="iconfont zl-liulan"></i>
        <p class="view-num">{{eachCardInfo.viewNum}}</p>
      </div>
    </div>
  </el-card>
</div>
</template>

<script>
  export default {
    name: "",
    props:["eachCardData"],
    data() {
      return {
        eachCardInfo:this.eachCardData
      }
    }
  }
</script>

<style scoped>
@import "../assets/styles/materialsWebsiteCard.css";
</style>
