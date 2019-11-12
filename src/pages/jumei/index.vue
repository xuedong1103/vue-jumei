<template>
        <div class="index">
        <div class="search">
            <a class="page_title">
                <img class="searchIcon" src="https://f0.jmstatic.com/btstatic/h5/common/search_btn.png" />
                <span>搜索商品 分类 功效</span>
            </a>
            <img class="searchImg" src="https://f0.jmstatic.com/btstatic/h5/index/search_list2.png" />
        </div>
        <header>
            <div>
                <span>首页</span>
                <span>极速免税店</span>
                <span>母婴</span>
                <span>轻奢</span>
                <span>名品特卖</span>
                <span>名品特卖</span>
            </div>
        </header>
        <nav>
            <span>今日10点上新</span>
            <span>明日10店预告</span>
        </nav>
        <section>
            <a>
                <div>
                    <img
                        src="http://mp5.jmstatic.com//jmstore/image/000/007/7814_std/5dbbe087a5266_2048_710.jpg?1573007003&imageView2/2/w/800/q/90">
                </div>
            </a>
            <a>
                <div>
                    <img
                        src="http://mp6.jmstatic.com//jmstore/image/000/008/8126_std/5dc0103812595_2048_710.jpg?1572921358&imageView2/2/w/800/q/90">
                </div>
            </a>
            <a>
                <div>
                    <img
                        src="http://mp5.jmstatic.com//jmstore/image/000/008/8475_std/5db98a80c28bf_2048_710.jpg?1572963490&imageView2/2/w/800/q/90">
                </div>
            </a>
            <a>
                <div>
                    <img
                        src="http://mp6.jmstatic.com//jmstore/image/000/008/8621_std/5dbfebafd0052_2048_710.jpg?1572920482&imageView2/2/w/800/q/90">
                </div>
            </a>
            <a>
                <div class="product_item">
                    <div class="product_img"><img
                            src="http://mp6.jmstatic.com/product/004/879/4879050_std/4879050_dx_1154_400.jpg?_t=1566975100&imageView2/2/w/800/q/90">
                    </div>
                    <div class="product_content">
                        <div class="product_name">
                            LANEIGE兰芝新款 防晒隔离 修饰肤色 紫色 30ml/支
                        </div>
                        <div class="product_price">
                            <span class="newPrice">￥<b>299</b></span>
                            <span class="oldPrice">￥399</span>
                        </div>
                        <div class="product_comment"><span>48</span>条评论</div>
                    </div>
                </div>
            </a>
            <a>
                <div class="product_item">
                    <div class="product_img"><img
                            src="http://mp6.jmstatic.com/product/004/977/4977982_std/4977982_dx_1154_400.jpg?_t=1568106152&imageView2/2/w/800/q/90">
                    </div>
                    <div class="product_content">
                        <div class="product_name">
                            LANEIGE兰芝新款 防晒隔离 修饰肤色 紫色 30ml/支
                        </div>
                        <div class="product_price">
                            <span class="newPrice">￥<b>299</b></span>
                            <span class="oldPrice">￥399</span>
                        </div>
                        <div class="product_comment"><span>48</span>条评论</div>
                    </div>
                </div>
            </a>
        </section>
    </div>
</template>

<script>
export default {
    name:"Gumei",
    
}
</script>

<style>
      .index {
            overflow-y: auto;
            width:100%;
            
            position:absolute;
            left:0;
            top:0;
            right:0;
            bottom:0;
            padding-bottom:0.42rem;
        }
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
            background: #F5F5F5;
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
            margin-right: 0.1rem
        }

       .index .search .page_title span {
            font-size: 0.12rem;
            color: #999;
            margin-left: 1rem;
        }

       .index header {
            height: 0.36rem;
            -background: green;
        }

        .index header div {
            height: 0.36rem;
            line-height: 0.36rem;
            font-size: 0.12rem;
            white-space: nowrap;
            overflow-x: auto;
            border-bottom: 1px solid #e8e8e8;
        }

        .index header span {
            padding: 0 0.15rem;
            color: #666;
        }

        .index nav {
            width: 100%;
            height: 0.4rem;
            font-size: 0.12rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .index nav span {
            width: 50%;
            height: 0.4rem;
            text-align: center;
            line-height: 0.4rem;
            color: #666;
        }

        main section {
            width: 100%;
            height: 1.3rem;
            background: hotpink;
        }

        .index section div {
            width: 100%;
            height: 100%;
            position: relative;
        }

        .index section div img {
            width: 100%;
            height: 100%;
        }

        .index section .product_item .product_img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }

        .index section .product_item .product_content {
            width: 50%;
            margin: 0 0.1rem 0 1.4rem;
            display: flex;
            flex-direction: column;
            font-size: 0.12rem;
            color: #333;
        }

        .index section .product_item .product_content .product_name {
            font-size: 0.12rem;
            margin: 0.12rem 0 0.05rem;
        }

        .index section .product_item .product_content .product_price {
            margin-top: 0.3rem;
            line-height: 0.2rem;
            height: 0.2rem;

        }

        .index section .product_item .product_content .product_price .newPrice {
            color: #fe4070;
        }

        .index section .product_item .product_content .product_price .newPrice b {
            font-size: 0.16rem;
            color: #fe4070;
            font-weight: normal;
        }

        .index section .product_item .product_content .product_price .oldPrice {
            text-decoration: line-through;
            color: #999;
            font-size: 0.12rem;
        }

        .index section .product_item .product_content .product_comment {
            font-size: 0.1rem;
            line-height: 0.12rem;
            color: #999;
        }
</style>