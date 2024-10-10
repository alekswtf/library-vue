<template>
    <div class="get-card">
        <h4 class="get-title">
          {{ isAuthenticated ? libraryUser.title : libraryLog.title }}
        </h4>

        <h5 class="get-text">
            {{ isAuthenticated ? libraryUser.h5 : libraryLog.h5 }}
        </h5>

        <div class="get-buttons" v-if="isAuthenticated">
            <button class="MyProfile" @click="openMyProfile">
                {{ libraryUser.button }}
            </button>
        </div>
        <div class="get-buttons" v-else>
                <button class="signup" @click="openRegisterModal">
                    {{ libraryLog.buttons.signUp }}</button>
              <button class="login"  @click="openLoginModal">
                {{ libraryLog.buttons.login }}
              </button>
        </div>

      </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {

        props: {
            openLoginModal: {
            type: Function,
            required: true
        },
        openRegisterModal: {
            type: Function,
            required: true
        },
        openMyProfile: {
                type: Function,
                required: true
        },
        closeMyProfile: {
                type: Function,
                required: true
        }
        
      },
      computed: {
        ...mapState(['isAuthenticated']),
        ...mapState(['loggedInUser']),
      },
      data() {
        return {
            showMyProfile: false,
            showLoginModal: false,
            showRegisterModal: false,

            libraryLog: {
                title: 'Get a reader card',
                h5:'You will be able to see a reader card after logging into account or you can register a new account',
                buttons: {
                    signUp: 'Sign Up',
                    login: 'Log In'
                }
            },
            libraryUser: {
                title: 'Visit your profile',
                h5: 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.',
                button: 'Profile'
            }
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