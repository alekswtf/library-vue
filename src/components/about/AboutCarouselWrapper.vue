<template>
    <div class="about-carousel-wrapper">
      <ArrowsButtons
        :prevPage="prevPage"
        :nextPage="nextPage"
        />
      <div class="slides-inner">
        <AboutCarousel
          :carousel_data="sliderItems"
          :style="{ 'transform': 'translateX(' + (-slideWidth * currentPage) + '%)' }"
        />
      </div>
      <div class="carousel-controls">
        
        <DottesButtons
        :currentPage="currentPage"
        :prevPage="prevPage"
        :nextPage="nextPage"
        :totalPages="totalPages"
        :pages="pages"
         @update:currentPage="currentPage = $event"
        />

      </div>
    </div>
  </template>
  
  <script>
  import AboutCarousel from '@/components/about/AboutCarousel';
  import DottesButtons from '@/components/about/AboutCarouselDotBtns';
  import ArrowsButtons from '@/components/about/AboutCarouselArrowsBtns'
  
  export default {
        components: {
                AboutCarousel,
                DottesButtons,
                ArrowsButtons 
        },

        data() {
          return {
            sliderItems: [
              { id: 1, name: 'img1', img: 'image_1.png' },
              { id: 2, name: 'img2', img: 'image_2.png' },
              { id: 3, name: 'img3', img: 'image_3.png' },
              { id: 4, name: 'img4', img: 'image_4.png' },
              { id: 5, name: 'img5', img: 'image_5.png' },
            ],
            currentPage: 0,
            slidesPerPage: 3
          }
        },
        created() {
            this.updateSlidesPerPage();
            window.addEventListener('resize', this.updateSlidesPerPage);
          },
          beforeDestroy() {
            window.removeEventListener('resize', this.updateSlidesPerPage);
          },

        computed: { 
          totalPages() {
            return Math.ceil(this.sliderItems.length / this.slidesPerPage)
          },
          slideWidth() {
            return 100 / this.slidesPerPage;
          },
          slidePerPage() {
            return this.isMobile ? 5 : 3;
          },
          isMobile() {
            return window.innerHeight <= 768;
          } 
        }, 

        methods: {
              prevPage() {
                if (this.currentPage > 0) {
                  this.currentPage--
                }
              },
              nextPage() {
                if (this.currentPage < this.totalPages - 1 ) {
                  this.currentPage++
                } 
              },
              updateSlidesPerPage() {
                if (window.innerWidth <= 768) {
                  this.slidesPerPage = 1;
                } else {
                  this.slidesPerPage = 3;
                }
              }
        }
  }

  </script>
  
  <style lang="scss" scoped>
  .about-carousel-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  
  .slides-inner {
    display: flex;
    width: 100%;
    gap: 20px;
  }
  
  .carousel-controls {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
@include tablet {
  .about-carousel-wrapper {
    width: 100%;
  }
  .slides-inner {
    width: 65%;
    overflow: hidden;
  }

}
  </style>
  