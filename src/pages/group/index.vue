<template>
  <div class="pintuan page">
    <!-- 头部开始 -->
    <!-- <div class="header"> -->
      <!-- <ul> -->
        <!-- nav 组件部分 -->
        <GroupnavSlider/>
      <!-- </ul> -->
    <!-- </div> -->
    <!-- 头部结束 -->

    <!-- 内容区开始 -->
    <div class="content">
      <ul @handlepost= click>
        <router-link
          tag="li"
          :to="'/detail/'+item.item_id"
         
          v-for="(item,index) in goodslist"
          :key="index"
        >
          <a href>
            <div class="goods">
              <img :src="item.image" alt />
            </div>
            <div class="people-number">
              <span>{{item.buyer_number_text}}</span>
            </div>
            <div class="goods-top">
              <span>{{item.group_name_tag}}</span>
              {{item.medium_name}}
            </div>
            <div class="goods-middle"></div>
            <div class="goods-foot">
              <div>
                <span>{{item.jumei_price}}</span>
                <span>{{item.single_price}}</span>
              </div>
              <span>去开团</span>
            </div>
          </a>
        </router-link>
      </ul>
      <div class="tip">已到当前页面最底部，看看其他页面吧~</div>
      <div>接受详情页的值{{info}}</div>
    </div>
    <!-- 内容区结束 -->
    <!-- 底部开始 -->
    <!-- <div class="footer">
      <ul>
        <a>
          <em class="iconfont icon-shouye"></em> 首页
        </a>
        <a>
          <em class="iconfont icon-pintuan"></em> 拼团
        </a>
        <a>
          <em class="iconfont icon-gouwuche"></em> 购物车
        </a>
        <a>
          <em class="iconfont icon-wode"></em> 我的
        </a>
      </ul>
    </div>-->
     <!-- +'/'+item.medium_name+'/'+item.buyer_number_text+'/'+item.group_name_tag+'/'+item.jumei_price+'/'+item.single_price  -->
    <!-- 底部结束 -->
  </div>
</template>

<script>
import GroupnavSlider from "@common/components/groupHeader";
import { goodsApi } from "@api/group";
export default {
  name: "Group",              
  props:["name"],
  components:{
    GroupnavSlider
  },
  data() {
    return {
      goodslist: [],
      info:'',
    };
  },
  mounted() {
    this.handleGetGoodsList();
         
  },
  methods: {
    async handleGetGoodsList() {
    
      let data = await goodsApi(this.$store.state.add);
      this.goodslist = data.data;

      //console.log(this.goodslist);

      console.log(this.goodslist);
      console.log(data);
      // (function handlepost(params){
      //   console.log(params)
      // }());
      
    },
    click:function (params){
      console.log(params);
      this.info = params

    }


  }
};

</script>

<style>
#app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  position: relative;
}

/*  <!-- 内容区结束 --> */

.content {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #eee;
  overflow: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.content ul li {
  width: 100%;
  background: #ffffff;
  position: relative;
  padding: 0.1rem 0;
  margin-bottom: 0.08rem;
}
.content ul li a .goods {
  display: flex;
  justify-content: center;
  width: 100%;
  /* background: #ffffff; */
  /* height: 1.6rem; */
}
.content ul li a .goods img {
  width: 1.6rem;
  height: 1.6rem;
}
.content ul li a .people-number {
  position: absolute;
  left: 0;
  top: 1.3rem;
  border: 1px solid #eee;
  font-size: 0.1rem;
  color: #666;
  border-top-right-radius: 1.5625rem;
  border-bottom-right-radius: 1.5625rem;
  padding: 0.05rem 0.1rem;
  background: rgba(251, 251, 251, 0.8);
}

.content ul li a .goods-foot {
  padding: 0 0.05rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.13rem;
}

.content ul li a .goods-top {
  padding: 0 0.05rem;
  justify-content: space-between;
  margin-top: 0.2rem;
  font-size: 0.14rem;
}

.content ul li a .goods-foot div {
  display: flex;
  flex-direction: column;
}
.content ul li a .goods-top span {
  color: #fe4070;
  font-size: 0.14rem;
}
.content ul li a .goods-foot div span:nth-of-type(1) {
  color: #fe4070;
  font-size: 0.18rem;
}
.content ul li a .goods-foot div span:nth-of-type(2) {
  font-size: 0.11rem;
}
.content ul li a .goods-foot > span {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0 0.25rem;
  background: #fe4070;
  color: #fff;
}
.content .tip {
  font-size: 0.14rem;
  width: 100%;
  color: #999;
}
/*  <!-- 内容区结束 --> */

.footer {
  width: 100%;
  height: 0.5rem;
  /* background-color: powderblue; */
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
  font-size: 0.1rem;
  color: rgb(153, 153, 153);
}

.footer .iconfont {
  font-size: 0.18rem;
}
a {
  color: #666;
  text-decoration: none;
}
</style>