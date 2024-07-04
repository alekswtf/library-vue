<template>
    <div class="title-general">
        <h2>{{ title }}</h2>
        <hr>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
.title-general {
    font: {
		family: $forum;
		weight: 400;
		size: 40px;
	  }
	  color: $main-color;
	  line-height: 100%;
	  letter-spacing: 0.05em;
	  text-transform: capitalize;
}
hr {
    width: 50px;
    border: 1px solid $main-color;
    margin-top: 20px;
    margin-bottom: 40px;
  }
</style>