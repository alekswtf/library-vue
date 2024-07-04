<template>
    <div class="coffee-shop-container">
        <TitleGeneral title="Coffee Shop"/>
        <CoffeeShopDeclaration/>
        <CoffeeShopPrices/>
    </div>
</template>

<script>
import TitleGeneral from '@/components/shared/TitleGeneral';
import CoffeeShopDeclaration from '@/components/coffeeshop/CoffeeShopDeclaration';
import CoffeeShopPrices from '@/components/coffeeshop/CoffeeShopPrices.vue';

    export default {
        components: {
            TitleGeneral,
            CoffeeShopDeclaration,
            CoffeeShopPrices

        }
    }
</script>

<style lang="scss" scoped>
.coffee-shop-container {
    background-color: $white-color;
	max-height: 841px;
	text-align: center;
	padding: 20px;
    margin-top: 30px;
}

@include tablet {
    .coffee-shop-container {
        max-height: 1481px;
    }
}
</style>