<template>
    <div class="library-wrapper">
        <FindYourCard/>
        
        <component 
            :is="currentComponent" 
            :openLoginModal="openLoginModal"
            :openRegisterModal="openRegisterModal"
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

    </div>
</template>

<script>
import FindYourCard from '@/components/librarycard/LibraryCardFindYourCard'
import GetReaderCard from '@/components/librarycard/LibraryCardGetReaderCard'
import CardProfile from '@/components/librarycard/LibraryCardGetCardProfile'
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import { mapState } from 'vuex';

export default {
        components: {
            FindYourCard,
            GetReaderCard,
            CardProfile,
            LoginModal,
            RegisterModal
        },
        data() {
            return {
                showLoginModal: false,
                showRegisterModal: false,
            }
        },
            computed: {
                ...mapState(['isAuthenticated']),
                currentComponent() {
                return this.isAuthenticated ? 'CardProfile' : 'GetReaderCard';
            }
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