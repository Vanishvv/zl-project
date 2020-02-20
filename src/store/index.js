import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    imgViewerShow:true,
    imgWaterfallShow:false,
    websiteSearchShow:true,
    similarSearchShow:false
  },
  mutations:{
    changeViewerShow(state, imgViewerShow) {
      state.imgViewerShow=imgViewerShow;
    },
    changeWaterfallShow(state,imgWaterfallShow){
      state.imgWaterfallShow=imgWaterfallShow;
    },
    changeWebsiteSearch(state,websiteSearchShow){
      state.websiteSearchShow=websiteSearchShow
    },
    changeSimilarSearch(state,similarSearchShow){
      state.similarSearchShow=similarSearchShow
    }
  },
  getters:{
    getterimgViewerData (state) {
      return state.imgViewerShow
    },
    getterimgWaterfallData(state){
      return state.imgWaterfallShow
    },
    getterWebsiteSearch(state){
      return state.websiteSearchShow
    },
    getterSimilarSearch(state){
      return state.similarSearchShow
    }
  }
});
export default store
