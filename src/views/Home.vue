<template>
    <div class="home-wrapper">
        <el-carousel class="home-swiper" :interval="3000" height="500px">
            <el-carousel-item v-for="item in swiperImages" :key="item">
                <img :src="item.img" />
                <div class="swipper-item-text">{{item.text}}</div>
            </el-carousel-item>
        </el-carousel>
        <div class="why-boxtile-wrapper">
            <div class="why-boxtile"></div>
            <div class="why-content">
                <h4>Why are we doing this?</h4>
                <br />
                <p>
                    China produces 20 million tons of waste textiles per year.
                    Although an industrial chain consisting of recycling,
                    sorting, dismantling and remaking has been set up to deal
                    with the wastes, the recycling rate of waste textiles in
                    the country is still less than 20%.
                    Research shows that if China's waste textiles can all be recycled,
                    the effect is equivalent to saving 24 million tons of crude oil and
                    1/3 of China’s total cotton planting area every year, thus reducing
                    80 million tons of carbon dioxide emissions.
                </p>
            </div>
        </div>
        <div class="has-boxtile-wrapper">
            <h4>What are the raw materials?</h4>
            <br />
            <div class="has-boxtile-list">
                <a v-for="item in boxtileList" :key="item">{{item}}</a>
            </div>
        </div>
        <div class="has-boxtile-wrapper">
            <h4>What is in our blind box?</h4>
            <br />
            Various aesthetically-appealing and practical daily items;
            raw materials for teaching and creation; customized services...
            <div ref="container" class="keen-slider">
                <div class="keen-slider__slide number-slide1">
                    <img :src="boxtileImg"/>
                </div>
                <div class="keen-slider__slide number-slide2">
                    <img :src="boxtileImg"/>
                </div>
            </div>
        </div>

        <div class="links-wrapper">
            <a v-for="item in links" :key="item" :href="item.link" target="_blank">
                <img :src="item.img" />
                <span>{{item.title}}</span>
            </a>
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';
import { useKeenSlider } from 'keen-slider/vue.es';
import 'keen-slider/keen-slider.min.css';

const animation = { duration: 80000, easing: (t) => t };

export default defineComponent({
  name: 'Home',
  setup() {
    const swiperImages = reactive([{
      img: require('../assets/images/home_swiper_1.jpg'),
      text: 'As we focus on waste materials of textile industries, Boxtile will make the best use of the “gifts from industrial production” to design and create items that will later possess special meanings in people’s daily lives.',
    }, {
      img: require('../assets/images/home_swiper_2.jpg'),
      text: 'Boxtile encourages the spirit of both independence and cooperation, and provides online job opportunities for talented personnels who are interested in and capable of designing and tailoring.',
    }, {
      img: require('../assets/images/home_swiper_3.jpg'),
      text: 'Boxtile provides daily items made of textile wastes in the form of blind box. Moreover, we will launch raw materials blind box consisting of pieces of textile wastes from factories, aiding the development of charity, education and art industries.',
    }, {
      img: require('../assets/images/home_swiper_4.jpg'),
      text: 'Boxtile offers customize services. Tell us what’s kind of product you want and we will try our best to fulfill your needs!',
    },
    ]);
    const links = reactive([{
      img: require('../assets/images/home_link_1.jpg'),
      link: 'https://textilelearner.net/classification-of-textile-fibers',
      title: 'Introduction to raw materials',
    }, {
      img: require('../assets/images/home_link_2.jpg'),
      link: 'https://www.youtube.com/watch?v=DwQEQM2YUn8&list=PLwQq1-SdsNvYcdi6lQA8NnV6wNkisWPox',
      title: 'Fashion Design Tutorial Videos',
    }, {
      img: require('../assets/images/home_link_3.jpg'),
      link: 'https://www.youtube.com/watch?v=TCo7jEF-aDE',
      title: 'Handcraft/Sewing Courses',
    }, {
      img: require('../assets/images/home_link_4.jpg'),
      link: 'https://www.greenplan.gov.sg/',
      title: 'Learn more about "The Green Plan"',
    }, {
      img: require('../assets/images/home_link_5.jpg'),
      link: 'https://forums.thefashionspot.com/',
      title: 'Fashion Design Community',
    }, {
      img: require('../assets/images/home_link_6.jpg'),
      link: 'https://thehandmadeforum.boards.net/',
      title: 'Craftsmanship community',
    },
    ]);
    const boxtileList = reactive([
      'Cotton',
      'linen',
      'silk',
      'wool',
      'rayon',
      'synthetic',
    ]);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const boxtileImg = ref(require('../assets/images/boxtile.jpg'));
    const [container] = useKeenSlider({
      loop: true,
      renderMode: 'performance',
      drag: false,
      created(s) {
        s.moveToIdx(5, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
    });
    return {
      boxtileImg,
      container,
      swiperImages,
      links,
      boxtileList,
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
        height: 500px;
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
        grid-row-gap: 50px;
        justify-content: space-between;
        text-align: center;
    }
    .links-wrapper a {
        line-height: 30px;
    }
    .links-wrapper a:hover {
        opacity: 0.8;
    }
    .links-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .why-boxtile-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px 0;
        background: #eee;
        padding: 30px 0;
    }
    .why-boxtile {
        width: 400px;
        height: 400px;
        background: url(../assets/images/boxtile_why.jpeg);
        background-size: cover;
        flex-grow: 0;
        margin-right: 30px;
    }
    .why-content {
        width: 500px;
    }
    .has-boxtile-wrapper {
        text-align: center;
        padding: 30px 0;
        border: 1px solid #eee;
        margin-bottom: 30px;
    }
    .has-boxtile-list {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }
    .has-boxtile-list a{
        width: 120px;
        line-height: 35px;
        border: 1px solid #eee;
        border-radius: 3px;
        color: #666;
    }
    .has-boxtile-list a:hover{
        color: #333;
        border: 1px solid #666;
        cursor: pointer;
    }
    .keen-slider img {
        height: 300px;
    }
    .swipper-item-text {
        font-size: 16px;
        position: absolute;
        color: #fff;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>
