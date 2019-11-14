export default {
    path:"/login",
    name:"login",
    component:_=>import("@pages/login"),
    meta:{
        flag:false,
        requiredAuth:false
    }
}