export default {
    path:"/search/list/:category_id/:page",
    name:"list",
    component:_=>import("@pages/list"),
    meta:{
        flag:false,
        requestedAuth:false
    },
    props:true   
}

