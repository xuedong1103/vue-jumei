export default {
    path: "/jumei/infant",
    component: _ => import("@pages/infant"),
    name: "infant",
    meta: {
      flag: true,
      requiredAuth: false
    }
  }