export default {
    path:"/search/list/:brand_id/:brand_name/:page/:category_id/:category_name",
    name:"searchlist",
    component:_=>import("@pages/list"),
    meta:{
        flag:false,
        requestedAuth:false
    },
    props:true   
}

