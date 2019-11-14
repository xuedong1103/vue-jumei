<template>

    <div class="searchpage">
      <a class="searchBack">
        <img src="http://f0.jmstatic.com/btstatic/h5/common/left_arrow.png" />
      </a>
      <div class="search">
        <input type="text" class="searchBox" placeholder="搜索商品的名称、品牌、功效" />
        <img src="http://f0.jmstatic.com/btstatic/h5/common/search_btn.png" />
        <span>搜索</span>
      </div>
    </div>

</template>

<script>
export default {};
</script>

<style>
    .searchpage{
            height:0.38rem;
            display:flex;
            border-bottom:1px solid #e8e8e8;
        }
        
        .searchBack{
            width:0.6rem;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        .searchBack img{
            width:0.075rem;
            height:0.14rem;
        }
       .searchpage .search{
           width:100%;
           padding:0.06rem 0.5rem 0.06rem 0.06rem;
           display:flex;
           justify-content:center;
           align-items:center;
           position:relative;
       }
       .searchpage .search .searchBox{
            width:100%;
            height:0.26rem;
            border-radius:0.2rem;
            outline:none;
            border:none;
            padding-left:0.34rem;
            background:#efefef;
       }
       .searchpage .search span{
            position:absolute;
            right:0.1rem;
            font-size:0.12rem;
            color:#999;
       }
       .searchpage .search img{
            width:0.14rem;
            height:0.14rem;
            position:absolute;
            left:0.18rem;
       }
</style>