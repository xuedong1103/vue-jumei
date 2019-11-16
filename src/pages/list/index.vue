<template>
    <div class="listContainer">
        <div class="top">
        <v-touch class="icon_left"  @tap="handlesearchpage()" tag="a"><img
                src="http://a5.jmstatic.com/f8f6fcf77a736300/left_arrow.png"></v-touch>
        <div></div>
        <v-touch tag="a" @tap="handleIndex()" class="icon_right" href="javascript:void(0)"><img src="http://a5.jmstatic.com/cf4cd6f2fe742a74/home.png"></v-touch>
    </div>
    <div class="select">
        <ul>
            <!-- <li class="listClass">
                <span>全部</span>
                <i class="icon"></i>
            </li>
            <li class="listClass">
                <span>全部</span>
                <i class="icon"></i>
            </li>
            <li class="listClass">
                <span>全部</span>
                <i class="icon"></i>
            </li>
            <li class="listClass">
                <span>全部</span>
                <i class="icon"></i>
            </li> -->
            <van-dropdown-menu class="search_menu">
                <li @click="handleChange($event,'brand_id')"><van-dropdown-item v-model="brand_id" :options="optionBrand" /></li>
                <li @click="handleChange($event,'function_id')"><van-dropdown-item v-model="function_id" :options="optionClassify" /></li>
                <li @click="handleChange($event,'action')"><van-dropdown-item v-model="action" :options="optionAction" /></li>
                <li  @click="handleChange($event,'price')"><van-dropdown-item v-model="price" :options="optionPrice"/></li>
            </van-dropdown-menu>
        </ul>
    </div>
    <section class="search_navs">
        <!-- <ul style="display:none" class="clearFix">
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
        </ul>
        <ul style="display:none" class="clearFix">
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
        </ul>
        <ul style="display:none" class="clearFix">
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
        </ul>
        <ul style="display:none" class="clearFix">
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
            <li>全部</li>
        </ul> -->

        



    </section>
    <section class="goodList" v-for="(itemAll,index) in searchList" :key="index">
        <a v-for="(item,indexList) in searchList[index]" :key="indexList">
            <div class="product_item" >
                <div class="product_img"><img
                        :src='item.image_url_set.dx_image["320"]'>
                </div>
                <div class="product_content" :data_id="item.product_id">
                    <div class="product_name">  
                        {{item.name}}
                    </div>
                    <div class="product_price">
                        <span class="newPrice">￥<b>{{item.jumei_price}}</b></span>
                        <span class="oldPrice">￥{{item.market_price}}</span>
                    </div>
                    <!-- <div class="product_comment"><span>48</span>条评论</div> -->
                </div>
            </div>
        </a>
       
        
        
    </section>
    <div class="load">
        <span @click="handleLoadMore()">加载更多</span>
    </div>
    </div>
</template>

<script>
import {listApi} from "@api/list";
import {BrandApi,classifyApi} from "@api/classify"

