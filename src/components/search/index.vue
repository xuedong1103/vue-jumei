<template>
    <div class="search">
            <router-link class="page_title" 
            tag="div" to="/search">  
                <img class="searchIcon" src="https://f0.jmstatic.com/btstatic/h5/common/search_btn.png" />
                <span>搜索商品 分类 功效</span>
            </router-link>
            <img class="searchImg" src="https://f0.jmstatic.com/btstatic/h5/index/search_list2.png"/>
        </div>
</template>

<script>
export default {
  name: "Search",
  data(){
    return {
     
    }
  },
  created(){
   
  },
  methods:{
    
  }
};
</script>

<style>
.index .search {
  height: 0.45rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.index .search .page_title {
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

.index .search .page_title .searchIcon {
  width: 0.14rem;
  height: 0.14rem;
  position: absolute;
  left: 0.72rem;
}

.index .search .searchImg {
  width: 0.21rem;
  height: 0.15rem;
  margin-right: 0.1rem;
}

.index .search .page_title span {
  font-size: 0.12rem;
  color: #999;
  margin-left: 1rem;
}
</style>