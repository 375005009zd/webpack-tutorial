import Vue from 'vue'
import VueRouter from 'vue-router'
import NavBar from '@/components/navbar'
import subHeader from '@/components/navbar/subHeader'
import SideMenu from '@/components/sidemenu'
import mainContent from '@/components/maincontent'

Vue.use(VueRouter)

const router= new VueRouter({
    routes: [
        {
            path: '/',
            components: {
                'default': NavBar,
                'subheader': subHeader,
                'sidemenu': SideMenu,
                'maincontent': mainContent
            }
        }
    ]
}) 

export default router;