<template>
  <div>
    <div class="side-bar">
      <div :class="btnItem.className"
           @mouseover="textShow(btnItem)"
           @mouseout="textHide(btnItem)"
           v-for="(btnItem,index) in btnInfo " :key="index">
        <el-button type="primary" size="mini" @click="drawer=true">
          {{btnItem.btnText}}
          <i :class="btnItem.iconClass"></i>
        </el-button>
      </div>
      <div class="side-bar-bg"></div>
    </div>
    <!--不明确修改和删除的功能详情，只做上传抽屉组件-->
    <el-drawer
      :title="sideBarInfo.drawerTitle"
      :visible.sync="drawer"
      :before-close="handleClose">
      <div class="add-drawer">
        <el-form label-width="80px" :model="formAdd">
          <el-form-item>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="formAdd.imageUrl" :src="formAdd.imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <i class="el-icon-warning-outline"> {{formInfo.logoWarning}}</i>
          </el-form-item>
          <el-form-item :label="formInfo.cardName" :label-width="formInfo.labelWidth">
            <el-input v-model="formAdd.name"></el-input>
          </el-form-item>
          <el-form-item :label="formInfo.cardInfo" :label-width="formInfo.labelWidth">
            <el-input type="textarea" v-model="formAdd.info"></el-input>
          </el-form-item>
          <el-form-item :label="formInfo.cardAttributes" :label-width="formInfo.labelWidth">
            <el-radio-group v-model="formAdd.nation">
              <el-radio :label="formInfo.radioNationFirst"></el-radio>
              <el-radio :label="formInfo.radioNationSecond"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <div class="add-price">
              <el-radio-group v-model="formAdd.price">
                <el-radio :label="formInfo.radioPriceFirst"></el-radio>
                <el-radio :label="formInfo.radioPriceSecond"></el-radio>
              </el-radio-group>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('formAdd')">{{formInfo.submitName}}</el-button>
            <el-button @click="resetForm('formAdd')">{{formInfo.reset}}</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
  import sideBarData from "../../static/sideBarData"
  export default {
    name: "",
    data(){
      return{
        sideBarInfo:sideBarData.data,
        btnInfo:sideBarData.data.btnData,
        formInfo:sideBarData.data.formData,
        formAdd:sideBarData.data.formData.form,
        drawer:false,
      }
    },
    methods: {
      textShow(btnItem){
         btnItem.btnText=btnItem.textShown
      },
      textHide(btnItem){
         btnItem.btnText=""
      },
      handleClose(done) {
        this.$confirm('确认离开提交页面？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传logo只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传logo大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
@import "../assets/styles/sideBar.css";
</style>
