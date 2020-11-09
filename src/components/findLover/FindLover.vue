<template>
  <div class="find-lover">
    <div class="container">
        <div class="row mt-5">
            <h4 class="mx-auto">
                Your ice cream points
            </h4>
        </div>
        <div class="row">
            <h2 class="mx-auto">
                <img class="pr-2" src="../../assets/icecream.svg" alt="ice-cream-point" height="30"> 15
            </h2>
        </div>
        <div class="row mt-5">
            <div class="col-sm-4">
                <div class="row">
                    <h5>What you want your lover to be like?</h5>
                </div>
                <div class="row">
                    <h5 class="col-sm-3">Age</h5>
                    <form class="col-sm-9 row">
                        <label for="ageFrom" class="col-sm-2 col-form-label">From</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="ageFrom" value="18">
                        </div>
                        <label for="ageTo" class="col-sm-2 col-form-label">to</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="ageTo" value="25">
                        </div>
                    </form>
                </div>
                <div class="row mt-3    ">
                    <h5 class="col-sm-3">Location</h5>
                    <form class="col-sm-9 row">
                        <div class="col-sm-12">
                            <input type="text" class="form-control" id="ageFrom" value="Hanoi">
                        </div>

                    </form>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="row">
                    <button type="button" class="btn btn-outline-danger btn-lg mx-auto pr-5 pl-5">
                        <div class="row">Find your lover</div>
                        <h4 class="mx-auto">
                            <img class="pr-2" src="../../assets/icecream.svg" alt="ice-cream-point" height="20"> 1
                        </h4>
                    </button>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="row">
                            <img src="../../assets/ava.png" alt="ava" class="img-thumbnail">
                        </div>
                        <div class="row">
                            <button type="button" class="btn btn-primary btn-block mt-3">Request Connection</button>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <h3>Information</h3> <br>
                        <p>Name: Sun Nguyen</p>
                        <p>Age: 22</p>
                        <p>Work: FPT Software</p>
                        <p>Location: Hanoi</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'

export default {

}
</script>

<style scoped lang="scss">
  @import '../../scss/mixin.scss';

  @include customFontFace('sunshiney', '../../fonts/Sunshiney-Regular.ttf');

  .find-lover {
    font-family: 'sunshiney';
  }
</style>
