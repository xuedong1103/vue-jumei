import http from "@utils/request";

export const goodsApi = (name)=>http({

    method:"get",
    url:"api/yiqituan/tab_list?tab="+name+"&page=1&per_page=20",
    // data:{
    //     page:page
    // }
})
// http://m.jumei.com/yiqituan/tab_list?tab=coutuan_makeup&page=1&per_page=20

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