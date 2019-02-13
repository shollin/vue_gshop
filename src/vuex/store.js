import Vue from 'vue'
import Vuex from 'vuex';
import menu from "@/vuex/menu";
import nav from "@/vuex/nav";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        menu,
        nav
    }
})