export default {
    data(){
        return {
            searchList:[],
            page:this.$route.params.category_id,
            brand_id: 0,
            function_id: 0,
            action: 0,
            price: 0,
            optionBrand: [
                { text: '品牌', value: 0 },
                { text: '完美日记', value: 22422 },
                { text: '御泥坊', value: 22940 },
                { text: '良品铺子', value: 17112 },
                { text: "欧诗漫", value:22926 },
                { text: '百草味', value: 16582 },
                { text: '阿芙', value: 22558 },
                { text: '梵西', value: 23120 },
                { text: '欧黛蓝', value: 12919 },
                { text: '花印', value: 23226 },
                { text: '微希', value: 22492 },
                { text: 'JAYJUN', value: 23080 },
                { text: '美康粉黛', value: 22548 },
                { text: 'JMsolution', value: 15142 },
                { text: '玛汀露丝', value: 23092 },
                { text: '茜樱思', value: 20712 },
            ],
            optionClassify: [
                { text: '分类', value: 0 },
                { text: '面膜', value: 14 },
                { text: '食品', value: 440 },
                { text: '洁面', value: 19 },
                { text: "化妆品爽肤水", value: 10 },
                { text: '唇部', value: 388 },
                { text: '护肤套装', value: 23 },
                { text: '底妆', value: 38 },
                { text: '眼部护理', value: 62 },
                { text: '卸妆', value: 18 },
                { text: '精华', value: 17 },
                { text: '粉底散粉', value: 383 },
                { text: '防晒', value: 33 },
                { text: '面霜', value: 16 },
                { text: '妈妈美容', value: 1674 },
            ],
            optionAction: [
                { text: '功效', value: 0 },
                { text: '保湿', value: 7 },
                { text: '滋润', value: 13 },
                { text: '补水', value: 11 },
                { text: "清洁", value: 5 },
                { text: '修护', value: 19 },
                { text: '紧致', value: 1 },
                { text: '持久', value: 3 },
                { text: '舒缓', value: 26 },
                { text: '温和', value: 60 },
                { text: '香氛', value: 70 },
                { text: '修护肌肤', value: 8 },
                { text: '均匀肤色', value: 2 },
                { text: '控油', value: 17 },
                { text: '遮瑕', value: 16 },
                
            ],
            optionPrice: [
                { text: '价格', value: 0 },
                { text: '1-49', value: 1 },
                { text: '50-99', value: 2 },
                { text: '300-399', value: 3 },
                { text: '400-499', value: 4},
                { text: '500-599', value: 5 },
                { text: '600-799', value: 6 },
                { text: '800以上', value: 7 },
            ],
             brand_id:'undefined',
             brand_name:"全部",
             category_i:'undefined',
             category_name:"全部",
        }
        
    },
   // props:["category_id","page"],
   
    async created(){
        let category_id=this.$route.params.category_id;
        let page=this.$route.params.page;
        let data =  await listApi(category_id,page);
        this.searchList.push(data.data.item_list);
        console.log(122)
    },
    

    methods:{
        async handleLoadMore(){
            let category_id=this.$route.params.category_id;
            //this.$router.push("/search/list/index?category_id="+category_id+"&page="+(Number(page)+1)+"&ajax=get");
            let data= await listApi(category_id,Number(this.page)+1);
            this.searchList.push(data.data.item_list);
            //console.log(data,'more');
        },
        handlesearchpage(){
            this.$router.push("/search")
        },
        handleIndex(){
            this.$router.push("/index");
        },
        handleChange(e,params){
            
            if(e.target.tagName=="SPAN"){
                this.handleSearch(eval(e.target).innerText,params)
                //console.log(eval(e.target).innerText);
            }else if(e.target.tagName=='DIV'){
                this.handleSearch(eval(e.target.children[0]).innerText,params)
            }
            
        },
        async handleselect(){ 
            let brand_id=this.$route.params.brand_id;
            let brand_name=this.$route.params.brand_name;
            let category_id=this.$route.params.category_id;
            let category_name=this.$route.params.category_name;
            let page=this.$route.params.page;
            //console.log(this.$route);
            let data = await BrandApi(brand_id,brand_name,page,category_id,category_name); 
            this.searchList=[];
            this.searchList.push(data.data.item_list);
            
        },
        // async handleSelectClassify(){
        //     let category_name=this.$route.params.category_name;
        //     let category_id=this.$route.params.category_id;
        //     let page=this.$route.params.page;
        //     console.log(this.$route.params);
        //     let data = await classifyApi(category_id,category_name,page); 
        //     console.log(data,'classify');
        //     this.searchList=[];
        //     this.searchList.push(data.data.item_list);
        // }
        // ,
        handleSearch(Name,params){
            // console.log(Name,params)
            
            if(params=='brand_id'){
                
                for(var i=0;i<this.optionBrand.length;i++){
                    if(this.optionBrand[i].text==Name){
                         this.brand_id=this.optionBrand[i].value;
                         this.brand_name=this.optionBrand[i].text;
                         //console.log(this.brand_id,this.brand_name);
                        break;
                    }
                }
            }else if(params=='function_id'){
               for(var i=0;i<this.optionClassify.length;i++){
                    if(this.optionClassify[i].text==Name){
                         this.category_id=this.optionClassify[i].value;
                         this.category_name=this.optionClassify[i].text;
                         //console.log(this.category_id,this.category_name);
                        
                        break;
                    }
                }
            }
            this.$router.push('/search/list/'+this.brand_id+'/'+ this.brand_name+'/2'+'/'+this.category_id+'/'+ this.category_name)
            this.handleselect();
            //console.log(this.$route)

        }
    },

}
</script>

