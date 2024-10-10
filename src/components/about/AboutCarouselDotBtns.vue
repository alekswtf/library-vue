<template>
  <div class="carousel-buttons">
    <button
      v-for="page in pages"
      :key="page"
      @click="goToPage(page)"
      :class="{ active: currentPage === page }"
    ></button>
  </div>
</template>

<script>


export default {
      props: {
            currentPage: {
              type: Number,
              default: 0
            },
            totalPages: { 
              type: Number, 
              default: 0 
            }
          },
      data() {
        return {
          pages: []
        }
      },
      created() {
          this.handleResize();
          window.addEventListener('resize', this.handleResize);
        },
        beforeDestroy() {
          window.removeEventListener('resize', this.handleResize);
        },

        methods: {
          goToPage(page) {
            this.$emit('update:currentPage', page )
          },
          
          handleResize() {
            if (window.innerWidth <= 768) {
              this.slidesPerPage = 1;
              this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
            } else {
              this.slidesPerPage = 3;
              this.pages = [0, 1, 2];
            }
          }
        },
              watch: {
          totalPages: {
            immediate: true,
            handler() {
              this.updatePages();
            }
          }
        },

}
</script>

<style lang="scss" scoped>
.carousel-buttons {
    display: flex;
    gap: 10px;
    margin-top: 45px;
}

button {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: $main-color;
    border: none;
    cursor: pointer;
      &:hover {
          background-color: $brown-color;
      }
    &.active {
      background-color: $brown-color;
    }
}

</style>