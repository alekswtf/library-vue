<template>
    <div class="welcome-container">
        <WelcomeOverlay/>
        <WelcomeText/>
    </div>
</template>

<script>
import WelcomeOverlay from './WelcomeOverlay';
import WelcomeText from './WelcomeText';

    export default {
        components: {
            WelcomeOverlay,
            WelcomeText
        }
    }

</script>

<style lang="scss" scoped>

.welcome-container {
    min-height: 600px;
	background: url('../../../public/img/welcome_bg.jpg') center (center / cover) no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}
</style>