<style>
    .listContainer{
        width:100%;
        height:100%;
        overflow-y:auto;
    }
    .listContainer .top {
            height: 0.36rem;
            border-bottom: 1px solid #eaeaea;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            font-size: 0.14rem;
        }

       .listContainer .top a {
            width: 0.4rem;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

       .listContainer .top .icon_left img {
            width: 0.075rem;
            height: 0.15rem;
        }

       .listContainer .top .icon_right img {
            width: 0.2rem;
            height: 0.2rem;
        }

       .listContainer .top div {
            flex: 1;
            text-align: center;
        }

       .listContainer .select {
            height: 0.36rem;
            border-bottom: 1px solid #e8e8e8;
        }
        .listContainer .select .search_menu{
            width:100%;
            font-size:#666;
            font-size:0.12rem;
        }
       .listContainer .select ul {
            width: 100%;
            height: 100%;
            display: flex;
        }

       .listContainer .select ul .listClass {
            list-style: none;
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.12rem;
            position: relative;
            color: #666;
        }

       .listContainer .select ul .listClass .icon {
            position: absolute;
            background: url(http://a1.jmstatic.com/40cd333ce24c8fc0/arrow_up2.png) no-repeat;
            width: 0.06rem;
            height: 0.03rem;
            background-size: 100%;
            right: 0.1rem;
        }

       .listContainer .search_navs {
            width: 100%;
            height: auto;
            background: #fff;
        }

       .listContainer .search_navs ul {
            width: 100%;
            height: auto;
            /* display: flex;
            flex-wrap: wrap;
            align-items: flex-start; */
        }

       .listContainer .search_navs ul li {
            float: left;
            list-style: none;
            box-sizing: border-box;
            width: 33.3%;
            height: 0.36rem;
            border-right: solid 1px #eee;
            border-bottom: solid 1px #eee;
            font-size: 0.11rem;
            text-align: center;
            line-height: 0.36rem;
            color: #666;

        }
        
        .listContainer .goodList {
            width: 100%;
            height: auto;
            /* display:flex;
            flex-direction:column; */
        }
        .listContainer .goodList .product_item {
            width: 100%;
            height: 100%;
            display:flex;
            justify-content:space-between;
            border-bottom:1px solid #e8e8e8;
        }
       .listContainer .goodList .product_item .product_img {
            width: 1rem;
            height: 0.8rem;
            margin-left:0.1rem;
           
       }
       .listContainer .goodList .product_item .product_img img{
            width: 100%;
            height: 100%;
        }
       .listContainer .goodList .product_item .product_content {
            width: 80%;
            margin: 0 0.1rem 0 0.1rem;
            display: flex;
            flex-direction: column;
            font-size: 0.12rem;
            color: #333;
        }

       .listContainer .goodList .product_item .product_content .product_name {
            font-size: 0.12rem;
            margin: 0.12rem 0 0.05rem;
        }

        .listContainer .goodList .product_item .product_content .product_price {
            margin-top: 0.24rem;
            line-height: 0.2rem;
            height: 0.2rem;

        }

       .listContainer .goodList .product_item .product_content .product_price .newPrice {
            color: #fe4070;
        }

       .listContainer .goodList .product_item .product_content .product_price .newPrice b {
            font-size: 0.14rem;
            color: #fe4070;
            font-weight: normal;
        }

      .listContainer  .goodList .product_item .product_content .product_price .oldPrice {
            text-decoration: line-through;
            color: #999;
            font-size: 0.12rem;
        }

       .listContainer .goodList .product_item .product_content .product_comment {
            font-size: 0.1rem;
            line-height: 0.12rem;
            color: #999;
        }
        .load{
            font-size:0.12rem;
            height:0.5rem;
            line-height:0.5rem;
        }
</style>