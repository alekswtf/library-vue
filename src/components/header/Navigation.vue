<template>
    <nav>
        <ul class="nav-container">
            <li class="list-item" v-for="(item, index) in navItems" :key="index">
                <a :href="`#${item.href}`"
                 class="list-item-link"
                 >{{ item.label }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>

    export default {
        data () {
        return {
            navItems: [
                {
                    label: 'About',
                    href: 'AboutContainer'
                },
                {
                    label: 'Favorites',
                    href: 'FavoritesContainer'
                },
                {
                    label: 'Coffee shop',
                    href: 'CoffeeShopContainer'
                },
                {
                    label: 'Contacts',
                    href: 'ContactsContainer'
                },
                {
                    label: 'Library Card',
                    href: 'LibraryCardContainer'
                },               
                ]
            }
        }
}
    
</script>

<style lang="scss" scoped>
.nav-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
}
a {
    font-weight: 400;
    font-size: 20px;
    line-height: 250%;
    font-family: $inter;
    color: $white-color;
    cursor: pointer;
    &:hover {
        color: $brown-color;
    }
}

@include tablet {
    .nav-container {
        display: none;
    }
}
</style>