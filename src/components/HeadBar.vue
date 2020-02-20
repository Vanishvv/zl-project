<template>
  <div class="head-bar">
    <navBar></navBar>
    <div class="search-box">
      <el-input
        :placeholder="headBarInfo.searchPlaceholder"
        class="search-input"
        v-model="headBarInfo.searchInput"
      >
      </el-input>
      <el-select
        v-model="headBarInfo.selectValue"
        class="search-select"
        :popper-append-to-body="false"
        popper-class="select-popper">
        <el-option
          v-for="item in headBarInfo.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button icon="el-icon-search" class="search-icon" @click="search"></el-button>
    </div>
    <img :src="headBarInfo.indexBgUrl" class="index-bg" alt=" " >
  </div>
</template>

<script>
  import navBar from '../components/NavBar'
  export default {
    name: "",
    props:["headBarData"],
    data(){
      return{
        headBarInfo:this.headBarData
      }
    },
    methods:{
      search(){
        this.$store.commit('changeWebsiteSearch', true);
        this.$store.commit('changeSimilarSearch',false);
      }
    },
    components: {navBar}
  }
</script>

<style scoped>
  @import "../assets/styles/headBar.css";
</style>
