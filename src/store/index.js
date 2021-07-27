import Vue from "vue";
import Vuex from "vuex";
import productsModule from "./modules/productsModule";
import userModule from "./modules/userModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userModule,
    productsModule,
  },
});
