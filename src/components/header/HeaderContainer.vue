<template>
    <div class="header-container">
        <HeaderLogo/>
        
        <div class="nav-n-profile-wrapper">
            <Navigation/>
            <ProfileMenu/>
            <HamburgerMenu/>
        </div>
    </div>
</template>

<script>

import HeaderLogo from '@/components/header/HeaderLogo';
import Navigation from '@/components/header/Navigation';
import ProfileMenu from '@/components/header/ProfileMenu';
import HamburgerMenu from '@/components/header/HamburgerMenu';

    export default {
        components: {
            HeaderLogo,
            Navigation,
            ProfileMenu,
            HamburgerMenu
        },

        methods: {
          handleProfileBadgeClick(message) {
            this.$emit('badgeClick', message)
        }
    },

} 
</script>

<style lang="scss" scoped>

.header-container {
    height: 90px;
    background-color: $main-color;
    display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 20px 0px 20px;
}

.nav-n-profile-wrapper {
    display: flex;
    align-items: center;
    gap: 40px;
}

</style>