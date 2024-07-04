<template>
<div class="user-profile-badge-wrapper" v-click-outside="closeProfileMenu">
    <div 
    class="user-profile-badge" 
    @click="toggleMenu"
    >
    <img src="../../assets/icons/icon_profile.svg" alt="iconProfile">
    </div>
    <transition name="fade-slide" class="menu-wrapper">
        <div v-if="isMenuOpen">
            <DropMenuNoAuth 
            v-if="!isAuthenticated" 
            />
            <DropMenuAuth 
            v-else @closeProfileMenu="closeProfileMenu" 
            />
        </div>
        <!-- <component 
        :is="currentMenu" 
        v-if="isMenuOpen" 
        :is-authenticated="isAuthenticated"
        @closeMenu="closeProfileMenu"
        @update:isAuthenticated="setIsAuthenticated"
        /> -->
    </transition>
</div>
</template>

<script>
import { mapState } from 'vuex'
import DropMenuNoAuth from '@/components/header/userprofile/DropMenuNoAuth';
import DropMenuAuth from '@/components/header/userprofile/DropMenuAuth';


    export default {
        components: {
            DropMenuNoAuth,
            DropMenuAuth
        },
        data() {
            return {
                isMenuOpen: false,
            }
        },
        computed: {
            ...mapState(['isAuthenticated']),
/*             currentMenu() {
                return this.isAuthenticated ? 'DropMenuAuth' : 'DropMenuNoAuth';
            } */
        },    
            methods: {
                toggleMenu() {
                    this.isMenuOpen = !this.isMenuOpen;
                },
                closeProfileMenu() {
                    this.isMenuOpen = false;
                },
/*                 setIsAuthenticated(authenticated) {
                    this.isAuthenticated = authenticated;
                }, */
            }
}
</script>

<style lang="scss" scoped>
.user-profile-badge-wrapper {
    z-index: 4;
}
.user-profile-badge {
    cursor: pointer;
    border-radius: 100%;
    width: 28px;
    height: 28px;

    &:hover {
        background-color: $brown-color;
    }
}
.menu-wrapper {
    position: absolute;
    top: 100%; /* Example positioning */
    right: 0;
    width: 200px; /* Adjust as needed */
  }

  .fade-slide-enter-active, .fade-slide-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  
  .fade-slide-enter, .fade-slide-leave-to /* .fade-slide-leave-active in <2.1.8 */ {
    transform: translateY(-150px);
    opacity: 0;
  } 
</style>


