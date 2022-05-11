<template>
    <div class="home-wrapper" style="border: 1px solid blue;">
        <swiper
            :spaceBetween="30"
            :centeredSlides="true"
            class="home-swiper"
            :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
            }"
            :modules="modules">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
        </swiper>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import { Autoplay } from 'swiper';

import 'swiper/swiper.min.css';

export default defineComponent({
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
});
</script>
<style>
    .home-swiper {
        height: calc(100vh - 40px);
    }
</style>
