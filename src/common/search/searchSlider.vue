<template>
    <div>
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
       <!-- <div class="mask" v-if="isShow" @click="handleMask()"></div> -->
    </div>
</template>

<script>
export default {
    name:"searchSlider",
    data(){
      return {
          isShow:true
      }
    }, 
    created(){
            // this.isShow = this.$observer.$on("handleSearch",(params)=>{
            //     this.isShow=params;
            // });
        },
    methods:{
    //  handleMask(){
    //         this.$observer.$emit("handleLeft",!this.isShow);
    //     }
    }
}
</script>

<style>

.mask{
  width:100%;
  height:100%;
  background:#000;
  position:absolute;
  z-index:-1;
}
.searchgroup .searchList {
  width: 2.7rem;
  height: 100%;
  background: #fff;
  /* align-self: flex-end; */
  font-size: 0.12rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  position:absolute;
  right:0;
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
  text-align:left;
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
  text-align:left;
}
</style>