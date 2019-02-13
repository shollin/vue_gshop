<template>
  <div id="app">    
    <router-view />
    <FooterGuider v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import store from '@/vuex/store.js';
import  Home  from "@/components/Home";
import  FooterGuider  from "@/components/FooterGuide/FooterGuide";

import {reqShops, reqAddress,reqFoodCategorys} from './api/index.js';
export default {
  name: 'App',
  components:{
    Home,
    FooterGuider
  },
  async mounted() {
    await reqFoodCategorys();
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
  position relative
</style>
