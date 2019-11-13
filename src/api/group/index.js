import http from "@utils/request";

export const goodsApi = ()=>http({
    methods:"get",
    url:"/api/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20",
    data:{
       
    }
})
    

//接口 http://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20