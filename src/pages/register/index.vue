<template>
    <div class="register">
        <div class="top">
        <v-touch tag="a" class="icon_left"  href="javascript:void(0)"   @tap="handleBack()"><img
                src="http://a5.jmstatic.com/f8f6fcf77a736300/left_arrow.png" ></v-touch>
        <div>注册</div>
        <router-link  class="icon_right" href="javascript:void(0)" to="/login" tag="a">登录</router-link>
    </div>
    <section class="title">
        <span class="line"></span>
        <span class="title_item">使用手机注册</span>
    </section>
    <section class="content">
        <ul>
            <li><input class="phone" type="text" placeholder="请输入手机号"/></li>
            <li>
                <input class="code" type="text" placeholder="请输入短信验证码"/>
                <span class="sendCode">验证</span>
            </li>
            <li><input class="pwd" type="password" placeholder="6-16位的登录密码"/></li>
            <li><input type="submit" class="register_btn"></li>
            <li>点击注册，表示同意 <a href="javascript:void(0)" class="agreement">《聚美优品用户协议》</a></li>
        </ul>
    </section>
    </div>
</template>

<script>
export default {
    name:"register",
    methods:{
        handleBack(){
            this.$router.back()
        }
    }
}
</script>

<style>
        .register .top {
            height: 0.36rem;
            border-bottom: 1px solid #eaeaea;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            font-size: 0.14rem;
            color:#666;
        }

       .register .top a {
            width: 0.4rem;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

      .register  .top .icon_left img {
            width: 0.075rem;
            height: 0.15rem;
        }

       .register .top .icon_right{
           color:#666;
           font-size:0.12rem;
           text-decoration:none;
           margin-right:0.04rem;
        }

       .register .top div {
            flex: 1;
            text-align: center;
        }
       .register .title{
            width:100%;
            height:0.5rem;
           -background:red;
            display:flex;
            align-self:center;
            justify-content:center;
            align-items:center;
            position:relative;
        }
       .register .title .line{
            width:60%;
            height:1px;
            background:#e8e8e8;
        }
       .register .title .title_item{
            font-size:0.12rem;
            color:#999;
            position:absolute;
            background:#fff;
            padding:0 5px;
        }
       .register .content{
            height:auto;
            width:100%;
        }
       .register .content ul{
            width:100%;
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content:flex-start;
            align-items:center;
        }
       .register .content ul li{
            list-style:none;
            width:100%;
            height:0.3rem;
            display:flex;
            flex-direction:center;
            justify-content:center;
            align-items:center;
            color:#999;
            margin-bottom:0.2rem;
            font-size:0.12rem;
        }
       .register .content ul li .phone,.content ul li .pwd{
            width:2.6rem;
            box-sizing:border-box;
            padding:0 0.2rem;
            height:100%;
            border:1px solid #e8e8e8;
            outline:none;
            border-radius:0.2rem;
            background:#f5f5f5;
            font-size:0.12rem;
            color:#999;
        }
       .register .content ul li .code{
            width:1.6rem;
            box-sizing:border-box;
            padding:0 0.2rem;
            border:1px solid #e8e8e8;
            outline:none;
            height:100%;
            border-radius:0.2rem;
            background:#f5f5f5;
            font-size:0.12rem;
            color:#999;
        }
       .register .content ul li .sendCode{
            width:0.7rem;
            height:100%;
            border:1px solid #feb2c5;
            font-size:0.12rem;
            text-align:center;
            line-height:0.3rem;
            border-radius:0.2rem;
            margin-left:0.25rem;
            color:#feb2c5;
        }
       .register .content ul li .register_btn{
            width:2.6rem;
            border:1px solid #e8e8e8;
            border-radius:0.2rem;
            font-size:0.12rem;
            color:#fff;
            background:#feb2c5;
            text-align:center;
            line-height:0.3rem;
        }
       .register .content ul li .agreement{
            color:#888;
            text-decoration:none;
        }
</style>