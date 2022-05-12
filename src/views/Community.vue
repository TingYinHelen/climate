<template>
    <div class="community-wrapper">
        <div class="community-main">
            <p>Boxtile平台将上线「盲盒互换」、「盲盒故事」、「盲盒评价」等单元，
    此功能正在开发中，敬请期待 ：）</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Community',
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const img = ref(require('../assets/images/community.jpg'));
    return {
      img,
    };
  },
});
</script>
<style>
    .community-wrapper {
        height: calc(100vh - 40px);
        background: url(../assets/images/community.jpg);
        background-size: cover;
    }
    .community-main {
        width: 1200px;
        margin: 0 auto;
        position: relative;
        height: 100%;
    }
    .community-wrapper img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }
    .community-wrapper p {
        position: absolute;
        color: #fff;
        width: 100%;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
    }
</style>
