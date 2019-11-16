<template>
  <div class="detail">
    <!-- 头部开始 -->
    <div class="header">
      <a class="iconfont icon-fanhui" @click="onClickBack"></a>
      <div>商品详情</div>
      <a class="iconfont icon-shouye"></a>
    </div>
    <!-- 头部结束 -->

    <!-- 内容部分开始 -->
    <div class="content_box">
      <!-- 商品图片展示开始 -->
      <div class="img_box">
        <div>
          <img src="http://p0.jmstatic.com/banner/area/000/000/021.jpg" alt />
        </div>
        <div>
          <img :src="img" alt />
        </div>
      </div>
      <!-- 商品图片展示结束 -->

      <!-- 商品详情开始 -->
      <article class="price">
        <div class="parameter">
          <div>
            <span>{{list.group_jumei_price}}</span>
            <del>{{list.group_single_price}}</del>
            <span>已含税</span>
          </div>
          <strong>{{list.buyer_number_text}}</strong>
        </div>
        <div class="count_down">还剩23:28:27</div>
      </article>
      <div class="god_name">
        <div>{{dis}}</div>
      </div>
      <div class="freight">
        <span>运费</span>
        <span>单商家订单满0元包邮</span>
        <em>&gt;</em>
      </div>
      <div class="freight explain">
        <span>说明</span>
        <div>
          <p>
            <span>tu</span>
            <span>不支持退货</span>
          </p>
          <p>
            <span>tu</span>
            <span>支持分期</span>
          </p>
        </div>
        <em>&gt;</em>
      </div>

      <div class="shop_name">
        <div>
          <img
            src="http://mp6.jmstatic.com/pop_store/000/008/8229_std/5daebd883c35c_320_320.jpg?1572861593&imageView2/2/w/320/q/90"
            alt
          />
          <div class="dis">
            <div>
              <p>HW美妆海外专营店</p>
            </div>
            <div>搜罗全球好物</div>
          </div>
        </div>
        <div>
          <p>
            进入店铺
            <span>&gt;</span>
          </p>
        </div>
      </div>
      <div class="shop_next">
        <div>
          <p>全球爆款美妆大促</p>
          <p>部分产品95元两件</p>
        </div>
        <div>
          <img
            src="http://mp6.jmstatic.com/jmstore/image/000/008/8575_std/5dbbbb0bba005_640_420.jpg?1572601065&imageView2/2/w/480/q/90"
            alt
          />
        </div>
      </div>
      <div class="show_detial">
        <ul>
          <li>
            <a href>图文详情</a>
          </li>
          <li>
            <a href>商品参数</a>
          </li>
          <li>
            <a href>评价</a>
          </li>
        </ul>
      </div>
      <div class="bg_imgs">
        <ul>
          <li>
            <img src="http://p12.jmstatic.com/global/image/201910/22/1571712280.5575.jpg" alt />
          </li>
          <li>
            <img src="http://p12.jmstatic.com/global/image/201907/30/1564472283.5298.jpg" alt />
          </li>
          <li>
            <img src="http://p12.jmstatic.com/global/image/201907/30/1564472284.1477.jpg" alt />
          </li>
          <li>
            <img src="http://p12.jmstatic.com/global/image/201907/30/1564472284.7129.jpg" alt />
          </li>
          <li>
            <img src="http://p12.jmstatic.com/global/image/201907/30/1564472285.3602.jpg" alt />
          </li>
          <li>
            <img src="http://p12.jmstatic.com/global/image/201907/30/1564472285.9826.jpg" alt />
          </li>
          <li>
            <img src="http://p12.jmstatic.com/global/image/201907/30/1564472286.6517.jpg" alt />
          </li>
          <li>
            <img src="http://p12.jmstatic.com/global/image/201907/30/1564472287.5107.jpg" alt />
          </li>
          <li>
            <img src="http://p12.jmstatic.com/global/image/201907/30/1564472327.7896.jpg" alt />
          </li>
          <li>
            <img src="http://p12.jmstatic.com/global/image/201907/30/1564472341.4939.jpg" alt />
          </li>
          <li>
            <img src="http://p12.jmstatic.com/global/image/201907/30/1564472342.0898.jpg" alt />
          </li>
        </ul>
        <p title="跨境电商消费者告知书">
          <img src="http://f0.jmstatic.com/btstatic/h5/htpopH5.png" alt />
        </p>
        <!-- <p title="关于划现价的说明">
                    <img src="" alt="关于划现价的说明">
        </p>-->
        <div class="guss_you">
          <p>
            <em></em> 您也许还喜欢
            <em></em>
          </p>
        </div>
        <div class="guss_gods">
          <ul>
            <li>
              <div class="gods_items">
                <img
                  src="http://p0.jmstatic.com/product/004/984/4984000_std/4984000_350_350.jpg"
                  alt
                />
                <div>
                  <p>韩国直邮 VIDIVICI女神隔离霜</p>
                  <p>
                    <span>¥156</span>
                    <del>¥349</del>
                  </p>
                </div>
              </div>
              <div class="gods_items">
                <img
                  src="http://p2.jmstatic.com/product/005/059/5059822_std/5059822_pop_375_500_1.jpg"
                  alt
                />
                <div>
                  <p>韩版宽松时尚保暖工装加厚外套貉子毛连</p>
                  <p>
                    <span>¥749</span>
                    <del>¥1099</del>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="gods_items">
                <img
                  src="http://p3.jmstatic.com/product/004/909/4909348_std/4909348_pop_375_500_1.jpg"
                  alt
                />
                <div>
                  <p>【3件5折】花印水漾润透补水（免洗） VIDIVICI女神隔离霜</p>
                  <p>
                    <span>¥156</span>
                    <del>¥349</del>
                  </p>
                </div>
              </div>
              <div class="gods_items">
                <img
                  src="http://p0.jmstatic.com/product/004/912/4912700_std/4912700_pop_375_500_1.jpg"
                  alt
                />
                <div>
                  <p>【3件5折】日本•花印摩洛哥火山泥清</p>
                  <p>
                    <span>¥749</span>
                    <del>¥1099</del>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="gods_items">
                <img
                  src="http://p2.jmstatic.com/product/004/912/4912712_std/4912712_pop_375_500_1.jpg"
                  alt
                />
                <div>
                  <p>【3件5折】日本•花印男士香橙控油保</p>
                  <p>
                    <span>¥79.9</span>
                    <del>¥93</del>
                  </p>
                </div>
              </div>
              <div class="gods_items">
                <img
                  src="http://p4.jmstatic.com/product/004/985/4985404_std/4985404_pop_375_500_1.jpg"
                  alt
                />
                <div>
                  <p>【包邮11.11专柜秒发】日本芙丽芳</p>
                  <p>
                    <span>¥59.9</span>
                    <del>¥99</del>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 商品详情结束 -->

      <!-- 商品参数开始 -->
      <!-- <div class="goods_parameter">
                <p><span>商品名称</span><span>【前1小时第2件0元】花印水漾洁净洗面乳150g</span></p>
                <p><span>品牌</span><span>花印</span></p>
                <p><span>适用人群</span><span>男女皆宜，各种肤质适用</span></p>
                <p><span>产品规格</span><span>150g</span></p>
                <p><span>保质期限</span><span>5年，开盖后保质期为12个月（具体日期以收到的实物为准）</span></p>
                <p><span>原产国家</span><span>日本（具体产地以收到实物为准）</span></p>
                <p><span>赠品</span><span>起泡网*1</span></p>
                <p><span>注意事项</span><span>因个人肤质不同，如有不适请立即停止使用</span></p>
      </div>-->
      <!-- 商品参数开始 -->
    </div>
    <!-- 内容部分结束 -->

    <!-- 底部开始 -->
    <div class="footer">
      <ul>
        <router-link tag="a" :to="'/index'">
          <i class="iconfont icon-dianpu"></i> 店铺
        </router-link>
        <router-link tag="a" :to="'/cart'" @click="traninfo">
          <i class="iconfont icon-qicheqianlian-"></i> 购物车
        </router-link>
        <a @click="traninfo" class="text_1">加入购物车</a>
        <router-link tag="a" :to="''" class="text_2">立即购买</router-link>
      </ul>
    </div>
    <!-- 底部结束 -->
  </div>
