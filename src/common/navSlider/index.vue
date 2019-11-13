<template>
  <div class="navSlider">
      <div>
      <router-link v-for="item in navs" :key="item.id" :to="item.path" tag="span">{{item.title}}</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: "NavSlider",
  data() {
      return{
           navs:[
          {     
              id:0,
              title:"首页",
            //   path:"/jumei/juemeiindex",
              path:"/index"
          },
          {
              id:1,
              title:"极速免税店",
              //path:"/jumei/infant"
               path:"/jumei"
          },
           {
              id:2,
              title:"母婴",
              //path:"/jumei/infant"
               //path:"jumei/infant"
               path:"/jumei/infant"
          },
           {
              id:3,
              title:"轻奢",
             // path:"/jumei/infant"
              path:"/jumei"
          },
           {
              id:4,
              title:"名品特卖",
             // path:"/jumei/infant"
              path:"/jumei"
          },
      ]
      }
     
  }
};
</script>
<style>
.navSlider {
  height: 0.36rem;
  -background: green;
}

.navSlider div {
  height: 0.36rem;
  line-height: 0.36rem;
  font-size: 0.12rem;
  white-space: nowrap;
  overflow-x: auto;
  border-bottom: 1px solid #e8e8e8;
}

.navSlider span {
  padding: 0 0.15rem;
  color: #666;
}
</style>