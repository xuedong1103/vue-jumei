<template>
  <div class="searchgroup" :style="view">
    <div class="searchpage" :style="view">
        <a class="searchBack" :style="styleItem" @click="handleBack">
          <img src="http://f0.jmstatic.com/btstatic/h5/common/left_arrow.png">
        </a>
         <v-touch class="search" @tap="cancelBack" tag="div">
            <input type="text" class="searchBox" placeholder="搜索商品的名称、品牌、功效"/>
            <span>搜索</span>
        </v-touch> 
    </div>
    <transition name="classList">
      <div class="searchList" v-if="isShow">
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
    </transition>
  </div>

</template>

<script>
export default {
  data(){
    return {
      isShow:true,
      styleItem:"display:block",
      view:"width:100%"
    }
  },
  methods:{
    cancelBack(){
      this.styleItem="display:block"
      this.isShow=false;
      console.log(this.isShow,1);
       this.view="width:100%"
    },
    handleBack(){
      this.isShow=true;
      this.styleItem="display:none"
      this.view="width:80%"
      console.log(this.isShow,2);
    }
  }
};
</script>

<style>
    .classList-enter,.classList-leave-to{
      right:-3.1rem;
    }
    .classList-enter-active,.classList-leave-to{
      transition:all .3s;
    }
      .searchgroup{
            width:100%;
            height:100%;
            display:flex;
            flex-direction:column;
            overflow:auto;
            position:absolute;
            top:0;
            right:0;
      }
       .searchgroup .searchpage{
            width:100%;
            height:0.38rem;
            display:flex;
            border-bottom:1px solid #e8e8e8;
            position:fixed;
            top:0;
            right:0;
            z-index:10;
            
        }
        
       .searchgroup .searchBack{
            width:0.6rem;
            position:relative;
        }
       .searchgroup .searchBack img{
            width:0.075rem;
            height:0.14rem;
            position:absolute;
            left:40%;
            top:35%;
        }
      .searchgroup .searchpage .search{
           width:100%;
           height:100%;
           display:flex;
           justify-content:center;
           align-items:center;
       }
      .searchgroup .searchpage .search .searchBox{
            width:80%;
            height:0.26rem;
            border-radius:0.2rem;
            text-align:center;
            outline:none;
            border:none;
            margin-right:20%;;
            background:#efefef url("http://f0.jmstatic.com/btstatic/h5/common/search_btn.png") no-repeat 0.1rem center;
            background-size:0.14rem  0.14rem;
       }
      .searchgroup .searchpage .search span{
            position:absolute;
            right:0.1rem;
            font-size:0.12rem;
            color:#999;
       }

      .searchgroup .searchList{
            width:2.7rem;
            height:100%;
            background:#fff;
            position:absolute;
            top:0.39rem;
            right:0;
            font-size:0.12rem;
            /* display:flex;
            flex-direction:column; */
            overflow-y:auto;
            border-left:1px solid #e8e8e8;
       }
      .searchgroup .searchList .goodsItem{
           list-style:none;
           text-align:left;
          
       }
       
      .searchgroup .searchList .firstClass{
           display:block;
           height:0.36rem;
           line-height:0.36rem;
           border-right:0.1rem solid #fff;
           background:#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAOCAYAAAFGCjzVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQhJREFUeNpiPHPmzH8GBgZGBgj4z2RsbAzigAT/g9gAAcT4//9/hrNnz4KlmRiQAEAAwWSQ9TPAtIFVQs1igJrHAFMIEEBgnSAAMxcGUMxHNhKbBNheJmyCIAZAAMFdB3MEul1YNDLAHQbVgO41BnTfAA1HdTQWL/9HchbcMIAAYgQFPJJiQs5DhALUWcQASEwgBQAhjXD/okQfHo0oAcSEJxCwasCIchyhhxEF2JIDIz4NIAAQoHQyWAEABGGogv//y4WQh5bSLI9GvlybLq8jSRpfcHUQ2jsFPoKOWYYNBwY025AFoIRbLkCy8lIH4DnaNsICL44CSD/GCDkUAlydyy8oA9KAqAmEu34URg/ySAAAAABJRU5ErkJggg==) no-repeat right center;
           padding-left:0.1rem;
           background-size:0.12rem;
       }
      .searchgroup .searchList .goodsItem .secondClass{
           display:flex;
           flex-direction:column;
           -display:none;
       }
      .searchgroup .searchList .goodsItem .secondClass li{
            list-style:none;
            height:0.36rem;
           line-height:0.36rem;
           padding-left:0.2rem;
           background:#f5f5f5;
           border-bottom:solid 1px #eee;
           color:#666;
       }
</style>