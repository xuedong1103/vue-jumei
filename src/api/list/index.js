import http from "@utils/request"

export const listApi = (category_id,page)=>http({
    methods:"get",
    url:"api/search/index?category_id="+category_id+"&page="+page+"&ajax=get",
    // url:"/api/index/requestDelegate?url=http%3A%2F%2Fmobile.jumei.com%2Fmsapi%2Fmall%2Fallcategories.json",
    data:{
        // category_id,
        // page
    },
   
    
})

// index/requestDelegate?url=http%3A%2F%2Fmobile.jumei.com%2Fmsapi%2Fmall%2Fallcategories.json
//