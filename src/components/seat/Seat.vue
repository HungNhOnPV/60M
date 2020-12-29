<template>
  <div class="seats">
    <h1 class="seats__title">Book your dating place</h1>
    <div class="seats__content">
      <div class="warrapImage">
        <span
          v-for="(item, index) in seats"
          :key="index"
          :class="{
            'seat--red': item.status === 1,
            'seat--blue': item.status === 2,
            seat: true,
          }"
        >
          {{ item.price }}
          <img src="../../assets/icecream.svg" alt="ice-cream-point" height="7"
        /></span>
      </div>
      <div class="warrap">
        <h2 class="warrap__title">Your Ice Cream Points</h2>
        <h2 class="mx-auto">
          <img
            class="pr-2"
            src="../../assets/icecream.svg"
            alt="ice-cream-point"
            height="30"
          />
          {{ point }}
        </h2>
        <div class="warrap__status">
          <p>Empty</p>
          <p>Preserved</p>
          <p>Preserved for auto-matching</p>
        </div>
        <div class="warrap__actions">
          <button class="btn btn-blue">Preserved matching</button>
          <button class="btn btn-red">Book seat</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      // seats: seats
    };
  },
  computed: {
    ...mapGetters(["point", "seats"]),
  },
};
</script>

<style scoped lang="scss">
@import "../../scss/mixin.scss";

@include customFontFace("sunshiney", "../../fonts/Sunshiney-Regular.ttf");
.seats {
  padding: 90px;
  text-align: center;
  &__content {
    display: flex;
    justify-content: space-around;
    .warrapImage {
      background: url("../../assets/seat.png") no-repeat;
      width: 600px;
      background-size: contain;
      position: relative;
      .seat {
        display: inline-block;
        width: 21px;
        height: 21px;
        background: #99b84f;
        cursor: pointer;
        color: #fff;
        border-radius: 2px;
        box-sizing: border-box;
      }
      .seat--red {
        background: #ff4242;
        pointer-events: none;
      }
      .seat--blue {
        background: #7191e2;
      }
      span:nth-child(1) {
        position: absolute;
        top: 170px;
        left: 109px;
      }
      span:nth-child(2) {
        position: absolute;
        top: 193px;
        left: 109px;
      }
      span:nth-child(3) {
        position: absolute;
        top: 216px;
        left: 109px;
      }
      span:nth-child(4) {
        position: absolute;
        top: 216px;
        left: 172px;
      }
      span:nth-child(5) {
        position: absolute;
        top: 277px;
        left: 109px;
      }
      span:nth-child(6) {
        position: absolute;
        top: 277px;
        left: 138px;
      }
      span:nth-child(7) {
        position: absolute;
        top: 277px;
        left: 167px;
      }
      span:nth-child(8) {
        position: absolute;
        top: 277px;
        left: 196px;
      }
      span:nth-child(9) {
        position: absolute;
        top: 216px;
        left: 259px;
      }
      span:nth-child(10) {
        position: absolute;
        top: 238px;
        left: 259px;
      }
      span:nth-child(11) {
        position: absolute;
        top: 238px;
        left: 319px;
      }
      span:nth-child(12) {
        position: absolute;
        top: 216px;
        left: 319px;
      }
      span:nth-child(13) {
        position: absolute;
        top: 281px;
        left: 319px;
      }
      span:nth-child(14) {
        position: absolute;
        top: 304px;
        left: 319px;
      }
      span:nth-child(15) {
        position: absolute;
        top: 304px;
        left: 259px;
      }
      span:nth-child(16) {
        position: absolute;
        top: 281px;
        left: 259px;
      }
      span:nth-child(17) {
        position: absolute;
        top: 336px;
        left: 259px;
      }
      span:nth-child(18) {
        position: absolute;
        top: 336px;
        left: 210px;
      }
      span:nth-child(19) {
        position: absolute;
        top: 336px;
        left: 312px;
      }
      span:nth-child(20) {
        position: absolute;
        top: 259px;
        left: 441px;
      }
    }
    .warrap {
      padding-top: 60px;
      margin-right: 200px;
      &__title {
        margin-bottom: 30px;
      }
      &__status {
        margin: 20px 0;
        p {
          position: relative;
          font-size: 18px;
          margin-bottom: 20px;
          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            height: 30px;
            width: 30px;
            background: #7191e2;
            border: 1px solid #000;
            border-radius: 5px;
          }
        }
        p:nth-child(1) {
          &::before {
            background: #99b84f;
          }
        }
        p:nth-child(2) {
          &::before {
            background: #ff4242;
          }
        }
      }
      &__actions {
        .btn {
          padding: 10px 15px;
          margin-top: 30px;
          color: #fff;
        }
        .btn-blue {
          background: #7191e2;
          border: 1px solid #7191e2;
          border-radius: 5px;
          transition: all 0.3s ease;
          &:hover {
            border: 1px solid #7191e2;
            background: #fff;
            color: #7191e2;
          }
        }
        .btn-red {
          background: #ff4242;
          border: 1px solid #ff4242;
          border-radius: 5px;
          &:hover {
            border: 1px solid #ff4242;
            background: #fff;
            color: #ff4242;
          }
        }
      }
    }
  }
}
</style>