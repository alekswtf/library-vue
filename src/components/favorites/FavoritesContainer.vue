<template>
    <div class="favorites-container">
        <TitleGeneral title="Favorites"/>
        <FavoritesBooksContainer/>
    </div>
</template>

<script>
import TitleGeneral from '@/components/shared/TitleGeneral';
import FavoritesBooksContainer from '@/components/favorites/FavoritesBooksContainer.vue';

export default {
    components: {
        TitleGeneral,
        FavoritesBooksContainer
    }
}
</script>

<style lang="scss" scoped>
.favorites-container {
	max-height: 1440px;
	text-align: center;
	padding: 20px;
}
@include tablet {
    .favorites-container {
        max-height: 2630px;
    }
}
</style>