<template>
  <div id="product-list-two">
      <ul>
          <li v-for="item in arr">
              {{item.name}}:{{item.price}}
          </li>
      </ul>
      <hr>
  </div>
</template>

<script>
export default {
  name: 'product-list-two',
  data(){
      return {
        
      }
  },
    computed:{
      arr(){
          return this.$store.state.arr;
      }
  }

}
</script>

<style>

</style>
