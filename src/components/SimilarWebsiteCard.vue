<template>
  <div class="card">
    <el-card class="similar-card" shadow="hover">
      <div class="card-logo">
        <img :src="eachCardInfo.logoUrl">
      </div>
      <div class="card-body">
        <div class="card-url">
          <h2>{{eachCardInfo.websiteUrl}}</h2>
        </div>
        <div class="card-type">
          {{eachCardInfo.type}}
        </div>
        <div class="card-percent">
          {{eachCardInfo.percent}}
        </div>
      </div>
      <div class="card-like">
        <i class="iconfont zl-shoucang"></i>
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

    }
  }
</script>

<style scoped>
@import "../assets/styles/similarWebsiteCard.css";
</style>
