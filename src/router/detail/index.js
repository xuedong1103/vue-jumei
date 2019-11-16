export default {
    path: "/detail/:id",
    component: _ => import("@components/detail"),
    name: "detail",
    meta: {
      flag: false,
      requiredAuth: false
    },
    props:true
  }