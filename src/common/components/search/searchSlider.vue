<template>
 
    <van-popup
      v-model="show"
      position="right"
      :style="{ height: '100%' }"
      get-container="#container"
      class="searchList"
    >
      <van-collapse v-model="activeNames">
        <van-collapse-item
          v-for="(item,index) in option"
          :key="index"
          :title="item.title"
          :name="index"
          class="firstClass"
        >
          <li class="goodsItem">
            <ul class="secondClass">
              <li
                v-for="(item,index) in item.listItem"
                :key="index"
                @click="hanldeList(index)"
              >{{item}}</li>
            </ul>
          </li>
        </van-collapse-item>
      </van-collapse>
    </van-popup>

</template>

<script>
export default {
  name: "searchSlider",
   data() {
    return {
      show: true,
      activeNames: ["1"],
      option:[
       {title:"面部",listItem:["眼部护理","化妆水/爽肤水","眼部护理","眼部护理","眼部护理","眼部护理","眼部护理"]},{title:"面部",listItem:["眼部护理","眼部护理","眼部护理","眼部护理","眼部护理","眼部护理","眼部护理"]}
      ]
    };
   }
};
</script>

<style>
</style>