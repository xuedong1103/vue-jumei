<template>
  <div class="minePage">
      <header>
        <img
          class="head_left"
          src="https://f2.jmstatic.com/static_account/dist/v1.0.164687/images/mobile_usercenter/back_white_bg.png"
        />
        <div class="title">我的聚美</div>
        <img class="head_right" src="http://m.jumei.com" />
      </header>
      <nav>
        <img
          src="https://f5.jmstatic.com/static_account/dist/v1.0.164687/images/mobile_usercenter/myjumei/noportrait.png"
        />
        <div class="todo">
          <span class="todo_register">注册</span>
          <span class="line">|</span>
          <span class="todo_login">登录</span>
        </div>
      </nav>
      <BeforeMine/>
   
  </div>
</template>

<script>
import BeforeMine from "@components/mine/before"
export default {
  name: "Mine",
  components:{
    BeforeMine
  }
};
</script>

<style>
.minePage {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  padding-bottom: 0.42rem;
  background: #f2f2f2;
  overflow-y: auto;
}

 .minePage header {
  width: 100%;
  height: 0.38rem;
  background: #fd465f;
  color: #fff;
  position: relative;
  display: flex;
  align-items: center;
}

.minePage header .head_left {
  position: absolute;
  left: 0;
  top: 0.03rem;
}

.minePage header .head_right {
  position: absolute;
  right: 0;
  top: 0;
}

.minePage header .title {
  width: 100%;
  height: 100%;
  font-size: 0.15rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.minePage nav {
  height: 1.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fd465f;
  padding-top: 0.1rem;
}

.minePage nav img {
  height: 0.54rem;
  width: 0.54rem;
}

.minePage nav .todo {
  width: 2rem;
  height: 0.4rem;
  display: flex;
  margin-top: 0.1rem;
  font-size: 0.18rem;
  color: #fff;
  font-weight: bold;
  line-height: 0.4rem;
}

.minePage nav .todo .todo_register {
  width: 0.95rem;
  height: 0.2rem;
  text-align: center;
}

.minePage nav .todo .line {
  font-weight: normal;
  width: 0.02rem;
  height: 0.2rem;
}

.minePage nav .todo .todo_login {
  width: 0.95rem;
  height: 0.2rem;
  text-align: center;
}
</style>