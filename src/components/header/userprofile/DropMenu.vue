<template>
    <div>
        <div class="profile-menu-wrapper">
            <div v-if="isAuthenticated" class="profile-menu-Auth">
                <span>{{ userCardNumber }}</span>
                <hr>
                <div class="log-Links">
                    <div class="profile-myProfile" @click="openMyProfile">My profile</div>
                    <div class="profile-logOut" @click="logout">Log Out</div>
                </div>
            </div>
            <div v-else class="profile-menu-noAuth">
                <span>Profile</span>
                <hr>
                <div class="log-Links">
                    <div class="profile-logIn" @click="openLoginModal">Log In</div>
                    <div class="profile-reg" @click="openRegisterModal">Register</div>
                </div>
            </div>
        </div>
        <Overlay :isVisible="showMyProfile" @close="showMyProfile = false">
            <MyProfile
                :isVisible="showMyProfile"
                :user="loggedInUser"
                @close="showMyProfile = false"
                @update:user="updateUser"
            />
        </Overlay>

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
import MyProfile from '@/components/header/userprofile/MyProfile'
import Overlay from '../../modals/Overlay'
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import { mapState, mapActions } from 'vuex'

    export default {
        components: {
        MyProfile,
        Overlay,
        LoginModal,
        RegisterModal,
    },

    props: {
        closeProfileMenu: {
            type: Function,
            required: true
        },
        user: {}
    },

    data() {
        return {
            showMyProfile: false,
            showLoginModal: false,
            showRegisterModal: false,
            loggedInUser: {},
            userCardNumber: ''
        }
    },

    computed: {
        ...mapState(['isAuthenticated']),
    },

    created() {
            this.updateUserCardNumber();
        },


    methods: {
        openMyProfile() {
            this.showMyProfile = true;
            this.closeProfileMenu();
        },
        openLoginModal() {
            this.showLoginModal = true;
            this.closeProfileMenu();
        },
        openRegisterModal() {
            this.showRegisterModal = true;
            this.closeProfileMenu();
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
        updateUser(updatedUser) {
            this.loggedInUser = updatedUser;
        },
        ...mapActions(['logout']),

        updateUserCardNumber() {
			const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
			if (loggedInUser && loggedInUser.cardNumber) {
				this.userCardNumber = loggedInUser.cardNumber;
			} else {
				console.warn('No cardNumber data found in loggedInUser');
			}
		},
    },

    watch: {
            isAuthenticated: {
                user: true,
                handler(newUser) {
                    if (newUser) {
                        this.updateUserCardNumber();
                    }
                }
            }
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
        font-size: 12px;
    }
}


.log-Links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
    .profile-myProfile, .profile-logOut, .profile-logIn, .profile-reg {
        &:hover {
            cursor: pointer;
            color: $brown-color;
        }
    }
}
</style>