import http from "@utils/request";

export const BrandApi = (brand_id,brand_name,page,category_id,category_name)=>http({
    method:"get",
    url:"/api/search/index?category_id="+category_id+"&category_name="+category_name+"&brand_id="+brand_id+"&brand_name="+brand_name+"&page="+page+"&ajax=get",
     data:{
        
     }
})

//  const classifyApi =(category_id,category_name,page)=>http({
//     method:'get',
//     url:"/api/search/index?category_id="+category_id+"&category_name="+category_name+"&brand_id=&brand_name=%E5%85%A8%E9%83%A8&page=2&ajax=get",
//     data:{
        
//     }
// })

// export {
//     BrandApi,
//     classifyApi
// }