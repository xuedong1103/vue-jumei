import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


const state={
    goodsList: [
        {
          id:1,
          goodName: "【国内专柜秒发】美国•雅诗兰黛 新多效智妍眼霜5ml",
          goodIntroduce: "5ml*1",
          goodPrice: 59.9,
          goodNum: 1,
          goodimg:"https://img.yzcdn.cn/vant/t-thirt.jpg",
          check:false
        },
       
      ],
     add:"coutuan_makeup"
}
const actions={
    handleactionAdd({commit},params){
        commit("handleMutationAdd",params);
    },
    handleActionCheck({commit},params){
        commit("handleMutationCheck",params);
    },
    handleActionReduce({commit},params){
      commit("handleMutationReduce",params)
    },
    handleActionAllCheck({commit},params){
      commit("handleMutationAllCheck",params);
    },
    handleactionNum({commit},params){
      commit("handleactionNum",params);
    },
    handlePush({commit},params){
      commit("handleMutationPush",params)
    },
    postparmas({commit},params){
      commit("getparmas",params)
    }
}
const mutations={
    handleMutationAdd(state,params){
        state.goodsList[params].goodNum++;
       
    },
    handleMutationCheck(state,params){
        state.goodsList[params].check=!state.goodsList[params].check;
    },
    handleMutationReduce(state,params){
      if(
        state.goodsList[params].goodNum<=1){
        state.goodsList[params].goodNum++;
      }
      state.goodsList[params].goodNum--;
      
    },
    handleMutationAllCheck(state,params){
        for(var i=0;i<state.goodsList.length;i++){
          if(state.goodsList[0].check==false){

          }
            state.goodsList[i].check=params;
        }
    },
    handleactionNum(state,params){
      state.goodsList[params].goodNum++;
    },
    handleMutationPush(state,params){
     var flag=0;
     let index='';
      for(var i=0;i<state.goodsList.length;i++){
        if(params.id==state.goodsList[i].id){
          flag=1;
          index=i
          break;
        }
      }
      if(flag==0){
        state.goodsList.push(params);
      }else{
          state.goodsList[index].goodNum+=params.goodNum;
      }
      //console.log(state.goodsList,'goodsList')
     
    },
    getparmas(state,params){
      state.add=params
      console.log(params)
    }
}

let getters={
  countPrice(){
    let sumPrice=0;
    let sumCount=0;
    for(var i=0;i<state.goodsList.length;i++){
      if(state.goodsList[i].check){
        sumCount +=Number(state.goodsList[i].goodNum)
        sumPrice +=Number(state.goodsList[i].goodPrice*100)*Number(state.goodsList[i].goodNum)
      }
     
    }
    return {
      sumPrice,
      sumCount
    }
  }
}
const store = new Vuex.Store({

    state,
    actions,
    mutations,
    getters
})

export default store;