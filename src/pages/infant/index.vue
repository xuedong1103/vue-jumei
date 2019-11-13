<template>
  <div class="infantPage">
        <div class="top">
            <a class="icon_left" href="javascript:void(0)"><img
                    src="http://a5.jmstatic.com/f8f6fcf77a736300/left_arrow.png"></a>
            <div>母婴</div>
            <a class="icon_right" href="javascript:void(0)"><img
                    src="http://a5.jmstatic.com/cf4cd6f2fe742a74/home.png"></a>
        </div>
        <div class="search">
            <a class="page_title">
                <img class="searchIcon" src="https://f0.jmstatic.com/btstatic/h5/common/search_btn.png" />
                <span>搜索商品 分类 功效</span>
            </a>
            <img class="searchImg" src="https://f0.jmstatic.com/btstatic/h5/index/search_list2.png" />
        </div>
        <!-- <header>
            <div class="navList">
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
        <div class="banner">
            <img
                src="http://mp6.jmstatic.com/mobile/card_material/item_469_2048_838-ipad2048_1572938814.jpeg?imageView2/2/w/640/q/90">
        </div>
        <section class="list_item">
            <div class="sale">
                <img src="http://f0.jmstatic.com/btstatic/h5/common/icon_title.png" />
                <span>今日特惠</span>
            </div>
            <a class="saleImg" href="javascript:void(0)"><img
                    src="http://mp6.jmstatic.com/mobile/card_material/item_7710_2048_1024-ipad2048_1571191141.jpeg?imageView2/2/w/640/q/90" /></a>
        </section>
        <section class="list_item">
            <div class="sale">
                <img src="http://f0.jmstatic.com/btstatic/h5/common/icon_title.png" />
                <span>全球热销品牌</span>
            </div>
            <div class="brand">
                <a href="javascript:void(0)"><img
                        src="http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1502086238.jpeg?imageView2/2/w/160/q/90" /></a>
                <a href="javascript:void(0)"><img
                        src="http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1560910791.jpeg?imageView2/2/w/160/q/90" /></a>
                <a href="javascript:void(0)"><img
                        src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543566.jpeg?imageView2/2/w/160/q/90" /></a>
                <a href="javascript:void(0)"><img
                        src="http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1551235310.jpeg?imageView2/2/w/160/q/90" /></a>
                <a href="javascript:void(0)"><img
                        src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1548056454.jpeg?imageView2/2/w/160/q/90" /></a>
                <a href="javascript:void(0)"><img
                        src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1563960647.jpeg?imageView2/2/w/160/q/90" /></a>
                <a href="javascript:void(0)"><img
                        src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1548055217.png?imageView2/2/w/160/q/90" /></a>
                <a href="javascript:void(0)"><img
                        src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1548055580.jpeg?imageView2/2/w/160/q/90" /></a>
            </div>
            <div class="brand_bottom">
                <a href="javascript:void(0)"><img
                        src="http://mp6.jmstatic.com/mobile/card_material/item_5518_1024_512-ipad2048_1570502878.jpeg?imageView2/2/w/320/q/90"></a>
                <a href="javascript:void(0)"><img
                        src="http://mp6.jmstatic.com/mobile/card_material/item_5518_1024_512-ipad2048_1572919587.jpeg?imageView2/2/w/320/q/90"></a>
            </div>

        </section>
        <section class="list_item">
            <div class="sale">
                <img src="http://f0.jmstatic.com/btstatic/h5/common/icon_title.png" />
                <span>精选活动推荐</span>
            </div>
            <div class="brand_activity">
                <a href="javascript:void(0)"><img
                        src="http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1573036600.jpeg?imageView2/2/w/320/q/90" /></a>
                <a href="javascript:void(0)"><img
                        src="http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1573036600.jpeg?imageView2/2/w/320/q/90" /></a>
                <a href="javascript:void(0)"><img
                        src="http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1573036600.jpeg?imageView2/2/w/320/q/90" /></a>
                <a href="javascript:void(0)"><img
                        src="http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1573036600.jpeg?imageView2/2/w/320/q/90" /></a>

            </div>
        </section>
        <section class="list_item">
            <div class="sale">
                <img src="http://f0.jmstatic.com/btstatic/h5/common/icon_title.png" />
                <span>疯抢专场 早10点上新</span>
            </div>
            <div class="list_new" v-for="(item,index) in goodsList" :key="index">
               <figure>
                   <img :src='item.image_url_set.main["320"]'>
               </figure>
               <figcaption>
                   <div class="new_title">
                        <h2>{{item.title}}</h2>
                        <div class="activity_time">
                            <span>仅剩</span>
                            <span>01天</span>
                            <span>11时</span>
                            <span>23分</span>
                        </div>
                   </div>
                   <div class="new_img"><img src="http://p0.jmstatic.com/brand/logo_180/21958.jpg"></div>
               </figcaption>
            </div>

            <!-- <div class="list_new">
                <figure>
                    <img src="http://mp6.jmstatic.com//jmstore/image/000/008/8553_std/5dbe7cf208fd9_1024_512.jpg?1572832489&imageView2/2/w/640/q/90">
                </figure>
                <figcaption>
                    <div class="new_title">
                         <h2>澳兰黛品牌专场</h2>
                         <div class="activity_time">
                             <span>仅剩</span>
                             <span>01天</span>
                             <span>11时</span>
                             <span>23分</span>
                         </div>
                    </div>
                    <div class="new_img"><img src="http://p0.jmstatic.com/brand/logo_180/21958.jpg"></div>
                </figcaption>
             </div> -->
        </section>
  </div>
