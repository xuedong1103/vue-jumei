<template>
  <div class="searchgroup">
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
    <div class="searchList">
      <ul>
        <li class="goodsItem">
          <span class="firstClass">面部护肤</span>
          <ul class="secondClass">
            <li>眼部护理</li>
            <li>化妆水/爽肤水</li>
            <li>眼部护理</li>
            <li>眼部护理</li>
            <li>眼部护理</li>
            <li>眼部护理</li>
            <li>眼部护理</li>
            <li>眼部护理</li>
          </ul>
        </li>
        <li class="goodsItem">
          <span class="firstClass">面部护肤</span>
          <ul class="secondClass">
            <li>眼部护理</li>
            <li>化妆水/爽肤水</li>
            <li>眼部护理</li>
            <li>眼部护理</li>
            <li>眼部护理</li>
            <li>眼部护理</li>
            <li>眼部护理</li>
            <li>眼部护理</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
.searchgroup .searchpage {
  height: 0.38rem;
  display: flex;
  border-bottom: 1px solid #e8e8e8;
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
.searchgroup .searchpage .search {
  width: 100%;
  padding: 0.06rem 0.5rem 0.06rem 0.06rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.searchgroup .searchpage .search .searchBox {
  width: 100%;
  height: 0.26rem;
  border-radius: 0.2rem;
  outline: none;
  border: none;
  padding-left: 0.34rem;
  background: #efefef;
}
.searchgroup .searchpage .search span {
  position: absolute;
  right: 0.1rem;
  font-size: 0.12rem;
  color: #999;
}
.searchgroup .searchpage .search img {
  width: 0.14rem;
  height: 0.14rem;
  position: absolute;
  left: 0.18rem;
}
.searchgroup .searchList {
  width: 2.7rem;
  height: 100%;
  background: #fff;
  align-self: flex-end;
  font-size: 0.12rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.searchgroup .searchList .goodsItem {
  list-style: none;
  display: flex;
  flex-direction: column;
}

.searchgroup .searchList .firstClass {
  height: 0.36rem;
  line-height: 0.36rem;
  border-right: 0.1rem solid #fff;
  background: #fff
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAOCAYAAAFGCjzVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQhJREFUeNpiPHPmzH8GBgZGBgj4z2RsbAzigAT/g9gAAcT4//9/hrNnz4KlmRiQAEAAwWSQ9TPAtIFVQs1igJrHAFMIEEBgnSAAMxcGUMxHNhKbBNheJmyCIAZAAMFdB3MEul1YNDLAHQbVgO41BnTfAA1HdTQWL/9HchbcMIAAYgQFPJJiQs5DhALUWcQASEwgBQAhjXD/okQfHo0oAcSEJxCwasCIchyhhxEF2JIDIz4NIAAQoHQyWAEABGGogv//y4WQh5bSLI9GvlybLq8jSRpfcHUQ2jsFPoKOWYYNBwY025AFoIRbLkCy8lIH4DnaNsICL44CSD/GCDkUAlydyy8oA9KAqAmEu34URg/ySAAAAABJRU5ErkJggg==)
    no-repeat right center;
  padding-left: 0.1rem;
  background-size: 0.12rem;
}
.searchgroup .searchList .goodsItem .secondClass {
  display: flex;
  flex-direction: column;
  -display: none;
}
.searchgroup .searchList .goodsItem .secondClass li {
  list-style: none;
  height: 0.36rem;
  line-height: 0.36rem;
  padding-left: 0.2rem;
  background: #f5f5f5;
  border-bottom: solid 1px #eee;
  color: #666;
}
</style>