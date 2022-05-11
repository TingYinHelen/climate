<template>
    <div class="product-wrapper">
        <ul class="product-main">
            <li>
                <img src="https://wx2.sinaimg.cn/mw2000/7709ac50ly1h14hbijoo4j22c0340b2c.jpg" />
                <h3>成品盲盒</h3>
            </li>
            <li>
                <img src="https://wx2.sinaimg.cn/mw2000/7709ac50ly1h14hbijoo4j22c0340b2c.jpg" />
                <h3>原材料盲盒</h3>
            </li>
            <li>
                <img src="https://wx2.sinaimg.cn/mw2000/7709ac50ly1h14hbijoo4j22c0340b2c.jpg" />
                <h3>定制服务</h3>
            </li>
        </ul>
        <ul class="product-main">
            <li class="product-sku">
                <p>由Boxtile的签约设计师、手艺人倾心打造独特的盲盒，盲盒里必然装满了各种各样的想法</p>
                <a href="">Buy it !</a>
            </li>
            <li class="product-sku">
                <p>由Boxtile的签约设计师、手艺人倾心打造独特的盲盒，盲盒里必然装满了各种各样的想法</p>
                <a href="">Buy it !</a>
            </li>
            <li class="product-sku">
                <p>由Boxtile的签约设计师、手艺人倾心打造独特的盲盒，盲盒里必然装满了各种各样的想法</p>
                <a href="">Buy it !</a>
            </li>
        </ul>
        <div>
            盲盒购买流程
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '../assets/style/product.css';

export default defineComponent({
  name: 'Product',
});
</script>
