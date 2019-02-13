// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/store'
import Element from 'element-ui';
import mint from 'mint-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(mint);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: (h) => {
        return h(App);
    },
})