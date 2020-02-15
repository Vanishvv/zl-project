<template>
  <div>
    <navBar :navBarData="headBarInfo.navBarData"></navBar>
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
      <el-button icon="el-icon-search" class="search-icon"></el-button>
      <div class="search-camera">
        <i class="el-icon-camera-solid" @click="uploadImg"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import headBardata from "../../static/headBarData"
  import navBar from '../components/NavBar'
  export default {
    name: "",
    data(){
      return{
        headBarInfo:headBardata.data
      }
    },
    methods:{
      uploadImg(){
        this.$log("相机被点击了");
      }
    },
    components: {navBar}
  }
</script>

<style scoped>
  @import "../assets/styles/headBar.css";
</style>
