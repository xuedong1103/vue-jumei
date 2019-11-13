<template>
        <div class="goodList_container">
           
            <a>
                <div>
                    <img
                        src="http://mp6.jmstatic.com//jmstore/image/000/008/8621_std/5dbfebafd0052_2048_710.jpg?1572920482&imageView2/2/w/800/q/90">
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
    </div>
</template>

<script>
import {jumeiindexApi} from "@api/jumei"
export default {
    name:"GoodList",
    data(){
        return {
            GoodsList:[]
        }
    },
    created(){
        this.handleGetgoodList();
        
    },
    activated(){
        // this.movieList = JSON.parse(sessionStorage.getItem("movieList"))
    },
    methods:{
        async handleGetgoodList(){
             let data = await jumeiindexApi ();
             console.log(data);
        }
    }

}
</script>

<style>
.goodList_container {
  width: 100%;
  height: 1.3rem;
  background: hotpink;
}

.goodList_container div {
  width: 100%;
  height: 100%;
  position: relative;
}

.goodList_container div img {
  width: 100%;
  height: 100%;
}

.goodList_container .product_item .product_img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.goodList_container .product_item .product_content {
  width: 50%;
  margin: 0 0.1rem 0 1.4rem;
  display: flex;
  flex-direction: column;
  font-size: 0.12rem;
  color: #333;
}

.goodList_container .product_item .product_content .product_name {
  font-size: 0.12rem;
  margin: 0.12rem 0 0.05rem;
}

.goodList_container .product_item .product_content .product_price {
  margin-top: 0.3rem;
  line-height: 0.2rem;
  height: 0.2rem;
}

.goodList_container .product_item .product_content .product_price .newPrice {
  color: #fe4070;
}
.goodList_container .product_item .product_content .product_price .newPrice b {
  font-size: 0.16rem;
  color: #fe4070;
  font-weight: normal;
}

.goodList_container .product_item .product_content .product_price .oldPrice {
  text-decoration: line-through;
  color: #999;
  font-size: 0.12rem;
}

.goodList_container .product_item .product_content .product_comment {
  font-size: 0.1rem;
  line-height: 0.12rem;
  color: #999;
}
</style>