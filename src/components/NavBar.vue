<template>
  <div>
    <div class="index-nav">
      <el-menu
        :default-active="$route.path"
        router
        class="index-menu"
        :mode="navBarInfo.indexMenuMode"
        @select="handleSelect"
        :active-text-color="navBarInfo.activeColor">
        <el-menu-item
          :index="menuItem.path"
          v-for="(menuItem,index) in navBarInfo.indexMenuData" :key="index"
        >{{menuItem.itemName}}</el-menu-item>
      </el-menu>
      <el-radio-group
        v-model="navBarInfo.radioChoose"
        size="small"
        :fill="navBarInfo.activeColor"
        class="login-radio">
        <el-radio-button :label="radioItem.labelName" v-for="(radioItem,index) in navBarInfo.radioData" :key="index"></el-radio-button>
      </el-radio-group>
      <img :src="navBarInfo.logoUrl" class="logo" alt="" >
      <p class="logo-name">{{navBarInfo.logoName}}</p>
    </div>
    <img :src="navBarInfo.indexBgUrl" class="index-bg" alt=" " >
  </div>
</template>

<script>
  export default {
    name: "",
    props:["navBarData"],
    data(){
      return{
        navBarInfo:this.navBarData
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  @import "../assets/styles/navBar.css";
</style>
