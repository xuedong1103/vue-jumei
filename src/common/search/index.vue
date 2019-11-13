<template>
  <div class="search_container">
    <div class="searchgroup">
      <div class="searchpage">
        <a class="searchBack" @click="handleClick()">
          <img src="http://f0.jmstatic.com/btstatic/h5/common/left_arrow.png" />
        </a>
        <div class="searchTop">
          <input type="text" class="searchBox" placeholder="搜索商品的名称、品牌、功效" />
          <img src="http://f0.jmstatic.com/btstatic/h5/common/search_btn.png" />
          <span>搜索</span>
        </div>
      </div>
          <SearchSlider/>
     
    </div>
  </div>
</template>

<script>
import SearchSlider from "@common/search/searchSlider";
export default {
    name:"search",
    components:{
        SearchSlider
    },
     data(){
        return {
            isShow:true
        }
    },
};
</script>

<style>


.search_container {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background:#fff;
}
.searchgroup {
  position: relative;
  height:100%;
}
.searchgroup .searchpage {
  height: 0.38rem;
  display: flex;
  border-bottom: 1px solid #e8e8e8;
  background: #fff;
}

.searchgroup .searchBack {
  width: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchgroup .searchBack img {
  width: 0.075rem;
  height: 0.14rem;
}
.searchgroup .searchpage .searchTop {
  width: 100%;
  padding: 0.06rem 0.5rem 0.06rem 0.06rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.searchgroup .searchpage .searchTop .searchBox {
  width: 100%;
  height: 0.26rem;
  border-radius: 0.2rem;
  outline: none;
  border: none;
  padding-left: 0.34rem;
  background: #efefef;
}
.searchgroup .searchpage .searchTop span {
  position: absolute;
  right: 0.1rem;
  font-size: 0.12rem;
  color: #999;
}
.searchgroup .searchpage .searchTop img {
  width: 0.14rem;
  height: 0.14rem;
  position: absolute;
  left: 0.18rem;
}

</style>