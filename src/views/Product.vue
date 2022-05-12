<template>
    <div class="product-wrapper">
        <ul class="product-main">
            <li v-for="item in productImgs" :key="item">
                <img :src="item.img" />
                <h3>{{item.text}}</h3>
            </li>
        </ul>
        <ul class="product-main">
            <li class="product-sku">
                <p>由Boxtile的签约设计师、手艺人倾心打造独特的盲盒，盲盒里必然装满了各种各样的想法…</p>
                <a>Buy it !</a>
            </li>
            <li class="product-sku">
                <p>
                    由Boxtile把控质量的纺织边角材料盲盒，<br />
                    目前已有主题盲盒：<br />
                    森林主题<br />
                    海洋主题<br />
                    天空主题<br />
                    阳光主题<br />
                    清新主题<br />
                    朋克主题<br />
                    …
                </p>
                <a>Buy it !</a>
            </li>
            <li class="product-sku">
                <p>由Boxtile的签约设计师、手艺人根据您的需求倾心为您打造专属的盲盒。</p>
                <a>Buy it !</a>
            </li>
        </ul>
        <div class="product-bottom">
            <div class="product-flow-wrapper">
                <span>盲盒购买流程：</span>
                <div class="product-flow">
                    <span>用户购买下单</span>
                    <el-icon color="#409EFC"><DArrowRight /></el-icon>
                    <span>Boxtile仓库发货</span>
                    <el-icon color="#409EFC"><DArrowRight /></el-icon>
                    <span>物流公司运输</span>
                    <el-icon color="#409EFC"><DArrowRight /></el-icon>
                    <span>用户签收盲盒</span>
                </div>
            </div>
            <div class="product-tip">*售出盲盒Boxtile不予退换，未来会开设「用户社区」，敬请期待：）</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import '../assets/style/product.css';

export default defineComponent({
  name: 'Product',
  setup() {
    const productImgs = reactive([{
      img: require('../assets/images/product_1.jpg'),
      text: '成品盲盒',
    }, {
      img: require('../assets/images/product_2.jpg'),
      text: '原材料盲盒',
    }, {
      img: require('../assets/images/product_3.jpg'),
      text: '定制服务',
    },
    ]);
    return {
      productImgs,
    };
  },
});
</script>
<style scoped>
    .product-main {
        width: 1200px;
        margin: 0 auto 30px;
    }
    .product-main img {
        width: 350px;
        height: 250px;
        object-fit: cover;
    }
    .product-sku {
        position: relative;
    }
    .product-sku p {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
    .product-sku a {
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        line-height: 35px;
        width: 120px;
        border: 1px solid #eee;
        text-align: center;
        background: #fff;
        border-radius: 3px;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.16);
    }
</style>
