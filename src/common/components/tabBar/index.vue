<template>
  <div class="tabBar">
    <router-link 
    tag="div"
    v-for="item in tabBars"
    :key="item.id"
    :to="item.path"
    >
      <img :src="item.img"/>
      <span>{{item.title}}</span>
      <!-- <div>
        <img src="http://p12.jmstatic.com/mcms/89ea87200c623f4c7809f21f2ab4bce8.png" />
        <span>首页</span>
      </div>
      <div>
        <img src="http://p12.jmstatic.com/mcms/b51a66ca3ddb31ec0edbd67ea68f7589.png" />
        <span>拼团</span>
      </div>
      <div>
        <img src="http://p12.jmstatic.com/mcms/77b9454e8dd41a060510a445010ac934.png" />
        <span>购物车</span>
      </div>
      <div>
        <img src="http://p12.jmstatic.com/mcms/829aa091062366a9f7b93cfffaa0e681.png" />
        <span>我的</span>
      </div> -->
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      tabBars: [
        { 
          id:0,
          title:"首页",
          img:"http://p12.jmstatic.com/mcms/89ea87200c623f4c7809f21f2ab4bce8.png",
          path: "/index",
        },
        {
          id:1,
          title:"拼团",
          img:"http://p12.jmstatic.com/mcms/b51a66ca3ddb31ec0edbd67ea68f7589.png",
          path: "/group", //详情页测试
        },
        {
          id:2,
          title:"购物车",
          img:"http://p12.jmstatic.com/mcms/77b9454e8dd41a060510a445010ac934.png",
          path: "/cart",
        },
        {
          id:3,
          title:"我的",
          img:"http://p12.jmstatic.com/mcms/829aa091062366a9f7b93cfffaa0e681.png",
          path: "/mine",
        }
      ]
    };
  }
};
</script>

<style>
.tabBar {
  width: 100%;
  height: 0.42rem;
  background: #fff;
  border-top: 1px solid #e8e8e8;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
}
.tabBar div {
  width: 0.6rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tabBar div:nth-child(1) {
  margin-left: 0.14rem;
}
.tabBar div:nth-child(4) {
  margin-right: 0.14rem;
}
.tabBar div img {
  width: 0.18rem;
  height: 0.18rem;
}
.tabBar div span {
  font-size: 0.08rem;
  margin-top: 0.02rem;
  color: rgb(153, 153, 153);
}
</style>