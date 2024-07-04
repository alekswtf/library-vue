<template>
    <div class="about-slide">
        <img :src=" require('@/assets/img/carousel/' + item_data.img ) " alt="img">
    </div>
</template>

<script>
    export default {
        name: 'about-slide',
        props: {
            item_data: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss" scoped>

.slide {
    width: 450px;
    display: inline-block;
}
</style>