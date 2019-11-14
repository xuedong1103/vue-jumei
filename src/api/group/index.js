import http from "@utils/request";

export const goodsApi = ()=>http({
<<<<<<< HEAD
    methods:"get",
    url:"/api/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20",
    data:{
       
    }
=======
    method:"get",
    url:"api/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20",
    // data:{
    //     page:page
    // }
>>>>>>> 9f93743fefbd5d5e5f9036042e588472e88d1584
})
    

//详情页接口
export const goodsDetialApi= (id)=>http({
    method:"get",
    url:"api/yiqituan/ajaxDetail?item_id="+id+"&type=global_deal&tid=",
    // data:{
    //     item_id:item_id,
    //     type:type
    // }

})

//接口 http://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20