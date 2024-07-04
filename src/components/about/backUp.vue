methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--
      }
    },

    nextSlide() {
      if (this.currentSlideIndex >= this.sliderItems.length - 3 ) {
      this.currentSlideIndex = 2
    } else { 
      this.currentSlideIndex++
     }
  }
}

+

<template>
    <div class="about-carousel-wrapper">
      <div class="slides-inner">
        <AboutCarousel
          :carousel_data="sliderItems"
          :style="{ 'transform': 'translateX(' + (-slideWidth * currentSlideIndex) + '%)' }"
        />
      </div>
      <div class="carousel-controls">
        <DottesBtns
        :currentSlideIndex="currentSlideIndex"
        :prevSlide="prevSlide"
        :nextSlide="nextSlide"
        :slides-per-page="slidesPerPage"
        />

      </div>
    </div>
  </template>
  
  <script>
  import AboutCarousel from '@/components/about/AboutCarousel';
  import DottesBtns from '@/components/about/AboutCarouselDotBtns';
  
  export default {
    components: {
            AboutCarousel,
            DottesBtns
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
        currentSlideIndex: 0,
        slideWidth: 33.6,
      }
    },

            methods: {
            prevSlide() {
              if (this.currentSlideIndex > 0) {
                this.currentSlideIndex--
              }
            },

            nextSlide() {
              if (this.currentSlideIndex >= this.sliderItems.length - 3 ) {
              this.currentSlideIndex = 2
            } else { 
              this.currentSlideIndex++
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

  </style>
  