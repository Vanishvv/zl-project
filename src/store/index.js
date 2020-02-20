import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    imgViewerShow:true,
    imgWaterfallShow:false
  },
  mutations:{
    changeViewerShow(state, imgViewerShow) {
      state.imgViewerShow=imgViewerShow;
    },
    changeWaterfallShow(state,imgWaterfallShow){
      state.imgWaterfallShow=imgWaterfallShow;
    }
  },
  getters:{
    getterimgViewerData (state) {
      return state.imgViewerShow
    },
    getterimgWaterfallData(state){
      return state.imgWaterfallShow
    }
  }
});
export default store
