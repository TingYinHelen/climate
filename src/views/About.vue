<template>
    <div class="about-wrapper">
        <div class="about-main">
            <div class="about-describe">
                Boxtile is the first company which focuses on
                 recycling of textile wastes， and giving them new
                economic values using a creative business model.
                Boxtile is committed to solving the problem of resource
                wastage in the textile industry. Through cooperation with
                individual designers, individual tailors, and craftsmen, we
                create a new business model that tackles wastage, reduces environmental
                pollution caused by conventional methods of waste textiles processing,
                and encourages people to develop the mindset of sustainable living and
                focus on the value of goods. On the other hand, we provide open and collaborative
                work opportunities for innovative and executive talents.
                We hope that our project can bring meanings to multiple
                 industries and a wide range of people. For you, for
                  society and for our planet, we are willing to do so!
            </div>
            <div class="about-members">
                <h4>Team Members</h4>
                <ul>
                    <li v-for="item in avatarList" :key="item">
                        <img :src="item.img" />
                        <span>{{item.text}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'About',
  setup() {
    const avatarList = reactive([{
      img: require('../assets/images/avatar1.jpeg'),
      text: '闯闯Clara: Gen-Z, unlimited passion for environmental protection.',
    }, {
      img: require('../assets/images/avatar2.jpeg'),
      text: '熙然Christina: Student, environmentally-concerned personnel, animal lover',
    }, {
      img: require('../assets/images/avatar3.jpeg'),
      text: '然然: Student, willing to do a part for the environment.',
    }, {
      img: require('../assets/images/avatar4.jpeg'),
      text: 'Helen: Student, A coder',
    }, {
      img: require('../assets/images/avatar5.jpeg'),
      text: 'Glowd: Student, A hacker',
    }]);
    return {
      avatarList,
    };
  },
});
</script>
<style scoped>
    .about-wrapper {
        height: calc(100vh - 60px);
        padding: 30px;
        background: url(../assets/images/about.jpg);
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .about-main {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;

    }
    .about-wrapper .about-describe {
        width: 300px;
        color: #fff;
    }
    .about-members {
        width: 300px;
    }
    .about-members h4 {
        margin-bottom: 10px;
        color: #fff;
    }
    .about-members li {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .about-members li span{
        color: #fff;
    }
    .about-members li img{
        width: 50px;
        height: 50px;
        border: 1px solid #eee;
        border-radius: 50%;
        margin-right: 10px;
        flex-shrink: 0;
        object-fit: cover;
    }
</style>
