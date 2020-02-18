<template>
<div>
  <materialsWebsiteCard
    v-for="(cardItem,index) in cardData" :key="index" :eachCardData="cardItem"
  >
  </materialsWebsiteCard>
</div>
</template>

<script>
  import materialsWebsiteCard from '../MaterialsWebsiteCard'
  import cardData from '../../../static/designMaterialSiteData'
  export default {
   name: "",
   data(){
      return{
        cardData:cardData.data,
        eachCardData:''
      }
   },
    components:{materialsWebsiteCard}
  }
</script>

<style scoped>

</style>
