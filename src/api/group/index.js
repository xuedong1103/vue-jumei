import http from "@utils/request";

export const goodsApi = ()=>http({

<<<<<<< HEAD
=======

>>>>>>> 5b3432548c0a6fb79a3ce6fb303f3511bea06e62
    method:"get",
    url:"api/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20",
    // data:{
    //     page:page
    // }
<<<<<<< HEAD
=======

>>>>>>> 5b3432548c0a6fb79a3ce6fb303f3511bea06e62
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