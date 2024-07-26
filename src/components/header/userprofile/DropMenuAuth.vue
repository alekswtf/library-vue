<template>
    <div>
        <div class="profile-menu-wrapper">
            <div class="profile-menu-Auth">
                <span>Profile</span>
                <hr>
                <div class="log-Links">
                  <div class="profile-myProfile"
                   @click="openMyProfile">My profile</div>
                  <div class="profile-logOut" @click="logout">Log Out</div>
                </div>
            </div>
        </div>

        <Overlay :isVisible="showMyProfile" 
             @close="showMyProfile = false"
             :user="user"
             >
            <MyProfile 
            :isVisible="showMyProfile"
            :user="loggedInUser" 
            @close="showMyProfile = false" 
            @update:user="user = $event"
            />
          </Overlay>
    </div>
</template>

<script>
import MyProfile from '@/components/header/userprofile/MyProfile'
import Overlay from '../../modals/Overlay'
import { mapState, mapActions } from 'vuex'

    export default {
        components: {
            MyProfile,
            Overlay
        },
        props: {
			user: {}
        },
        data() {
            return {
                showMyProfile: false,
            }
        },
        computed: {
            ...mapState(['isAuthenticated']),
        },
        methods: {
            openMyProfile() {
                this.showMyProfile = true;
            },
            ...mapActions(['logout']),
/*             logout() {
                localStorage.removeItem('loggedInUser');
                this.$store.commit('update:isAuthenticated', false);
                this.$emit('close');
    
            } */
        }
    }
</script>

<style lang="scss" scoped>
.profile-menu-wrapper {
    position: relative;
  }
  .profile-menu-Auth {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 80px;
    height: 115px;
    background-color: $white-color;
    z-index: 4;	
    top: 30px;
    right: -25px;
    font: {
        family: $inter;
        size: 15px;
        weight: 400;
      }
    hr {
        width: 40px;
        border: 1px solid $brown-color; 
    }
    span {
        font-weight: 700;
    }
}

.log-Links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
    .profile-myProfile, .profile-logOut {
        &:hover {
            cursor: pointer;
            color: $brown-color;
        }
    }
    
}

</style>