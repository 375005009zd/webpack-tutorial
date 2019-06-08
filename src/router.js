
import Concepts from '@/components/concepts/Concepts'
import App from '@/App'
const routes= [
        {
            path: '/',
            redirect:'/concepts' ,
            component: App
        },
        {
            path: '/concepts',
            component: Concepts
        }
    ]

export default routes;