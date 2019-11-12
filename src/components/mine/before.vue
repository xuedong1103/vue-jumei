<template>
    <div>
        <section class="asset">
            <div class="asset_item">
                <img class="asset_img"
                    src="https://f3.jmstatic.com/static_account/dist/v1.0.164687/images/mobile_usercenter/myjumei/myfund.png">
                <span class="asset_title">我的资产</span>
            </div>
            <div class="asset_nav">
                <span>现金券</span>
                <span>红包</span>
                <span>聚美余额</span>
                <span>礼品卡</span>
            </div>
        </section>
        <section class="nav_list">
            <div class="nav_listItem">
                <img class="nav_listItem_left"
                    src="https://f2.jmstatic.com/static_account/dist/v1.0.164687/images/mobile_usercenter/myjumei/rmaservice.png" />
                <span class="nav_listItem_title">售后服务</span>
            </div>
            <div class="nav_listItem">
                <img class="nav_listItem_left"
                    src="https://f2.jmstatic.com/static_account/dist/v1.0.164687/images/mobile_usercenter/myjumei/feedback.png" />
                <span class="nav_listItem_title">意见反馈</span>
            </div>
            <div class="nav_listItem">
                <img class="nav_listItem_left"
                    src="https://f2.jmstatic.com/static_account/dist/v1.0.164687/images/mobile_usercenter/myjumei/address.png" />
                <span class="nav_listItem_title">收货地址</span>
            </div>
            <div class="nav_listItem">
                <img class="nav_listItem_left"
                    src="https://f2.jmstatic.com/static_account/dist/v1.0.164687/images/mobile_usercenter/myjumei/logout.png" />
                <span class="nav_listItem_title">退出登录</span>
            </div>
            <div class="nav_listItem">
                <img class="nav_listItem_left"
                    src="https://f2.jmstatic.com/static_account/dist/v1.0.164687/images/mobile_usercenter/myjumei/tel.png" />
                <span class="nav_listItem_title">400-123-8888</span>
            </div>
            <div class="tips">
                客服热线400-123-8888 (8:00-22:00)<br/>
                拨打前请记录您的UID  0    
            </div>
        </section>

    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    * {
            padding: 0;
            margin: 0;
            font-family: Arial, helvetica, "\5FAE\8F6F\96C5\9ED1", Microsoft Yahei, sans-serif;
        }

        html,
        body {
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        html {
            font-size: 31.25vw;
        }
        .myorder {
            width: 100%;
            height: 0.3rem;
            margin-top: 0.1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.12rem;
            border-bottom: 1px solid #eaeaea;
            background: #fff;
        }

        .myorder .myorder_img {
            width: 0.2rem;
            height: 0.2rem;
            margin-left: 0.08rem;
        }

        .myorder .myorder_title,
        .asset .asset_title {
            margin-left: 0.06rem;
        }

        .myorder .myorder_item {
            display: flex;
            align-items: center;
        }

        .myorder .myorder_item .order {
            height: 100%;
            color: #999;
            font-size: 0.11rem;
        }

        .myorder .myorder_item .myorder_title {
            height: 100%;
            color: #333;
            font-size: 0.12rem;
        }

        .order_dir {
            width: 0.2rem;
            height: 0.2rem;
            margin-right: 0.05rem;
        }

        .myorderManage {
            height: 0.7rem;
            background: #fff;
            display: flex;
            align-items: center;
        }

        .myorderManage div {
            width: 0.8rem;
            height: 90%;
            font-size: 0.11rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .myorderManage div img {
            width: 0.24rem;
            height: 0.24rem;
        }

        .myorderManage div span {
            margin-top: 0.04rem;
        }

        .asset {
            width: 100%;
            height: 0.3rem;
            margin-top: 0.1rem;
            height: 0.7rem;
            font-size: 0.12rem;

            background: #fff;
            display: flex;
            flex-direction: column;
        }

        .asset .asset_item {
            height: 0.3rem;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #eaeaea;
        }

        .asset .asset_img {
            width: 0.2rem;
            height: 0.2rem;
            margin-left: 0.08rem;
        }

        .asset .asset_nav {
            width: 100%;
            height: 0.4rem;
            font-size: 0.11rem;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            color: #666;
        }

        .nav_list {
            margin-top: 0.1rem;
            height: 1.5rem;
            background: pink;
        }

        .nav_listItem {
            height: 0.35rem;
            border-right: 0.06rem solid #fff;
            background: #fff url('https://f2.jmstatic.com/static_account/dist/v1.0.164687/images/mobile_usercenter/advance_bg.png') no-repeat right center;
            background-size: 0.2rem 0.2rem;
            border-bottom: 1px solid #eaeaea;
            font-size: 0.11rem;
            display: flex;
            flex-direction: row;
            align-items: center;

        }

        .nav_list .nav_listItem .nav_listItem_left {
            width: 0.2rem;
            height: 0.2rem;
            margin-left: 0.08rem;
        }

        .nav_list .nav_listItem .nav_listItem_title {
            color: #333;
            font-size: 0.13rem;
            margin-left: 0.08rem;
        }
        
        .nav_list .tips{
            height: 0.4rem;
            font-size: 0.11rem;
            color:#999;
            margin:0.15rem;
            line-height:0.15rem;
        }
</style>