<template>
<div class="card">
  <el-card class="website-card" shadow="hover">
    <div class="card-body">
      <img class="card-logo" :src="eachCardInfo.logoUrl">
      <div class="=card-detail">
        <div class="card-title" @click="goToWebsite">{{eachCardInfo.title}}</div>
        <div class="card-info">{{eachCardInfo.info}}</div>
      </div>
    </div>
    <div class="card-menu">
      <div class="card-author" @click="authorSelected">
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
    },
    methods:{
      goToWebsite(){
        this.$message.success('跳转到网站：'+this.eachCardInfo.title);
        this.$log('网站标题'+this.eachCardInfo.title+'被点击了');
      },
      authorSelected(){
        this.$message.success('根据用户筛选网页标签');
        this.$log('上传用户头像被点击');
      }
    }
  }
</script>

<style scoped>
@import "../assets/styles/materialsWebsiteCard.css";
</style>
