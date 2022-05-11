<template>
    <div class="about-wrapper">
        <div class="about-describe">
            品牌故事<br /><br />
            Boxtile是首家关注纺织行业边角料再造的品牌，
            致力于解决服装生产链上的资源浪费问题，整合独立设计师、
            独立裁缝手艺人协同合作，打造新商业模式。<br />
            一方面解决资源浪费问题，减少焚烧废弃材料的环境污染，
            倡导人们养成可持续生活的意识，注重物品的价值所在；
            另一方面为有想法、有创意、有执行力的人才提供开放协作的工作机会，
            让每一个动作都有不同层面的意义存在。<br />
            为你，为我，为社会，为地球，我们愿意这样做！
        </div>
        <div class="about-members">
            <h4>团队成员</h4>
            <ul>
                <li>
                    <i></i>
                    <span>一句话个人介绍</span>
                </li>
                <li>
                    <i></i>
                    <span>一句话个人介绍</span>
                </li>
                <li>
                    <i></i>
                    <span>一句话个人介绍</span>
                </li>
                <li>
                    <i></i>
                    <span>一句话个人介绍</span>
                </li>
                <li>
                    <i></i>
                    <span>一句话个人介绍</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
});
</script>
<style>
    .about-wrapper {
        width: 1000px;
        margin: 0 auto;
        border: 1px solid red;
        height: calc(100vh - 40px);
        display: flex;
        justify-content: space-around;
        padding: 30px;
    }
    .about-describe {
        width: 300px;
    }
    .about-members {
        width: 300px;
    }
    .about-members h4 {
        margin-bottom: 10px;
    }
    .about-members li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    .about-members li i{
        width: 50px;
        height: 50px;
        border: 1px solid #eee;
        border-radius: 50%;
        margin-right: 10px;
    }
</style>
