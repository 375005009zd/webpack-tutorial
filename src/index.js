import Vue from 'vue'
import ElementUI from 'element-ui'
import 'reset-css'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from '@/router'

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

var vm = new Vue({
    el: '#app',
    router,
    // components:{
    //     App
    // },
    // template:`<App/>`
    render: h => h(App),

})