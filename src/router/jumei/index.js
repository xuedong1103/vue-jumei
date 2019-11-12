export default {
    path: "/index",
    component: _=>import("@pages/jumei"),
    name: "jumei",
    meta: {
      flag: true,
      requiredAuth: false
    }
  }