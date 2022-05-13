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
                    1.College degree or above or have more than 2
                    years working experience in garment design <br />
                    2. Be able to complete the design planning independently,
                    including the main style, color, style, etc. <br />
                    3. Have unique insights into apparel design, creative
                    fashion thinking and understanding of trend situation <br />
                    4. Have a strong sense of teamwork and express the brand concept
                    through a series of designs <br />
                    *This position is a remote collaboration model. Age, gender,
                    and physical disability friendly<br />
                    Welcome to attach your work and submit your resume to:
                    chumzhou1205@outlook.com<br />
                    If you meet the requirements, we will
                    arrange for a remote interview<br />
                    If the interview is successful, we will sign a
                    contract with you to ensure your legal rights<br />
                </p>
            </li>
            <li class="product-sku">
                <p>
                    1. High school education or above or 2 years of
                    experience in fabric sewing <br />
                    2. Complete the production and modification according to
                    the designer's draft within reasonable time <br />
                    3. Familiar with all kinds of fabric knowledge, skilled in using relevant
                    sewing tools and skilled in handicraft <br />
                    4. Good ability to absorb new things, work conscientiously,
                    careful and thoughtful <br />
                    5. Have the ability to work independently and effectively with a
                     sense of responsibility
                     and good communication
                     and cooperation spirit<br />
                     *This position is a remote collaboration model.
                      Age, gender, and physical disability friendly<br />
                    Welcome to attach your work and submit your resume
                     to: chumzhou1205@outlook.com<br />
                    If you meet the requirements, we will arrange a
                     remote interview<br />
                    If the interview is successful, we
                     will sign a contract with you to ensure your legal rights<br />
                </p>
            </li>
        </ul>
        <div class="product-bottom">
            <div class="product-flow-wrapper">
                <span>Process to become a cooperative designer / craftsman: </span>
                <div class="product-flow">
                    <span>submit resume (with art portfolio) </span>
                    <el-icon color="#409EFC"><DArrowRight /></el-icon>
                    <span>remote interview (with art portfolio)</span>
                    <el-icon color="#409EFC"><DArrowRight /></el-icon>
                    <span>sign contract </span>
                    <el-icon color="#409EFC"><DArrowRight /></el-icon>
                    <span>verified by platform</span>
                </div>
            </div>
            <div class="product-tip"> *In case of fraud, one will never be hired</div>
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
        text: 'Become a contract designer',
      },
      {
        img: require('../assets/images/opportunity_2.jpg'),
        text: 'Become a contract craftsman',
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
        width: 49%;
    }
    .opportunity-main p {
        height: auto;
        text-align: left;
    }
</style>
