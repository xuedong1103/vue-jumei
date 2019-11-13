import http from "@utils/request";

export const goodsApi = (token)=>http({
    methods:"get",
    url:"/yiqituan/tab_list",
    data:{
        token:token
    }
})
    

//接口 http://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20