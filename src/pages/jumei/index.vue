<template>
  <div class="index">
    <!-- <div class="search">
            <a class="page_title"">
                <img class="searchIcon" src="https://f0.jmstatic.com/btstatic/h5/common/search_btn.png" />
                <span>搜索商品 分类 功效</span>
            </a>
            <img class="searchImg" src="https://f0.jmstatic.com/btstatic/h5/index/search_list2.png" />
    </div>-->
   
        <Search/>
 
    

    <!-- <header>
            <div>
                <span>首页</span>
                <span>极速免税店</span>
                <span>母婴</span>
                <span>轻奢</span>
                <span>名品特卖</span>
                <span>名品特卖</span>
            </div>
    </header> -->

    <router-view></router-view>
        <NavSlider/>
        <nav>
            <span>今日10点上新</span>
            <span>明日10店预告</span>
        </nav>

    <!-- <section>
            <a>
                <div>
                    <img
                        src="http://mp5.jmstatic.com//jmstore/image/000/007/7814_std/5dbbe087a5266_2048_710.jpg?1573007003&imageView2/2/w/800/q/90">
                </div>
            </a>
            <a>
                <div>
                    <img
                        src="http://mp6.jmstatic.com//jmstore/image/000/008/8126_std/5dc0103812595_2048_710.jpg?1572921358&imageView2/2/w/800/q/90">
                </div>
            </a>
            <a>
                <div>
                    <img
                        src="http://mp5.jmstatic.com//jmstore/image/000/008/8475_std/5db98a80c28bf_2048_710.jpg?1572963490&imageView2/2/w/800/q/90">
                </div>
            </a>
            <a>
                <div>
                    <img
                        src="http://mp6.jmstatic.com//jmstore/image/000/008/8621_std/5dbfebafd0052_2048_710.jpg?1572920482&imageView2/2/w/800/q/90">
                </div>
            </a>
            <a>
                <div class="product_item">
                    <div class="product_img"><img
                            src="http://mp6.jmstatic.com/product/004/879/4879050_std/4879050_dx_1154_400.jpg?_t=1566975100&imageView2/2/w/800/q/90">
                    </div>
                    <div class="product_content">
                        <div class="product_name">
                            LANEIGE兰芝新款 防晒隔离 修饰肤色 紫色 30ml/支
                        </div>
                        <div class="product_price">
                            <span class="newPrice">￥<b>299</b></span>
                            <span class="oldPrice">￥399</span>
                        </div>
                        <div class="product_comment"><span>48</span>条评论</div>
                    </div>
                </div>
            </a>
            <a>
                <div class="product_item">
                    <div class="product_img"><img
                            src="http://mp6.jmstatic.com/product/004/977/4977982_std/4977982_dx_1154_400.jpg?_t=1568106152&imageView2/2/w/800/q/90">
                    </div>
                    <div class="product_content">
                        <div class="product_name">
                            LANEIGE兰芝新款 防晒隔离 修饰肤色 紫色 30ml/支
                        </div>
                        <div class="product_price">
                            <span class="newPrice">￥<b>299</b></span>
                            <span class="oldPrice">￥399</span>
                        </div>
                        <div class="product_comment"><span>48</span>条评论</div>
                    </div>
                </div>
            </a>
    </section> -->
    <!-- <GoodList/> -->
    <!-- 搜索页 -->
    <!-- <transition name="searchSlider">
      <SearchPage v-if="isShow"/>
    </transition> -->
    <!-- <SearchSlider/> -->
  </div>
</template>

<script>
import NavSlider from "@common/components/navSlider";
import Search from "@components/search";
import SearchPage from "@common/components/search";
import GoodList from "@components/indexItem";
import {jumeiindexApi} from "@api/jumei";

export default {
  name: "Jumei",
  data(){
     return {

     }
  },
  
async created(){
    let data =  await jumeiindexApi();
       console.log(data,'index');
  },
    
components: {
    NavSlider,
    Search,
    SearchPage,
    GoodList,
  },
  methods:{
      
  }
};
</script>

<style>
.searchSlider-enter,
.searchList-leave-to {
  right: -2rem;
}
.searchSlider-enter-active,
.searchList-leave-active {
  transition: all 0.3s;
}
.index {
  overflow-y: auto;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 0.42rem;
}

/* .index header {
            height: 0.36rem;
            -background: green;
        }

        .index header div {
            height: 0.36rem;
            line-height: 0.36rem;
            font-size: 0.12rem;
            white-space: nowrap;
            overflow-x: auto;
            border-bottom: 1px solid #e8e8e8;
        }

        .index header span {
            padding: 0 0.15rem;
            color: #666;
        } */

.index nav {
  width: 100%;
  height: 0.4rem;
  font-size: 0.12rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.index nav span {
  width: 50%;
  height: 0.4rem;
  text-align: center;
  line-height: 0.4rem;
  color: #666;
}

</style>