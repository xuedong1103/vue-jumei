<template>
  <div class="searchgroup">
    <div class="searchpage">
      <v-touch class="searchBack" tag="a" @tap="handleIndex()">
        <img src="http://f0.jmstatic.com/btstatic/h5/common/left_arrow.png" />
      </v-touch>
      <div class="search">
        <input type="text" class="searchBox" placeholder="搜索商品的名称、品牌、功效" v-model="value" />
        <!-- <v-touch tag="span" @tap="handleSlider()">搜索</v-touch> -->
        <span>
          <a @click="handleSlider" tag="a">分类</a>
        </span>
      </div>
    </div>

    <div id="container">
      <section class="goodSearchList" :style="item">
        <a v-for="(item) in searchlist" :key="item.item_id">
          <div class="product_item">
            <div class="product_img">
              <img :src='item.image_url_set.dx_image["320"]' />
            </div>
            <div class="product_content">
              <div class="product_name">{{item.name}}</div>
              <div class="product_price">
                <span class="newPrice">
                  ￥
                  <b>{{item.jumei_price}}</b>
                </span>
                <span class="oldPrice">￥{{item.market_price}}</span>
              </div>
            </div>
          </div>
        </a>
      </section>

      <!-- <transition name="slider">
      <div class="searchList" >
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
      <div class="mask" v-if="isShow" @click="handleMask()"></div>-->
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
                <router-link
                  v-for="(list,index) in item.listItem"
                  :key="index"
                  @click="hanldeList(index)"
                  tag="li"
                  :to="'/search/list/'+list.category_id+'/2'"
                >{{list.title}}</router-link>
              </ul>
            </li>
          </van-collapse-item>
        </van-collapse>
      </van-popup>
    </div>
  </div>
</template>
<script>
import { searchingListApi } from "@api/search";
import {throttle} from "@utils/delay"
export default {
  data() {
    return {
      show: true,
      activeNames: ["1"],
      value: "",
      searchlist: [],
      option: [
        {
          title: "面部护肤",
          listItem: [
            { title: "眼部护理", category_id: 62 },
            { title: "化妆水/爽肤水", category_id: 10 },
            { title: "啫哩/凝露/凝胶", category_id: 81 },
            { title: "精华", category_id: 17 },
            { title: "面霜", category_id: 16 },
            { title: "唇部护理", category_id: 83 },
            { title: "洁面", category_id: 19 },
            { title: "T区/特殊护理", category_id: 338 },
            { title: "面膜", category_id: 14 },
            { title: "乳液", category_id: 9 },
            { title: "精油", category_id: 197 },
            { title: "护肤套装", category_id: 23 }
          ]
        },
        {
          title: "彩妆",
          listItem: [
            { title: "眼部", category_id: 386 },
            { title: "粉饼/散粉", category_id: 383 },
            { title: "唇部", category_id: 388 },
            { title: "睫毛", category_id: 387 },
            { title: "眉部", category_id: 384 },
            { title: "美甲", category_id: 389 },
            { title: "隔离", category_id: 55 },
            { title: "底妆", category_id: 38 },
            { title: "遮瑕/修容", category_id: 143 },
            { title: "防晒", category_id: 33 },
            { title: "卸妆", category_id: 18 },
            { title: "腮红", category_id: 8 },
            { title: "彩妆套装", category_id: 37 }
          ]
        },
        {
          title: "身体护理",
          listItem: [
            { title: "个人护理", category_id: 198 },
            { title: "润肤", category_id: 57 },
            { title: "润肤乳", category_id: 22 },
            { title: "纤体/美体", category_id: 280 },
            { title: "手足护理", category_id: 65 },
            { title: "护发", category_id: 54 },
            { title: "沐浴", category_id: 122 },
            { title: "洗发", category_id: 395 },
            { title: "美发造型", category_id: 94 },
            { title: "口腔护理", category_id: 151 },
            { title: "颈部护理", category_id: 13 }
          ]
        }
      ],
      item:"display:block"
    };
  },
  watch: {
    async value(newVal) {
      throttle(async ()=>{
        let data = await searchingListApi(newVal);
        this.searchlist = data.data.item_list;
      },300)
      if(newVal==""){
          this.searchlist=[];
          this.value=''
      }
    
    }
  },
  methods: {
    handleSlider() {
      this.show = true;
    },
    handleIndex() {
      this.$router.push("/index");
    },
    hanldeList(index) {}
  }
  // async created(){
  //     let data = await SearchApi()
  //     console.log(data);
  // }
};
</script>

 
 <style>
