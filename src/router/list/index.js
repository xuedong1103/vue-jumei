export default {
    path:"/search/list",
    name:"list",
    component:_=>import("@pages/list"),
    meta:{
        flag:false,
        requestedAuth:false
    }
}