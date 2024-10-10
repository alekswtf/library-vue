<template>
        <div class="get-card">
            <div class="get-title">
              <h4>Get a reader card</h4>
            </div>
  
            <div class="get-text">
              <h5>You will be able to see a reader card after logging into account or you can register a new account</h5>
            </div>
  
            <div class="get-buttons">
              <button class="signup" @click="openRegisterModal">Sign Up</button>
              <button class="login"  @click="openLoginModal">Log In</button>
            </div>
          </div>

</template>

<script>
    export default {
      props: {
        openLoginModal: {
          type: Function,
          required: true
        },
        openRegisterModal: {
          type: Function,
          required: true
        }
      }
    }
</script>

<style lang="scss" scoped>
.get-card {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 40px;
  
    .get-title {
      font: {
        family: $forum;
        size: 35px;
      }
      letter-spacing: 0.02em;
      color: $black-color;
    }
    .get-text {
      width: 456px;
      font: {
        family: $inter;
        size: 20px;
      }
      letter-spacing: 0.02em;
      color: $black-color;
      text-align: right;
      line-height: 200%;
    }
  }
  
  .get-buttons {
    display: flex;
    gap: 30px;
    button {
      @include button-styles;
    }
  }

  @include tablet {
    .get-card {
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
      .get-text {
        text-align: center;
        width: 600px;
      }
    }
  }  
</style>