</template>

<script>
import { goodsDetialApi } from "@api/group";
// import { goodsApi } from "@api/group";
export default {
  name: "Detail",
  props: ["id"],
  data() {
    return {
      list: '',
      img: '',
      dis: ''
    };
  },
  methods: {
    onClickBack() {
      this.$router.back();
    },

    traninfo() {
      //  this.$observer.$emit("tranList",this.list);
      
      var goods = {
        id: this.list.product_id,
        goodName: this.list.recommend_data[0].name,
        goodIntroduce: this.buyer_number_text,
        goodPrice: Number( this.list.group_jumei_price.replace("¥","")) ,
        goodNum: 1,
        goodimg: this.img,
        check:false
      };

        //console.log(goods);
      
        this.$store.dispatch("handlePush",goods);


      alert(this.list.product_id);
    }
  },

  async created() {
    //  console.log(this.id)
    let data = await goodsDetialApi(this.id);
     
    this.list = data.data;
      console.log(this.list);
      console.log(data);
    this.img = this.list.size[0].img;
    this.dis = this.list.share_info[1].text;

   
  }
};
</script>

<style>
.detail {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  position: relative;
}

.header {
  width: 100%;
  height: 0.5rem;
  background-color: #fff;
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  padding: 0 0.1rem;
  z-index: 111;
}
.header div {
  width: 100%;
  height: 100%;
  line-height: 0.5rem;
  text-align: center;
}
.header .iconfont {
  font-size: 0.15rem;
}
.content_box {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  overflow-y: auto;
  padding: 0.5rem 0;
}
.content_box .img_box {
  width: 100%;
  position: relative;
  display: flex;
}
.content_box .img_box div:nth-child(1) img {
  width: 0.6rem;
  position: absolute;
  left: 0;
  top: 0px;
}
.content_box .img_box div:nth-child(2) img {
  width: 100%;
}
.content_box .price {
  display: flex;
  flex-direction: column;
  padding: 0.1rem;
  width: 100%;
}
.content_box .price .parameter {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.3rem;
}
.content_box .price .parameter div {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
}
.content_box .price .parameter div del {
  margin: 0 0.1rem;
}
.content_box .price .parameter div span:nth-of-type(1) {
  font-size: 0.25rem;
  color: #f33873;
}
.content_box .price .parameter div span:nth-of-type(2) {
  font-size: 0.12rem;
}
.content_box .price .count_down {
  text-align: left;
}
.content_box .god_name {
  display: flex;
  padding: 0.1rem;
  width: 100%;
}
.content_box .freight {
  display: flex;
  justify-content: space-between;
  padding: 0.1rem;
  border-bottom: 1px solid #eee;
}
.content_box .explain div {
  display: flex;
  justify-content: space-between;
}
.content_box .shop_name {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 1.2rem;
  width: 100%;
  /* background-color: aqua; */
  padding: 0.1rem;
}
.content_box .shop_name div:nth-child(1) {
  display: flex;
  align-items: center;
}
.content_box .shop_name div:nth-child(1) img {
  height: 0.42rem;
  width: 0.42rem;
}
.content_box .shop_name .dis {
  height: 0.42rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.content_box .shop_name div:nth-of-type(2) {
  display: flex;
  justify-content: center;
}
.content_box .shop_name div:nth-of-type(2) p {
  /* padding: 0.1rem; */
  /* background: chartreuse; */
  border-radius: 0.24rem;
  width: 1.5rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  border: 1px solid #ddd;
}
.content_box .shop_next {
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 1.1rem;
  background-color: #ffffff;
  padding: 0 0 0 0.1rem;
}
.content_box .shop_next div:nth-of-type(1) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.content_box .shop_next div:nth-of-type(2) img {
  width: 1.6rem;
  height: 1.1rem;
  overflow: hidden;
}
.content_box .show_detial ul {
  height: 0.5rem;
  width: 100%;
  /* background-color: #F33873; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}
.content_box .show_detial ul li {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */
}
.content_box .show_detial ul li a {
  font-size: 0.12rem;
  border-bottom: 2px solid #f33873;
  padding: 0.18rem 0;
}
.content_box .bg_imgs {
  width: 100%;
}
.content_box .bg_imgs img {
  width: 100%;
}
.content_box .guss_you {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
}
.content_box .guss_you p {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.content_box .guss_you em {
  width: 0.5rem;
  height: 0;
  border-bottom: 1px solid gray;
}
.content_box .guss_gods {
  width: 100%;
  display: flex;
  overflow: hidden;
  padding: 0 0.1rem;
  background-color: #eee;
}
.content_box .guss_gods .gods_items div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: .5rem; */
  width: 1.45rem;
  background-color: #fff;
}
.content_box .guss_gods .gods_items div p:nth-of-type(2) > span {
  color: #ed145b;
  font-size: 0.16rem;
}
.content_box .guss_gods ul {
  width: 100%;
}
.content_box .guss_gods ul li {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.content_box .guss_gods ul li div {
  padding: 0.05rem 0;
}
.content_box .guss_gods ul li p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.content_box .guss_gods img {
  height: 1.5rem;
  width: 1.45rem;
}
/* 商品参数修饰开始 */
.content_box .goods_parameter {
  display: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 6.2rem;

  padding: 0 0.1rem;
}
.content_box .goods_parameter p {
  display: flex;
  justify-content: space-between;
  font-size: 0.12rem;
  margin-top: 0.1rem;
  /* background-color: aqua; */
  /* width: 100%; */
}
.content_box .goods_parameter span:nth-of-type(1) {
  width: 1rem;
  color: #999;
}
.content_box .goods_parameter span:nth-of-type(2) {
  width: 2.5rem;
  color: #333;
}

/* 商品参数修饰结束 */

.footer {
  width: 100%;
  height: 0.5rem;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #fff;
}
.footer ul {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer ul a {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer .iconfont {
  font-size: 0.2rem;
  color: salmon;
}
.footer ul .text_1 {
  color: #fe4070;
  font-weight: 500;
  background-color: #fff1f6;
  font-size: 0.1rem;
  font-weight: 700;
}
.footer ul .text_2 {
  color: #fff;
  background: #fe4070;
  font-weight: 500;
  font-size: 0.1rem;
  font-weight: 700;
}
</style>