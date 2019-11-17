<template>
  <div class="header">
    <ul>
      <v-touch tag="li" v-for="(item) in navs" :key="item.id" :to="item.path" @tap="handleClick(item.address)">
        <a>{{item.title}}</a>
      </v-touch>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GroupnavSlider",
  data() {
    return {
      navs: [
        {
          id: 0,
          title: "推荐",
          address:"coutuan_makeup"
        //   path: "/group/:"
        },
        {
          id: 1,
          title: "美妆",
          address:"coutuan_home"

        //   path: "/xx"
        },
        {
          id: 2,
          title: "母婴健康",
          address:"coutuan_baby"

        //   path: "/xx"
        },
        {
          id: 3,
          title: "内衣",
          path: "/xx"
        },
        {
          id: 4,
          title: "家居",
          path: "/xx"
        },
        {
          id: 5,
          title: "饰品配饰",
          path: "/xx"
        },
        {
          id: 6,
          title: "数码家电",
          path: "/xx"
        },
        {
          id: 7,
          title: "女装",
          path: "/xx"
        },
        {
          id: 8,
          title: "礼品箱包",
          path: "/xx"
        },
        {
          id: 9,
          title: "鞋类",
          path: "/xx"
        },
        {
          id: 10,
          title: "运动户外",
          path: "/xx"
        },
        {
          id: 11,
          title: "下期预告",
          path: "/xx"
        }
      ]
    };
  },
  methods:{
    handleClick(address){
        this.$store.dispatch("postparmas",address);
        // console.log(address)
        this.$emit("handlepost",address);

    }
  }
};
</script>

<style>
.header {
  width: 100%;
  height: 0.5rem;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* font-size: .14rem; */
  left: 0;
  top: 0;
  position: absolute;
  z-index: 10;
  overflow: hidden;
}

.header ul {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}

.header ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 0.1rem;
}
.header ul li a {
  /* border-bottom: 2px solid #fe4070; */
  padding: 0.16rem 0;
  font-size: 0.15rem;
  font-weight: 500;
}

</style>