<template>
    <div>
        <div class="profile-menu-wrapper">
            <div class="profile-menu-noAuth" >
                <span>Profile</span>
                <hr>
                <div class="log-Links">
                    <div class="profile-logIn" 
                    @click="openLoginModal">Log In</div>
                    <div class="profile-reg" 
                    @click="openRegisterModal">Register</div>
                </div>
            </div>
        </div>  
            <LoginModal 
            :isVisible="showLoginModal" 
            @close="closeLoginModal" 
            @switchToRegister="switchToRegister" 
            @update:isAuthenticated="handleAuthentication"
            />
            
            <RegisterModal 
            :isVisible="showRegisterModal" 
            @close="closeRegisterModal" 
            @switchToLogin="switchToLogin" 
            />

    </div>
    
</template>

<script>
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import { mapState, mapActions } from 'vuex';

    export default {
        components: {
            LoginModal,
            RegisterModal,
        },
        data() {
            return {
                showLoginModal: false,
                showRegisterModal: false,
            }    
    },
        props:  
            ['isAuthenticated']
            ['isMenuOpen'],

        computed: {
            ...mapState(['isAuthenticated']),
        },

        methods: {
            ...mapActions(['login']),

            openLoginModal() {
                this.$emit('closeProfileMenu'); 
                this.showLoginModal = true;
            },
            openRegisterModal() {
                this.$emit('closeProfileMenu');
                this.showRegisterModal = true;
            },
            closeLoginModal() {
                this.showLoginModal = false;
            },
            closeRegisterModal() {
                this.showRegisterModal = false;
            },
            switchToRegister() {
                this.closeLoginModal();
                this.showRegisterModal = true;
            },
            switchToLogin() {
                this.closeRegisterModal();
                this.showLoginModal = true;
            },
            handleAuthentication(authenticated) {
                this.$store.commit('update:isAuthenticated', authenticated);
                this.closeLoginModal();
             },

        }
}
</script>

<style lang="scss" scoped>
.profile-menu-wrapper {
    position: relative;
}
.profile-menu-noAuth {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
		width: 80px;
		height: 115px;
		background-color: $white-color;
		z-index: 5;	
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
        .profile-logIn, .profile-reg {
            &:hover {
                cursor: pointer;
                color: $brown-color;
            }
        }
        
}

</style>