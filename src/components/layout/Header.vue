<template>
  <div class="topnav">
    <router-link class="active" :to="{name: 'home'}"> Dating Ice Cream </router-link>
    <div class="menu">
      <router-link :to="{name: 'dating'}" class="fa fa-heartbeat"> <span>Dating</span></router-link>
      <router-link :to="{name: 'cart'}" class="fa fa-cart-arrow-down"> <span>Cart</span><b>{{point.length}}</b></router-link>
      <router-link :to="{name: 'profile'}" class="fa fa-user-circle"> <span>Hi Hirata</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      point: this.$store.state.user.carts
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../scss/mixin.scss";

@include customFontFace("sunshiney", "../../fonts/Sunshiney-Regular.ttf");

.topnav {
  background-color: #fff;
  font-family: "sunshiney";
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #7D005A;
  .active {
    color: #7D005A;
    font-size: 28px;
    text-decoration: none;
    padding: 10px 20px;
  }
  .menu {
    a {
      color: #99B84F;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 25px;
      transition: all .3s ease;
      position: relative;
      &:hover {
        background-color: #ffffff;
        color: #7D005A;
      }
      span {
        font-family: "sunshiney";
        margin-left: 10px;
      }
      b {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 100;
        padding: 5px;
        border-radius: 50%;
        font-size: 1rem;
        color: #f53030;
      }
    }
  }
}
</style>
