import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. 使用组件
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

// 2. 导入组件
import HelloWorld from '../components/HelloWorld.vue'
import Projects from '../components/Projects.vue'
import ProjectsNew from '../components/Projects_New.vue'
import Login from '../components/login.vue'
import cardPage from '../components/cardPage.vue'
import imagePage from '../components/imagePage.vue'


// 3. 创建路由
// const router = new VueRouter({
//   mode: 'history',
//   routes: [
//       //routes数组中的一个对象，就是一条路由
//     { path: '/hellowrold', component: HelloWorld },
//     { path: '/login', component: Login },
//     { path: '/projects', component: Projects },
//     { path: '/projectsNew', component: ProjectsNew }
//     // { path: encodeURI('/é'), component: Unicode },
//     // { path: '/query/:q', component: Query }
//   ]
// });


const router = new VueRouter({
    mode: 'history',
    routes: [
        //routes数组中的一个对象，就是一条路由
        { path: '/', component: HelloWorld, name: 'helloworld' },
        {
            path: '/login', component: Login, name: 'login', children: [
                { path: '/cardPage', name: 'cardpage', component: cardPage }
            ]
        },
        { path: '/projects/:id', component: Projects, name: 'projects' },
        { path: '/projectsNew', component: ProjectsNew, name: 'projectsNew' },
        { path: '/imagePage', component: imagePage, name: 'imagePage' }
        // { path: encodeURI('/é'), component: Unicode },
        // { path: '/query/:q', component: Query }
    ]
});

// 4.导出路由
export default router;