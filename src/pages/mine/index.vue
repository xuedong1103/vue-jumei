<template>
  <div class="minePage">
      <div class="noLogin">
        <img
          class="head_left"
          src="https://f2.jmstatic.com/static_account/dist/v1.0.164687/images/mobile_usercenter/back_white_bg.png"
        />
        <div class="title">我的聚美</div>
        <img class="head_right" src="http://m.jumei.com" />
      </div>
      <div class="noLoginNav">
        <img
          src="https://f5.jmstatic.com/static_account/dist/v1.0.164687/images/mobile_usercenter/myjumei/noportrait.png"
        />
        <div class="todo">
          <span class="todo_register">注册</span>
          <span class="line">|</span>
          <router-link class="todo_login" to="/login"  tag="span"> 登录</router-link>
        </div>
      </div>
       <!-- <div class="loginMine">
            <img class="head_left"
                src="https://f2.jmstatic.com/static_account/dist/v1.0.164687/images/mobile_usercenter/back_white_bg.png" />
            <div class="title">我的聚美</div>
            <img class="head_right" src="http://m.jumei.com" />
        </div>
        <div class="loginNav">
            <div class="perinfo">
                <p class="perinfo_name">JM1jmXyQuBcB0</p>
                <span class="perVip">普通会员</span>
            </div>
            <div class="per_nav">
                <a href="javascript:void(0)">
                    <img src="https://f2.jmstatic.com/static_account/dist/v1.0.164687/images/mobile_usercenter/myjumei/wishlist.png">
                    <span>心愿单</span>
                </a>
                <a href="javascript:void(0)">
                    <img src="https://f2.jmstatic.com/static_account/dist/v1.0.164687/images/mobile_usercenter/myjumei/wishlist.png">
                    <span>心愿单</span>
                </a>
                <a href="javascript:void(0)">
                    <img src="https://f2.jmstatic.com/static_account/dist/v1.0.164687/images/mobile_usercenter/myjumei/wishlist.png">
                    <span>心愿单</span>
                </a>
                <img class="pic" src="http://p0.jmstatic.com/jmstore/user/icon/cat_200_200.png?1573393879">
            </div>

        </div> -->
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


        .loginMine {
            width: 100%;
            height: 0.38rem;
            background: #fd465f;
            color: #fff;
            position: relative;
            display: flex;
            align-items: center;
        }

        .loginMine .head_left {
            position: absolute;
            left: 0;
            top: 0.03rem;
        }

        .loginMine .head_right {
            position: absolute;
            right: 0;
            top: 0;
        }

        .loginMine .title {
            width: 100%;
            height: 100%;
            font-size: 0.15rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .loginNav {
            height: 1rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #fd465f;
            padding-top: 0.1rem;
        
        }

   
        .loginNav .perinfo{
            width:1.14rem;
            height:0.38rem;
            font-size:0.14rem;
            color:#fff;
            margin-top:0.07rem;
            margin-bottom:0.05rem;
            margin-left:0.2rem;
        }
        .loginNav .perinfo .perVip{
            padding:0.03rem 0.08rem;
            border:1px solid #e8e8e8;
            border-radius:0.1rem;
            margin-top:0.04rem;
            font-size:0.1rem;
        }
        .loginNav  .per_nav{
            width:100%;
            height:0.5rem;
            background:#fff;
            display:flex;
            justify-content:flex-end;
            position:relative;
        }
        .loginNav  .per_nav a{
            width:0.76rem;
            height:0.5rem;
            font-size:0.12rem;
            color:#666;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            align-items:center;
            text-decoration:none;
            box-sizing:border-box;
            padding:0.05rem 0;
        }
        .loginNav  .per_nav a img{
            width:0.17rem;
            height:0.17rem;
            
        }
      
       .loginNav  .per_nav  .pic {
            width:0.64rem;
            height:0.64rem;
            position:absolute;
            left:0.3rem;
            top:-0.35rem;
            border-radius:50%;
        }














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

 .minePage .noLogin {
  width: 100%;
  height: 0.38rem;
  background: #fd465f;
  color: #fff;
  position: relative;
  display: flex;
  align-items: center;
}

.minePage .noLogin .head_left {
  position: absolute;
  left: 0;
  top: 0.03rem;
}

.minePage .noLogin .head_right {
  position: absolute;
  right: 0;
  top: 0;
}

.minePage .noLogin .title {
  width: 100%;
  height: 100%;
  font-size: 0.15rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.minePage .noLoginNav {
  height: 1.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fd465f;
  padding-top: 0.1rem;
}

.minePage .noLoginNav img {
  height: 0.54rem;
  width: 0.54rem;
}

.minePage .noLoginNav .todo {
  width: 2rem;
  height: 0.4rem;
  display: flex;
  margin-top: 0.1rem;
  font-size: 0.18rem;
  color: #fff;
  font-weight: bold;
  line-height: 0.4rem;
}

.minePage .noLoginNav .todo .todo_register {
  width: 0.95rem;
  height: 0.2rem;
  text-align: center;
}

.minePage .noLoginNav .todo .line {
  font-weight: normal;
  width: 0.02rem;
  height: 0.2rem;
}

.minePage .noLoginNav .todo .todo_login {
  width: 0.95rem;
  height: 0.2rem;
  text-align: center;
}
</style>