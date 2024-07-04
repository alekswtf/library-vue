<template>
    <div class="about-text">
        The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside 
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.about-text {
        font: {
          family: $inter;
          size: 20px;
        }
        text-align: center;
        color: $black-color;
        margin-bottom: 40px;
}

@include tablet {
    .about-text {
        line-height: 200%;
        margin-bottom: 20px;
    }
}

</style>