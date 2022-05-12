<template>
    <div class="home-wrapper">
        <swiper
            :spaceBetween="30"
            :centeredSlides="true"
            class="home-swiper"
            :loop="true"
            :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
            }"
            :modules="modules">
            <swiper-slide v-for="item in swiperImages" :key="item">
                <img :src="item" />
            </swiper-slide>
        </swiper>
        <div class="links-wrapper">
            <img v-for="item in links" :key="item" :src="item" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
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
    const swiperImages = reactive([
      require('../assets/images/home_swiper_1.jpg'),
      require('../assets/images/home_swiper_2.jpg'),
      require('../assets/images/home_swiper_3.jpg'),
      require('../assets/images/home_swiper_4.jpg'),
    ]);
    const links = reactive([
      require('../assets/images/home_link_1.jpg'),
      require('../assets/images/home_link_2.jpg'),
      require('../assets/images/home_link_3.jpg'),
      require('../assets/images/home_link_4.jpg'),
      require('../assets/images/home_link_5.jpg'),
      require('../assets/images/home_link_6.jpg'),
    ]);
    return {
      modules: [Autoplay],
      swiperImages,
      links,
    };
  },
});
</script>
<style>
    .home-wrapper {
        width: 1200px;
        margin: 0 auto;
    }
    .home-swiper {
        height: calc(100vh - 40px);
        object-fit: cover;
    }
    .home-swiper img{
        width: 100%;
        height: 100%;
    }
    .links-wrapper {
        margin: 20px 0;
        display: grid;
        grid-template-columns: 350px 350px 350px;
        grid-template-rows: 350px 350px;
        justify-content: space-between;
    }
    .links-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
