export default {
  path: "/group",
  component: _ => import("@pages/group"),
  name: "group",
  meta: {
    flag: true,
    requiredAuth: false
  },
  // children:[
  //   {
  //     path:"/group",
  //     redirect:"/group"
  //   },
  //   {
  //     path:"detial",
  //     component:_=>import("@components/detial"),
  //     name:"detial",
  //     meta:{
  //       flag:true,
  //       requiredAuth:false
  //     }

  //   }

  // ]
  


}