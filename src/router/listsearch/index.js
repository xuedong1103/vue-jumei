export default {
    path:"/search/listingsearch",
    name:"listingsearch",
    component:_=>import("@pages/list"),
    meta:{
        flag:false,
        requestedAuth:false
    },
    props:true   
}