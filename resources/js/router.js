import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import * as auth from './services/auth_service';

Vue.use(Router);

const routes = [
    
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('./views/Dashboard.vue')
            },
            {
                path: 'todo',
                name: 'todo',
                component: () => import('./views/ToDo.vue')
            },
            {
                path: 'task',
                name: 'task',
                component: () => import('./views/Tasks.vue')
            },
            {
                path: 'profile',
                name: 'profile',
                component: () => import('./views/Profile.vue')
            },
            {
                path: 'events',
                name: 'events',
                component: () => import('./views/Events.vue'),
                beforeEnter (to, from, next)  {
                    if(auth.getUserRole() === 'administrator'){
                        next();
        
                    } else {
                        next('/404');
                    }
                }
            },
            {
                path: 'categories',
                name: 'categories',
                component: () => import('./views/Categories.vue'),
                beforeEnter (to, from, next)  {
                    if(auth.getUserRole() === 'administrator'){
                        next();
        
                    } else {
                        next('/404');
                    }
                }
                
            },
            {
                path: 'groups',
                name: 'groups',
                component: () => import('./views/Groups.vue'),
                beforeEnter (to, from, next)  {
                    if(auth.getUserRole() === 'administrator'){
                        next();
        
                    } else {
                        next('/404');
                    }
                }
                
            },
            {
                path: 'ActivityLog',
                name: 'ActivityLog',
                component: () => import('./views/ActivityLog.vue'),
                beforeEnter (to, from, next)  {
                    if(auth.getUserRole() === 'administrator'){
                        next();
        
                    } else {
                        next('/404');
                    }
                }
                
            },
            {
                path: 'users',
                name: 'users',
                component: () => import('./views/Users.vue'),
                beforeEnter (to, from, next)  {
                    if(auth.getUserRole() === 'administrator'){
                        next();
        
                    } else {
                        next('/404');
                    }
                }
                
            },
            {
                path: 'export',
                name: 'export',
                component: () => import('./views/Export.vue'),
                beforeEnter (to, from, next)  {
                    if(auth.getUserRole() === 'administrator'){
                        next();
        
                    } else {
                        next('/404');
                    }
                }
                
            }
        ],
        beforeEnter (to, from, next)  {
            if(!auth.isLoggedIn()){
                next('/login');

            } else {
                next();
            }
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/authentication/Login.vue'),
        beforeEnter (to, from, next)  {
            if(!auth.isLoggedIn()){
                next();

            } else {
                next('/home');
            }
        }
    },
    {
        path: '/',
        name: 'login',
        component: () => import('./views/authentication/Login.vue'),
        beforeEnter (to, from, next)  {
            if(!auth.isLoggedIn()){
                next();

            } else {
                next('/home');
            }
        }
    },
    {
        path: '*',
        name: '404',
        component: () => import('./views/404.vue')
    }
];

const router = new Router({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
});

export default router;