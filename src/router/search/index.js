export default {
    path: "/search",
    name: 'search',
    component: _ =>import("@pages/search"),
    meta: {
        flag: false,
        requireAuth: false
    }
}

