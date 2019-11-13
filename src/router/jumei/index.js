import infant from "@pages/infant"
export default {
  path: "/index",
  component: _ => import("@pages/jumei"),
  name: "jumei",
  meta: {
    flag: true,
    requiredAuth: false
  },
  // children: [
  //   {
  //     path: "/jumei",
  //     redirect: "/jumei/jumeiindex"
  //   },
  //   {
  //     path: "jumeiindex",
  //     component: _ => import("@pages/jumei"),
  //     name: "jumeiindex",
  //     meta: {
  //       flag: true,
  //       requiredAuth: false
  //     },
  //   },
  //   {
  //     path: "infant",
  //     component: _ => import("@pages/infant"),
  //     name: "infant",
  //     meta: {
  //       flag: true,
  //       requiredAuth: false
  //     },
  //   },
   
  // ]

}