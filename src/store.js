import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Storeを生成
export const store = new Vuex.Store({
  state: {
    memberId: 0,
    toMemberId: 0,
    isLoading: false,
  },
  getters: {},
  mutations: {
    isMemberId(state, val) {
      state.memberId = val;
    },
    isLoading(state, val) {
      state.isLoading = val
    },
  },
});
