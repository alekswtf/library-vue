<template>
    <div>
      <HeaderContainer/>
      <WelcomeContainer/>
      <AboutContainer id="AboutContainer"/>
      <FavoritesContainer id="FavoritesContainer"/>
      <CoffeeShopContainer id="CoffeeShopContainer"/>
      <ContactsContainer id="ContactsContainer"/>
      <LibraryCardContainer id="LibraryCardContainer"/>
      <FooterContainer/>
    </div>
  </template>

<script>
import HeaderContainer from '@/components/header/HeaderContainer.vue'
import WelcomeContainer from '@/components/welcome/WelcomeContainer.vue'
import AboutContainer from '@/components/about/AboutContainer.vue'
import FavoritesContainer from '@/components/favorites/FavoritesContainer.vue'
import CoffeeShopContainer from '@/components/coffeeshop/CoffeeShopContainer.vue'
import ContactsContainer from '@/components/contacts/ContactsContainer.vue'
import LibraryCardContainer from '@/components/librarycard/LibraryCardContainer.vue'
import FooterContainer from '@/components/footer/FooterContainer.vue'


    export default {
        components: {
            HeaderContainer,
            WelcomeContainer,
            AboutContainer,
            FavoritesContainer,
            CoffeeShopContainer,
            ContactsContainer,
            LibraryCardContainer,
            FooterContainer
        },

    
        methods: {
        }
    }
</script>

<style lang="scss" scoped>

</style>