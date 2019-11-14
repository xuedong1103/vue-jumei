<template>
  <div>
    <van-nav-bar title="我的购物车" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="container">
      <div class="shop" :class="flag==true?'active':'deactive'">
        <van-button type="primary" @click="checkAll()" class="btn">全选</van-button>
      </div>
      <div class="goods">
        <van-checkbox-group v-model="result" ref="checkboxGroup">
          <div class="goodList" v-for="(item,index) in this.$store.state.goodsList" :key="index">
            <div class="check">
              <van-checkbox :name="index">
                <input type="checkbox" class="inputBox" @change="handleCheckChange(index)" />
              </van-checkbox>
            </div>
            <div class="goodList_Right">
              <van-card
                :num="item.goodNum"
                :price="item.goodPrice"
                :desc="item.goodIntroduce"
                :title="item.goodName"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
              >
                <div slot="tags">
                  <van-tag plain type="danger">正品</van-tag>
                  <van-tag plain type="danger">包邮</van-tag>
                </div>
                <div slot="footer">
                  <van-button size="mini" @click="handleAddGood(index)">+</van-button>
                  <van-button size="mini" @click="handleReduceGood(index)">-</van-button>
                </div>
              </van-card>
            </div>
          </div>
        </van-checkbox-group>
      </div>
    </div>
    <div class="bottom">
      <van-submit-bar :price="countPrice.sumPrice" button-text="提交订单" @submit="onSubmit()">
        <van-button
          type="primary"
          @click="checkAll()"
          class="btn"
          :class="flag==true?'active':'deactive'"
        >全选</van-button>
        <span slot="tip">
          你的收货地址不支持同城送,
          <span>修改地址</span>
        </span>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { Dialog } from "vant";
export default {
  name: "Cart",
  data() {
    return {
      result: [],
      flag: false
    };
  },
  computed: {
    ...mapGetters({
      countPrice: "countPrice"
    })
  },
  methods: {
    onClickLeft() {
      //Toast('返回');
      this.$router.back();
    },
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(!this.flag);
      this.flag = !this.flag;
      this.$store.dispatch("handleActionAllCheck",this.flag);
    },
    onSubmit() {
      Dialog.confirm({
        title: "提示",
        message: "还未登录是否登录"
      })
        .then(() => {
            console.log("注册");
        })
        .catch(() => {
          console.log("取消");
        });
    },
    handleAddGood(index) {
      this.$store.dispatch("handleactionAdd", index);
    },
    handleCheckChange(index) {
      this.$store.dispatch("handleActionCheck", index);
    },
    handleReduceGood(index) {
      this.$store.dispatch("handleActionReduce", index);
    },
   
  }
};
</script>

<style>
.container {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin-top: 0.4rem;
  margin-bottom: 0.7rem;
  overflow-y: auto;
}

.van-card__content {
  text-align: left;
}
.active span {
  color: crimson;
}
.deactive span {
  color: #666;
}
.goodList {
  width: 100%;
  height: auto;
  display: flex;
  font-size: 0.12rem;
}
.check {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.goodList_Right {
  width: 100%;
  height: auto;
}
.goods {
  width: 100%;
  height: auto;
}
.shop {
  width: 100%;
  height: 0.3rem;
  display: flex;
}
.inputBox {
  position: absolute;
  left: 32%;
  top: 42%;
  width: 0.18rem;
  height: 0.18rem;

  border: none;
  opacity: 0;
}
.btn {
  width: 0.6rem;
  height: 100%;
  background: #fff;
  color: #666;
  border: none;
  text-align: left;
}
.bottom {
  width: 100%;
  height: auto;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>