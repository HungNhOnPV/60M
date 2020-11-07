<template>
  <section>
    <div class="background">
      <h2 class="background__text">
        It's great to see you here!
        <br />
        Why not get an Ice Cream from us and take a
        chance to get new friends or your lover!
        <p>You can also create a flavour ice cream in your own way for now!</p>
      </h2>
    </div>
    <div class="products">
      <div class="products__headline">
        smoothies & ice creams
      </div>
      <div class="wrapper-product">
        <div class="product">
          <img src="../../assets/Product1.jpg" alt="" class="product__image">
          <div class="box">
            <div class="product__name">melon love</div>
            <div class="product__point">
              <img src="../../assets/Point.png" alt="" class="product__point__icon">
              1
            </div>
            <div class="product__pay">12.000 vnd</div>
          </div>
        </div>
        <div class="product">
          <img src="../../assets/Product2.jpg" alt="" class="product__image">
          <div class="box">
            <div class="product__name">mango cup</div>
            <div class="product__point">
              <img src="../../assets/Point.png" alt="" class="product__point__icon">
              1
            </div>
            <div class="product__pay">12.000 vnd</div>
          </div>
        </div>
        <div class="product">
          <img src="../../assets/Product3.jpg" alt="" class="product__image">
          <div class="box">
            <div class="product__name">ice cream stick</div>
            <div class="product__point">
              <img src="../../assets/Point.png" alt="" class="product__point__icon">
              1
            </div>
            <div class="product__pay">15.000 vnd</div>
          </div>
        </div>
        <div class="product">
          <img src="../../assets/Product4.jpg" alt="" class="product__image">
          <div class="box">
            <div class="product__name">buffe ice</div>
            <div class="product__point">
              <img src="../../assets/Point.png" alt="" class="product__point__icon">
              1
            </div>
            <div class="product__pay">50.000 vnd</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
};
</script>

<style scope lang="scss">
  @import '../../scss/mixin.scss';

  @include customFontFace('roboto', '../../fonts/Roboto-Regular.ttf');
  @include customFontFace('sunshiney', '../../fonts/Sunshiney-Regular.ttf');

  .background {
    background: url('../../assets/Background.jpg') center no-repeat;
    height: 438px;
    &__text {
      @include customFont(22px, 'roboto');
      padding: 184px 0 0 82px;
      color: #ffffff;
      width: 536px;
      p {
        margin-top: 10px;
      }
    }
  }
  .products {
    max-width: 70%;
    margin: auto;
    &__headline {
      @include customFont(30px, 'sunshiney');
      text-transform: capitalize;
      margin: 70px;
      text-align: center;
      position: relative;
      &::after {
        content: '';
        @include customPosition(absolute, 43px, 283px, 1, 300px, 2px, true);
        background: $colorGray;
      }
    }
    .wrapper-product {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 70px;
      .product {
        width: 22%;
        box-sizing: border-box;
        &__image {
          width: 100%;
        }
        .box {
          border: 1px solid $colorPink;
          border-top: none;
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
          padding: 10px 20px;
        }
        &__name {
          @include customFont(20px, 'roboto');
          text-transform: capitalize;
          text-align: center;
        }
        &__point {
          @include customFont(18px, 'roboto');
          text-align: center;
          margin: 5px 0;
          &__icon {
            height: 18px;
          }
        }
        &__pay {
          text-align: center;
          @include customFont(18px, 'roboto');
          color: $colorOrange;
        }
      }
    }
  }
</style>
