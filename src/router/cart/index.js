export default {
  path: "/cart",
  component: _ => import("@pages/cart"),
  name: "cart",
  meta: {
    flag: false,
    requiredAuth: false
  }
}