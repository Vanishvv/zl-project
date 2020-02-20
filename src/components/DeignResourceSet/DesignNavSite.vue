<template>
  <div>
    <materialsWebsiteCard
      v-for="(cardItem,index) in cardInfo.websiteSearchData"
      :key="index"
      :eachCardData="cardItem"
      v-if="websiteSearch"
    >
    </materialsWebsiteCard>
    <similarWebsiteCard
      v-for="(cardItem,index) in cardInfo.similarSearchData"
      :key="index"
      :eachCardData="cardItem"
      v-if="similarSearch"
    >
    </similarWebsiteCard>
  </div>
</template>

<script>
  import materialsWebsiteCard from '../MaterialsWebsiteCard'
  import similarWebsiteCard from '../SimilarWebsiteCard'
  import cardData from '../../../static/designNavSiteData'
  import {mapGetters} from 'vuex'
  export default {
    name: "",
    data(){
      return{
        cardInfo:cardData.data,
        eachCardData:''
      }
    },
    computed:{
      websiteSearch(){
        return this.$store.state.websiteSearchShow
      },
      similarSearch(){
        return this.$store.state.similarSearchShow
      },
      ...mapGetters([
        'getterWebsiteSearch',
        'getterSimilarSearch'
      ])
    },
    watch:{
      getterWebsiteSearch(message){
        this.$log('websiteSearchShow:'+message)
      },
      getterSimilarSearch(message){
        this.$log('similarSearchShow:'+message)
      }
    },
    components:{materialsWebsiteCard,similarWebsiteCard}
  }
</script>

<style scoped>

</style>
