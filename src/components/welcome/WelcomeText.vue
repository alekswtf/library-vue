<template>
    <div class="welcome-text">
        <h1 v-html="welcomeTitle"></h1>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                welcomeTitle: 'Welcome <br> to the Brooklyn <br> Library'
            }
        }
    }
</script>

<style lang="scss" scoped>

.welcome-text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 600px;
    height: 220px;
    background-color: $main-color;
    margin-top: -80px;
    h1 {
      font: {
        family: $forum;
        weight: 200;
        size: 40px;
      }
      text: {
        transform: uppercase;
        align: center;
      }
      color: $white-color;
      line-height: 125%;
      letter-spacing: 0.07em;
    }
  }

</style>