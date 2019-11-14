<template>
  <div id="app">
<<<<<<< HEAD
    <router-view></router-view>
    <!-- <TabBar v-if="$route.meta.flag" /> -->
    <TabBar />
=======
    <router-view>
    </router-view>
    <TabBar v-if="$route.meta.flag" />
    <!-- <TabBar /> -->
>>>>>>> xuedong
  </div>
</template>



<script>
import detail from "@components/detail";
import TabBar from "@common/components/tabBar";
export default {
  name: "App",
  components: {
    TabBar,
    detail

  }
};
</script>



<style>
<<<<<<< HEAD
=======
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}
>>>>>>> xuedong
* {
  margin: 0;
  padding: 0;
  font-family: Arial, helvetica, "\5FAE\8F6F\96C5\9ED1", Microsoft Yahei,sans-serif;
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

html {
  font-size: 31.25vw;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
