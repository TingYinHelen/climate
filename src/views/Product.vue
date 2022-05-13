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
                <p>
                    A unique blind box created by Boxtile's contracted
                    designers and craftsmen. The blind boxes consist of
                    their innovative ideas.
                </p>
                <a>Buy it !</a>
            </li>
            <li class="product-sku">
                <p>
                    Raw material blind box: waste textile
                    material blind box with quality control by Boxtile,<br />
                    There are currently themed blind boxes:<br />
                    Forest theme<br />
                    Ocean theme<br />
                    Sky theme<br />
                    Sunshine theme<br />
                    …
                </p>
                <a>Buy it !</a>
            </li>
            <li class="product-sku">
                <p>Boxtile's contracted designers and craftsmen will
                    create your own blind box according to your needs.</p>
                <a>Buy it !</a>
            </li>
        </ul>
        <div class="product-bottom">
            <div class="product-flow-wrapper">
                <span>Blind box purchase process:</span>
                <div class="product-flow">
                    <span>user purchases and places an order</span>
                    <el-icon color="#409EFC"><DArrowRight /></el-icon>
                    <span>repository delivery</span>
                    <el-icon color="#409EFC"><DArrowRight /></el-icon>
                    <span>logistics company transportation</span>
                    <el-icon color="#409EFC"><DArrowRight /></el-icon>
                    <span>user receives blind box</span>
                </div>
            </div>
            <div class="product-tip">
                * Blind boxes that are sold will not be
                returned or exchanged. A "user community"
                will be launched in the future, so stay tuned:)
            </div>
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
      text: 'Blind Box',
    }, {
      img: require('../assets/images/product_2.jpg'),
      text: 'Raw Material Blind Box',
    }, {
      img: require('../assets/images/product_3.jpg'),
      text: 'Customized Service',
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
