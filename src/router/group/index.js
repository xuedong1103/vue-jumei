export default {
  path: "/group",
  component: _ => import("@pages/group"),
  name: "group",
  meta: {
    flag: true,
    requiredAuth: false
  }
}