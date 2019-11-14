import http from "@utils/request"

export const SearchApi = ()=>http({
   method:"get",
   url:"/api/index/requestDelegate?url=http%3A%2F%2Fmobile.jumei.com%2Fmsapi%2Fmall%2Fallcategories.json",
   data(){

   }
   
})