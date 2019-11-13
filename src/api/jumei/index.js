import http from "@utils/request";

export const jumeiindexApi = ()=>http({
    method:"get",
    url:"/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=formal&page_key=",
    // data:{
    //     itemid

    // }
})

//http://m.jumei.com/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=formal&page_key=