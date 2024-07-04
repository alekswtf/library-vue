<template>
    <div class="about-container">
        <TitleGeneral title="About"/>
        <AboutText/>
        <AboutCarouselWrapper/>
        
    </div>
</template>

<script>
import TitleGeneral from '@/components/shared/TitleGeneral';
import AboutText from '@/components/about/AboutText';
import AboutCarouselWrapper from '@/components/about/AboutCarouselWrapper';

    export default {
        components: {
            TitleGeneral,
            AboutText,
            AboutCarouselWrapper,
        }
    }

</script>

<style lang="scss" scoped>
.about-container {
	min-height: 837px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
}
@include tablet {
    .about-container {
        min-height: 862px;
    }
    
}
</style>