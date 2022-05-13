<template>
    <div class="community-wrapper">
        <div class="community-main">
            <p>
                Boxtile platform will launch "Blind Box Swap",
                "Blind Box Story", "Blind Box Evaluation" and other units. <br />
                 This function is under development,
                please look forward to it:)
            </p>
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
