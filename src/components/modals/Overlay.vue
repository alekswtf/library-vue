<template>
    <transition name="fade-overlay">
        <div class="modal-overlay" v-if="isVisible" 
        @click="closeOverlay" 
        >
            <slot :user="user"></slot>
        </div>

    </transition>
</template>

<script>

    export default {
        props: {
            isVisible: {
                type: Boolean,
                required: true
            },
            user: {
                type: Object,
                default: () => ({}),
            },
    },
        methods: {
            closeOverlay() {
            this.$emit('close');
        }
    }
} 
</script>

<style lang="scss" scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(10, 10, 12, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fade-overlay-enter-active, .fade-overlay-leave-active {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
  
  .fade-overlay-enter {
    transform: translateY(-100%);
    opacity: 0;
  }
  
  .fade-overlay-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }
</style>