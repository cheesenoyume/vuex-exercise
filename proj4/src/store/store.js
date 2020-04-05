import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state:{
        arr:[
            {name:"m1",price:100},
            {name:"m2",price:200},
            {name:"m3",price:300},
            {name:"m4",price:400},
        ]
    },
    getters:{
        saleProducts:(state)=>{
            var saleArr = state.arr.map(item=>{
                return {
                    name:"--"+item.name+"--",
                    price:0.5*item.price
                }
            })
          return saleArr;
        }
    },
    mutations:{
        reducePrice:(state,payload)=>{
            state.arr.forEach(item=>{
                item.price-=payload;
            })
        }
    },
    actions:{
        reducePrice:(context,payload)=>{
            setTimeout(function(){
                context.commit("reducePrice",payload)
            },2000)
           
        }
    }
})