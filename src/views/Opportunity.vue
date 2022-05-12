<template>
    <div class="opportunity-wrapper">
        <ul class="opportunity-main">
            <li v-for="item in opportunityImgs" :key="item">
                <img :src="item.img" />
                <h3>{{item.text}}</h3>
            </li>
        </ul>
        <ul class="opportunity-main" style="justify-content: space-between;">
            <li class="product-sku">
                <p>
                    1.大专或以上学历或有2年以上服装设计工作经验 <br />
                    2.能独立完成设计企划，包括主打风格、颜色、款式等 <br />
                    3.对服装设计有独到见解，具有时尚创意思维，了解潮流局势 <br />
                    4.具有强烈团队意识，将品牌的理念透过一系列的设计表达出来 <br />
                    *本岗位为远程协作模式，对年龄、性别、身体残健友好 <br />
                    欢迎附作品投递简历至：chumzhou1205@outlook.com <br />
                    如若符合要求，我们将安排远程面试 <br />
                    如若面试成功，我们将与您签署合作协议，确保您的法律权益 <br />
                </p>
            </li>
            <li class="product-sku">
                <p>1.高中或以上学历或有2年以上布料缝纫工作经验 <br />
                    2.在合理时间内按设计师稿件完成制作和修改 <br />
                    3.熟悉各种面料知识，熟练使用相关缝纫工具，手艺娴熟 <br />
                    4.吸收新事物能力强，工作认真踏实，细心周到 <br />
                    5.有责任心及有效独立工作的能力，具有良好的沟通合作精神 <br />
                    *本岗位为远程协作模式，对年龄、性别、身体残健友好 <br />
                    欢迎附作品投递简历至：chumzhou1205@outlook.com <br />
                    如若符合要求，我们将安排远程面试 <br />
                    如若面试成功，我们将与您签署合作协议，确保您的法律权益 <br />
                </p>
            </li>
        </ul>
        <div class="product-bottom">
            <div class="product-flow-wrapper">
                <span>成为Boxtile合作设计师/手艺人流程：</span>
                <div class="product-flow">
                    <span>投递简历（附作品）</span>
                    <el-icon color="#409EFC"><DArrowRight /></el-icon>
                    <span>面试（附作品）</span>
                    <el-icon color="#409EFC"><DArrowRight /></el-icon>
                    <span>签署合作协议</span>
                    <el-icon color="#409EFC"><DArrowRight /></el-icon>
                    <span>平台身份标识</span>
                </div>
            </div>
            <div class="product-tip"> *一旦出现欺诈行为将永不录用</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import '../assets/style/product.css';

export default defineComponent({
  name: 'Opportunity',
  setup() {
    const opportunityImgs = reactive([
      {
        img: require('../assets/images/opportunity_1.jpg'),
        text: '成为Boxtile签约设计师',
      },
      {
        img: require('../assets/images/opportunity_2.jpg'),
        text: '成为Boxtile签约手艺人',
      },
    ]);
    return {
      opportunityImgs,
    };
  },
});
</script>
<style scoped>
    .opportunity-wrapper {
        width: 1200px;
        margin: 0 auto;
    }
    .opportunity-main {
        display: flex;
        justify-content: space-around;
        text-align: center;
        line-height: 30px;
        margin-bottom: 30px;
    }
    .opportunity-main img{
        width: 350px;
        height: 250px;
        object-fit: cover;
    }
    .product-bottom {
        padding: 20px 0;
        background: #eee;
    }
    .opportunity-main li {
        width: 46%;
    }
    .opportunity-main p {
        height: auto;
    }
</style>
