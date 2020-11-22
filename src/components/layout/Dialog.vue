<template>
  <div class="wrapperDialog" @click="toggleDialog">
    <div class="dialog" @click.stop="">
      <h1 class="dialog__title">Confirm resquest connection</h1>
      <button class="dialog__connection btn" @click="toggleDialog">Connection</button>
      <button class="dialog__cancel btn" @click="toggleDialog">Cancel</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
 data() {
   return {

   }
 },
 methods: {
   ...mapActions(['toggleDialog'])
 }
}
</script>

<style lang="scss" scoped>
  .wrapperDialog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0 , .6);
    height: 100vh;
    z-index: 999;
    .dialog {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1000;
      transform: translate(-50%, -50%);
      background: #FFF;
      border: 1px solid #e6e6e6;
      border-radius: 10px;
      padding: 20px;
      &__title {
        font-size: 20px;
        text-align: center;
        margin-bottom: 20px;
      }
      .btn {
        padding: 10px 20px;
        outline: none;
        border-radius: 10px;
        color: #FFF;
      }
      &__connection {
        background: rgb(32, 189, 1);
        transition: all .3s ease;
        border: 1px solid  rgb(32, 189, 1);
        &:hover {
          background: #FFF;
          color: rgb(32, 189, 1);
        }
      }
      &__cancel {
        background: rgb(247, 58, 58);
        transition: all .3s ease;
        border: 1px solid  rgb(247, 58, 58);
        &:hover {
          background: #FFF;
          color: rgb(247, 58, 58);
        }
      }
    }
  }
</style>
