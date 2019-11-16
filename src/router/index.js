import Vue from "vue";
import VueRouter from "vue-router";
import cart from "./cart";
import group from "./group"
import jumei from "./jumei"
import infant from "./infant"

import search from "./search"

import Detail from "./detail"
// import search from "./search"

import login from "./login"
import list from "./list"

Vue.use(VueRouter);

const router=new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/index",
        },
        jumei,
        group,
        cart,
        Detail,
        {
            path:"/mine",
            name:"mine",
            meta:{
                flag:true,
                requiredAuth:true
            },
            component:_=>import("@pages/mine")
        },
        infant,
        search,
        login,
        {
            path:"/register",
            name:"register",
            component:_=>import("@pages/register"),
            meta:{
                flag:false,
                requiredAuth:false
            }

        },
        list
    ]
});

// router.beforeEach((to,from,next)=>{
//     if(to.path !="/login" && to.meta.requiredAuth){
//         if(localStorage.getItem("token")){
//             next();
//         }else{
//             next({name:"login",params:{to:to.path}})
//         }

//     }else{
//         next();
//     }
// })

export default router;


// export default {
//     path: "/mine",
//     component: _ => import("@pages/mine"),
//     name: "mine",
//     meta: {
//       flag: true,
//       requiredAuth: false
//     }
  