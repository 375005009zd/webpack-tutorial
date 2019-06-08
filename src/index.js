import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'reset-css'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import routes from '@/router'

Vue.use(VueRouter)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

const router= new VueRouter({
    mode: 'history',
    routes
})

var vm = new Vue({
    el: '#app',
    router,
    components:{
        App
    },
    template:`<App/>`
})