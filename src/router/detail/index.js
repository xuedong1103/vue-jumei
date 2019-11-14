export default {
    path: "/detail/:id",
    component: _ => import("@components/detail"),
    name: "detail",
    meta: {
      flag: true,
      requiredAuth: false
    },
    props:true
  }