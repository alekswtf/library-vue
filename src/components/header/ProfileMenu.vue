<template>
    <div>
        <div class="user-profile-badge-wrapper" v-click-outside="closeProfileMenu">
            <div @click="toggleMenu">
                
                <div v-if="isAuthenticated" class="user-initials">
                    {{ userInitials }}
                </div>
    
                <div v-else class="user-profile-badge" >
                    <img src="../../assets/icons/icon_profile.svg" alt="iconProfile">
                </div>
            </div>
            <transition name="fade-slide" class="menu-wrapper">
                <div v-if="isMenuOpen">
                    <DropMenu/>
                </div>
            </transition>
        </div>
    </div>
    
</template>


<script>
import { mapState } from 'vuex'
import DropMenu from '@/components/header/userprofile/DropMenu';

    export default {
        components: {
            DropMenu
        },

        data() {
            return {
                isMenuOpen: false,
                userInitials:'',
            }
        },

        computed: {
            ...mapState(['isAuthenticated','loggedInUser'])
        },  

        methods: {
            toggleMenu() {
                    this.isMenuOpen = !this.isMenuOpen;
                },
            closeProfileMenu() {
                    this.isMenuOpen = false;
                },

            setUserInitials() {
                const userData = JSON.parse(localStorage.getItem('loggedInUser'));
                if (userData && userData.userFirstName && userData.userLastName) {
                    this.userInitials = `${userData.userFirstName[0]}${userData.userLastName[0]}`.toUpperCase();
                } else {
                    console.log('Smth wrong');
                }
            }
        },

        created() {
            this.setUserInitials();
        },

        watch: {
            isAuthenticated: {
                user: true,
                handler(newUser) {
                    if (newUser) {
                        this.setUserInitials();
                    }
                }
            }
        }
}
</script>

<style lang="scss" scoped>
.user-profile-badge-wrapper {
    z-index: 4;
    position: relative;
    margin-right: -30px;
}
.user-profile-badge {
    cursor: pointer;
    border-radius: 100%;
    width: 28px;
    height: 28px;

    &:hover {
        cursor: pointer;
        background-color: $brown-color;
    }
}

.user-initials {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    font-family: $inter;   
    font-size: 15px;
    line-height: 133%;
    background-color: $white-color;
    color: $brown-color;
    text-transform: uppercase;
    z-index: 4;
    position: relative;
    &:hover {
        cursor: pointer;
    }
}

.menu-wrapper {
    position: absolute;
    top: 100%; 
    right: 0;
    width: 200px; 
  }

  .fade-slide-enter-active, .fade-slide-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  
  .fade-slide-enter, .fade-slide-leave-to /* .fade-slide-leave-active in <2.1.8 */ {
    transform: translateY(-150px);
    opacity: 0;
  } 

 @include tablet {
    .user-profile-badge-wrapper {
        margin: 0;
    }
  }

</style>


