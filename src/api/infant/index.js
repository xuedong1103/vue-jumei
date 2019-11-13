import http from "@utils/request";

export const infantApi = ()=>http({
    method:"get",
    url:"/api/muandbaby/ajaxList?page=1&card_id=7430",
     data:{
        
     }
})