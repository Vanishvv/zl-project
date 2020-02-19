import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    imgViewerShow:false,
    imgWaterfallShow:true
  },
  mutations:{
    changeMethods(state, imgViewerShow,imgWaterfallShow) {
      state.imgViewerShow=imgViewerShow;
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
