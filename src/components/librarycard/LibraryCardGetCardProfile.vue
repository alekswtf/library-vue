<template>
    <div class="get-card-profile">
        <div class="get-title">
          <h4>Visit your profile</h4>
        </div>

        <div class="get-text">
          <h5>With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.</h5>
        </div>

        <div class="get-buttons">
          <button class="MyProfile" @click="openMyProfile">Profile</button>
        </div>

        <Overlay 
            :isVisible="showMyProfile" 
             @close="showMyProfile = false"
             >
            <MyProfile 
            :isVisible="showMyProfile"
            :user="loggedInUser" 
            @close="showMyProfile = false" 
            
            />
          </Overlay>
      </div>
</template>

<script>
import MyProfile from '@/components/header/userprofile/MyProfile'
import Overlay from '@/components/modals/Overlay.vue'
import { mapState } from 'vuex'

    export default {
      components: {
        MyProfile,
        Overlay
      },
      data() {
        return {
          showMyProfile: false,
        }
      },
      computed: {
        ...mapState(['loggedInUser']),
      },
      methods: {
        openMyProfile() {
          this.showMyProfile = true;
        },
        closeMyProfile() {
          this.showMyProfile = false;
        }
  }
}
</script>

<style lang="scss" scoped>
.get-card-profile {
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
  .get-card-profile {
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