</template>


<script>
import NavSlider from "@common/components/navSlider"
import {infantApi} from "@api/infant";
export default {
    data(){
      return {
        goodsList:[]
      }
    },
    name:"infant",
    components:{
      NavSlider
    },
    async created(){
    let data =  await infantApi();
    this.goodsList= data.item_list ;
    //console.log(data);
    console.log(this.goodsList);
  },
};
</script>

<style>
.infantPage {
  overflow-y: auto;
  position: absolute;
  width: 100%;
  left: 0%;
  right: 0;
  top: 0;
  bottom: 0;
  padding-bottom: 0.42rem;
}

.search {
  height: 0.45rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search .page_title {
  width: 2.6rem;
  height: 0.28rem;
  background: #f5f5f5;
  margin-left: 0.12rem;
  border-radius: 0.2rem;
  position: relative;
  display: flex;
  align-items: center;
  color: #999;
}

.search .page_title .searchIcon {
  width: 0.14rem;
  height: 0.14rem;
  position: absolute;
  left: 0.72rem;
}

.search .searchImg {
  width: 0.21rem;
  height: 0.15rem;
  margin-right: 0.1rem;
}

.search .page_title span {
  font-size: 0.12rem;
  color: #999;
  margin-left: 1rem;
}

header {
  height: 0.36rem;
  -background: green;
  /* background:#fff;
            position:sticky;
            top:0; */
}

 .infantPage header .navList {
  height: 0.36rem;
  line-height: 0.36rem;
  font-size: 0.12rem;
  white-space: nowrap;
  overflow-x: auto;
  border-bottom: 1px solid #e8e8e8;
}

.infantPage header span {
  padding: 0 0.15rem;
  color: #666;
}

.infantPage .top {
  height: 0.36rem;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 0.14rem;
}

.infantPage .top a {
  width: 0.4rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.infantPage .top .icon_left img {
  width: 0.075rem;
  height: 0.15rem;
}

.infantPage .top .icon_right img {
  width: 0.2rem;
  height: 0.2rem;
}

.infantPage .top div {
  flex: 1;
  text-align: center;
}

.infantPage .banner {
  width: 100%;
  height: 1.3rem;
}

.infantPage .banner img {
  width: 100%;
  height: 100%;
}

.infantPage .list_item {
  min-height: 0;
}

.infantPage .sale {
  width: 100%;
  height: 0.4rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.12rem;
  color: #333;
  border-top: 2px solid #eaeaea;
}

.infantPage .sale img {
  width: 0.15rem;
  height: 0.15rem;
}

.infantPage .sale span {
  margin-left: 0.1rem;
}

.infantPage .list_item .saleImg {
  display: inline-block;
  width: 100%;
  height: 1.6rem;
}

.infantPage .list_item .saleImg img {
  width: 100%;
  height: 1.6rem;
}

.infantPage .list_item .brand {
  width: 100%;
  height: 1.6rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  background: green;
}

.infantPage .list_item .brand a {
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  position: relative;
}

.infantPage .list_item .brand img {
  position: absolute;
  left: 0;
  top: 0;
  width: 0.8rem;
  height: 0.8rem;
}

.infantPage .list_item .brand_bottom {
  height: 0.8rem;
  width: 100%;
  margin-top: 0.1rem;
  display: flex;
}

.infantPage .list_item .brand_bottom a {
  width: 50%;
  height: 0.8rem;
  display: flex;
  position: relative;
}

.infantPage .list_item .brand_bottom a img {
  width: 100%;
  height: 100%;
  position: absolute;
}

.infantPage .list_item .brand_activity {
  width: 100%;
  min-height: 0;
  display: flex;
  flex-wrap: wrap;
}

.infantPage .list_item .brand_activity a {
  width: 50%;
  height: 1.6rem;
  position: relative;
}

.infantPage .list_item .brand_activity a img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.infantPage .list_item .list_new {
  width: 100%;
  height: 2.1rem;
}
.infantPage .list_item .list_new figure {
  width: 100%;
  height: 1.6rem;
}
.infantPage .list_item .list_new figure img {
  width: 100%;
  height: 100%;
}
.infantPage .list_item .list_new figcaption {
  height: 0.5rem;
  font-size: 0.12rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.infantPage .list_item .list_new figcaption .new_title {
  width: 2rem;
  height: 100%;
  box-sizing: border-box;
  padding: 0.1rem 0.15rem;
  display: flex;
  flex-direction: column;
  color: #333;
  font-size: 0.12rem;
}
.infantPage .list_item .list_new figcaption .activity_time {
  display: flex;
  flex-direction: row;
  font-size: 0.11rem;
  color: rgb(153, 151, 151);
}
.infantPage .list_item .list_new figcaption .new_title h2 {
  font-size: 0.12rem;
  font-weight: normal;
  text-align:left;
}
.infantPage .list_item .list_new figcaption .new_img {
  width: 0.7rem;
  height: 0.3rem;
  margin-right: 0.18rem;
}
.infantPage .list_item .list_new figcaption .new_img img {
  width: 100%;
  height: 100%;
}
</style>