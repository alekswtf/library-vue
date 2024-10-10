<template>
    <div class="library-wrapper">
        <FindYourCard/>
        <LibraryCardGetAll
            :openLoginModal="openLoginModal"
            :openRegisterModal="openRegisterModal"
            :isVisible="showLoginModal" 
            :openMyProfile="openMyProfile"
            @update:isAuthenticated="setIsAuthenticated"
            />

            <LoginModal       
            :isVisible="showLoginModal" 
            @close="closeLoginModal" 
            @switchToRegister="switchToRegister" 
            @update:isAuthenticated="setIsAuthenticated"
            />
          
            <RegisterModal            
            :isVisible="showRegisterModal" 
            @close="closeRegisterModal" 
            @switchToLogin="switchToLogin" 
            @update:isAuthenticated="setIsAuthenticated"
            />
            
            
            <Overlay :isVisible="showMyProfile" 
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
import LibraryCardGetAll from '@/components/librarycard/LibraryCardGetAll'
import MyProfile from '@/components/header/userprofile/MyProfile'
import Overlay from '@/components/modals/Overlay.vue'
import FindYourCard from '@/components/librarycard/LibraryCardFindYourCard'
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import { mapState } from 'vuex';

export default {
        components: {
            LibraryCardGetAll,
            MyProfile,
            Overlay,
            LoginModal,
            RegisterModal,
            FindYourCard,
        },
        data() {
            return {
                showLoginModal: false,
                showRegisterModal: false,
                showMyProfile: false
            }
        },
            computed: {
                ...mapState(['isAuthenticated']),
                ...mapState(['loggedInUser']),
        },
        methods: {
            openLoginModal() {
                this.showLoginModal = true;
                this.showRegisterModal = false;
            },
            openRegisterModal() {
                this.showRegisterModal = true;
                this.showLoginModal = false;
            },
            closeLoginModal() {
                this.showLoginModal = false;
            },
            closeRegisterModal() {
                this.showRegisterModal = false;
            },
            switchToRegister() {
                this.closeLoginModal();
                this.openRegisterModal();
            },
            switchToLogin() {
                this.closeRegisterModal();
                this.openLoginModal();
            },
            openMyProfile() {
                this.showMyProfile = true;
            },
            closeMyProfile() {
                this.showMyProfile = false;
            },
            setIsAuthenticated(authenticated) {
                this.$store.commit('setIsAuthenticated', authenticated);
            }
  }
}    

</script>

<style lang="scss" scoped>
.library-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }


@include tablet {
    .library-wrapper {
        flex-direction: column;
        align-items: center;
    }
}
</style>