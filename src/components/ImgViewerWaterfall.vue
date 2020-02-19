<template>
<div>
  <waterfall :col='col'
             :width="itemWidth"
             :gutterWidth="gutterWidth"
             :data="data"
             @loadmore="loadmore">
    <template >
      <div class="cell-item" v-for="(item,index) in data" :key="index" @click="show">
        <img v-if="item.img" :lazy-src="item.img" alt="load error"/>
        <viewer :images="srcList"
                class="viewer"
                ref="viewer"
                @inited="inited"
        >
          <img v-for="src in srcList" :src="src" :key="src" class="image">
        </viewer>
      </div>
    </template>
  </waterfall>
</div>
</template>

<script>
  export default {
    name: "",
    data(){
      return{
        col:5,
        srcList:[
          "https://hbimg.huabanimg.com/bbd93e716bb13a9f2e7c4e918201c6fcbddf4936185145-admi0p_fw658",
          "https://hbimg.huabanimg.com/a66332c19cd431172f96268901162d7bf9573e9513edb5-2YHESR_fw658",
          "https://hbimg.huabanimg.com/4ef0bca36e03351c82a20535883da54ebb99f3d4183749-chZe7d_fw658",
          "https://hbimg.huabanimg.com/fe0743a01da04c0996511663b870d5320bc2b08635603-zg0pyQ_fw658",
          "https://hbimg.huabanimg.com/bbd93e716bb13a9f2e7c4e918201c6fcbddf4936185145-admi0p_fw658",
          "https://hbimg.huabanimg.com/fe0743a01da04c0996511663b870d5320bc2b08635603-zg0pyQ_fw658",
          "https://hbimg.huabanimg.com/bbd93e716bb13a9f2e7c4e918201c6fcbddf4936185145-admi0p_fw658",
          "https://hbimg.huabanimg.com/bbd93e716bb13a9f2e7c4e918201c6fcbddf4936185145-admi0p_fw658",
          "https://hbimg.huabanimg.com/bbd93e716bb13a9f2e7c4e918201c6fcbddf4936185145-admi0p_fw658",
          "https://hbimg.huabanimg.com/bbd93e716bb13a9f2e7c4e918201c6fcbddf4936185145-admi0p_fw658",
          "https://hbimg.huabanimg.com/fe0743a01da04c0996511663b870d5320bc2b08635603-zg0pyQ_fw658"
        ],
        data:[
          {
            img:"https://hbimg.huabanimg.com/bbd93e716bb13a9f2e7c4e918201c6fcbddf4936185145-admi0p_fw658"
          },
          {
            img:"https://hbimg.huabanimg.com/a66332c19cd431172f96268901162d7bf9573e9513edb5-2YHESR_fw658"
          },
          {
            img:"https://hbimg.huabanimg.com/4ef0bca36e03351c82a20535883da54ebb99f3d4183749-chZe7d_fw658"
          },
          {
            img:"https://hbimg.huabanimg.com/fe0743a01da04c0996511663b870d5320bc2b08635603-zg0pyQ_fw658"
          },
          {
            img:"https://hbimg.huabanimg.com/bbd93e716bb13a9f2e7c4e918201c6fcbddf4936185145-admi0p_fw658"
          },
          {
            img:"https://hbimg.huabanimg.com/fe0743a01da04c0996511663b870d5320bc2b08635603-zg0pyQ_fw658"
          },
          {
            img:"https://hbimg.huabanimg.com/bbd93e716bb13a9f2e7c4e918201c6fcbddf4936185145-admi0p_fw658"
          },
          {
            img:"https://hbimg.huabanimg.com/bbd93e716bb13a9f2e7c4e918201c6fcbddf4936185145-admi0p_fw658"
          },
          {
            img:"https://hbimg.huabanimg.com/bbd93e716bb13a9f2e7c4e918201c6fcbddf4936185145-admi0p_fw658"
          },
          {
            img:"https://hbimg.huabanimg.com/bbd93e716bb13a9f2e7c4e918201c6fcbddf4936185145-admi0p_fw658"
          },
          {
            img:"https://hbimg.huabanimg.com/fe0743a01da04c0996511663b870d5320bc2b08635603-zg0pyQ_fw658"
          }
        ],
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
      show() {
        this.$viewer.view(this.index)
      }
    }
  }
</script>

<style>
  .cell-item {
    width: 100%;
    background: #ffffff;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
  }

  .cell-item:hover{
    -webkit-box-shadow: 1px 1px 8px rgba(0,0,0,0.3),0 0 40px rgba(0,0,0,0.1) inset;
    -moz-box-shadow: 1px 1px 8px rgba(0,0,0,0.3),0 0 40px rgba(0,0,0,0.1) inset;
    box-shadow: 1px 1px 8px rgba(0,0,0,0.3),0 0 40px rgba(0,0,0,0.1) inset;
    -o-box-shadow:1px 1px 8px rgba(0,0,0,0.3),0 0 40px rgba(0,0,0,0.1) inset;
  }

  .image{
    display: none;
  }

</style>
