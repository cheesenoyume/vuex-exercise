<template>
  <div id="product-list-one">
      <ul>
          <li v-for="item in saleProducts">
              {{item.name}}:{{item.price}}
              <button @click="reducePrice(10)"></button>
          </li>
      </ul>
      <hr>
  </div>
</template>

<script>
export default {
  name: 'product-list-one',
  data(){
      return {
          
      }
  },
  computed:{
      arr(){
          return this.$store.state.arr;
      },
      saleProducts:function(){
          return this.$store.getters.saleProducts;
    //       var saleArr = this.$store.state.arr.map(item=>{
    //           return {
    //               name:"ds"+item.name+"asd",
    //               price:0.5*item.price
    //           }
    //       })
    //     return saleArr;
      }
  },
  methods:{
      reducePrice(payload){
           this.$store.dispatch('reducePrice',payload);
      }
  }

}
</script>

<style>
button{
    width:30px;
    height:20px;
}
</style>