.searchgroup {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  position: absolute;
  top: 0;
  right: 0;
}
.searchpage {
  width: 100%;
  height: 0.38rem;
  display: flex;
  border-bottom: 1px solid #e8e8e8;
}

.searchgroup .searchBack {
  width: 0.6rem;
  position: relative;
  z-index: 1;
}
.searchgroup .searchBack img {
  width: 0.075rem;
  height: 0.14rem;
  position: absolute;
  left: 40%;
  top: 35%;
}
.searchgroup .searchpage .search {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchgroup .searchpage .search .searchBox {
  width: 80%;
  height: 0.26rem;
  border-radius: 0.2rem;
  text-align: center;
  outline: none;
  border: none;
  margin-right: 20%;
  background: #efefef
    url("http://f0.jmstatic.com/btstatic/h5/common/search_btn.png") no-repeat
    0.1rem center;
  background-size: 0.14rem 0.14rem;
  font-size: 0.12rem;
}
.searchgroup .searchpage .search span {
  position: absolute;
  right: 0.1rem;
  font-size: 0.12rem;
  color: #999;
}
#container {
  width: 100%;
  height: 100%;
  -position: relative;
  overflow-y: auto;
}

.searchList {
  width: 2.7rem;
  height: 100%;
  background: #fff;
  align-self: flex-end;
  font-size: 0.12rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.searchList .goodsItem {
  list-style: none;
  display: flex;
  flex-direction: column;
}

.searchList .firstClass {
  text-align: left;
  font-size: 0.14rem;
  color: #666;
}
.searchList .van-collapse-item__content {
  padding: 0;
}
.searchList .goodsItem .secondClass {
  display: flex;
  flex-direction: column;
  -display: none;
}
.searchList .goodsItem .secondClass li {
  list-style: none;
  height: 0.36rem;
  line-height: 0.36rem;
  padding-left: 0.2rem;
  background: #f5f5f5;
  border-bottom: solid 1px #eee;
  color: #666;
}

/**---------------------------------------------------------------- */
.goodSearchList {
  width: 100%;
  height: auto;

  /* display:flex;
            flex-direction:column; */
}
.goodSearchList .product_item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
  margin-top: 0.1rem;
}
.goodSearchList .product_item .product_img {
  width: 1rem;
  height: 0.8rem;
  margin-left: 0.1rem;
}
.goodSearchList .product_item .product_img img {
  width: 100%;
  height: 100%;
}
.goodSearchList .product_item .product_content {
  width: 80%;
  margin: 0 0.1rem 0 0.1rem;
  display: flex;
  flex-direction: column;
  font-size: 0.12rem;
  color: #333;
}

.goodSearchList .product_item .product_content .product_name {
  font-size: 0.12rem;
  margin: 0.12rem 0 0.05rem;
}

.gogoodSearchListodList .product_item .product_content .product_price {
  margin-top: 0.24rem;
  line-height: 0.2rem;
  height: 0.2rem;
}

.goodSearchList .product_item .product_content .product_price .newPrice {
  color: #fe4070;
}

.goodSearchList .product_item .product_content .product_price .newPrice b {
  font-size: 0.14rem;
  color: #fe4070;
  font-weight: normal;
}

.goodSearchList .product_item .product_content .product_price .oldPrice {
  text-decoration: line-through;
  color: #999;
  font-size: 0.12rem;
}

.goodSearchList .product_item .product_content .product_comment {
  font-size: 0.1rem;
  line-height: 0.12rem;
  color: #999;
}
</style>