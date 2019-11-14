import http from "@utils/request"

export const listApi = ()=>http({
    methods:"get",
    url:"/api/search/index?category_id="+category_id+"&page="+page+"&ajax=get",
    data(){
        category_id,
        page
    },
    props:true
})

// 
//