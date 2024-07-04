<template>
    <div class="about-arrows-buttons">
        <button 
        :class="leftArrow"
         @click="prevPage"
        ></button>
        <button 
        :class="rightArrow"
        @click="nextPage"
        ></button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                leftArrow: 'arrow-left',
                rightArrow: 'arrow-right',
            }
        },
        props: {
            prevPage: {
                type: Function,
                required: true
            },
            nextPage: {
                type: Function,
                required: true
                },
        }
    }
</script>

<style lang="scss" scoped>
.about-arrows-buttons {
    display: none;
}

@include tablet {
    .about-arrows-buttons {
        display: flex;
        gap: 600px;
        position: relative;
        top: 300px;
    }
    .arrow-left {
        background: url('@/assets/icons/Carret_Left.png') no-repeat;
        cursor: pointer;
        height: 24px;
        width: 24px;
        border: none;
    }
    .arrow-right {
        background: url('@/assets/icons/Carret_Right.png') no-repeat;
        cursor: pointer;
        height: 24px;
        width: 24px;
        border: none;
    }
}
</style>