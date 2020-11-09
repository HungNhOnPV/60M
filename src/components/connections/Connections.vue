<template>
  <div class="connections">
    <h1 class="headline">your connetions</h1>
    <div class="wrapper-connections">
      <div class="connection">
        <img src="../../assets/avatar1.jpg" alt="" class="connection__image">
        <div class="connection__detail">
          <h2 class="connection__detail__title">information</h2>
          <div class="connection__detail__name">Name: Đập chậu cướp hoa</div>
          <div class="connection__detail__age">Age: 22</div>
          <div class="connection__detail__work">Work: Hust</div>
          <div class="connection__detail__location">Location: Hà Nội</div>
          <button class="connection__detail__btn">accept request</button>
        </div>
      </div>
      <div class="connection">
        <img src="../../assets/avatar2.jpg" alt="" class="connection__image">
        <div class="connection__detail">
          <h2 class="connection__detail__title">information</h2>
          <div class="connection__detail__name">Name: Đập chậu cướp hoa</div>
          <div class="connection__detail__age">Age: 22</div>
          <div class="connection__detail__work">Work: Hust</div>
          <div class="connection__detail__location">Location: Hà Nội</div>
          <button class="connection__detail__btn">accept request</button>
        </div>
      </div>
      <div class="connection">
        <img src="../../assets/avatar3.jpg" alt="" class="connection__image">
        <div class="connection__detail">
          <h2 class="connection__detail__title">information</h2>
          <div class="connection__detail__name">Name: Đập chậu cướp hoa</div>
          <div class="connection__detail__age">Age: 22</div>
          <div class="connection__detail__work">Work: Hust</div>
          <div class="connection__detail__location">Location: Hà Nội</div>
          <button class="connection__detail__btn">accept request</button>
        </div>
      </div>
      <div class="connection">
        <img src="../../assets/avatar4.jpg" alt="" class="connection__image">
        <div class="connection__detail">
          <h2 class="connection__detail__title">information</h2>
          <div class="connection__detail__name">Name: Đập chậu cướp hoa</div>
          <div class="connection__detail__age">Age: 22</div>
          <div class="connection__detail__work">Work: Hust</div>
          <div class="connection__detail__location">Location: Hà Nội</div>
          <button class="connection__detail__btn">accept request</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
  @import '../../scss/mixin.scss';

  @include customFontFace('roboto', '../../fonts/Roboto-Regular.ttf');
  @include customFontFace('sunshiney', '../../fonts/Sunshiney-Regular.ttf');

  .connections {
    max-width: 70%;
    margin: auto;
    .headline {
      @include customFont(30px, 'sunshiney');
      text-transform: capitalize;
      text-align: center;
      margin: 70px;
    }
    .wrapper-connections {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .connection {
        width: 45%;
        display: flex;
        margin-bottom: 50px;
        border: 1px solid $colorBorder;
        border-radius: 5px;
        box-sizing: border-box;
        &__image {
          width: 50%;
        }
        &__detail {
          padding: 10px 20px;
          &__title {
            @include customFont(22px, 'roboto');
            text-transform: capitalize;
            margin-bottom: 10px;
          }
          &__name, &__age, &__work, &__location {
            @include customFont(18px, 'roboto');
            margin-bottom: 10px;
          }
          &__btn {
            padding: 10px 20px;
            text-transform: capitalize;
            border: 1px solid $colorPrimary;
            background: $colorPrimary;
            color: $colorWhite;
            border-radius: 5px;
            transition: all .3s ease;
            &:hover {
              color: $colorPrimary;
              background: $colorWhite;
              transition: all .3s ease;
            }
          }
        }
      }
    }
  }
</style>
