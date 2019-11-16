import http from "@utils/request"

export const searchingListApi = (dataKey)=>http({
   methods:"get",
   url:"api/search/index?search="+dataKey+"&page=2&ajax=get",
   data:{
       
   }
})