<template>
    <div class="about-carousel">
        <AboutSlide
            v-for="item in carousel_data"
            :key="item.id"
            :item_data="item"
        />
    </div>

</template>

<script>
  import AboutSlide from '@/components/about/AboutSlide';

    export default {
        name: 'about-carousel',
        components: {
            AboutSlide
        },
        props: {
            carousel_data: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss" scoped>
.about-carousel {
    display: flex;
    width: 100%;
    gap: 25px;
    transition: transform 0.5s ease-in-out;
}
</style>