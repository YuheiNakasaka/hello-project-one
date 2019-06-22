<template>
  <div class="container">
    <div class="groups">
      <div class="group">
        <div class="team">
          <div class="group-name">
            <h1>モーニング娘。</h1>
          </div>
          <div class="group-sns">
            <a href="https://twitter.com/MorningMusumeMg" target="_blank" class="twitter">Twitter</a>
            <a href="https://www.instagram.com/morningmusume_official/" target="_blank" class="instagram">Instagram</a>
            <a href="https://www.youtube.com/user/morningmusumechannel" target="_blank" class="youtube">Youtube</a>
          </div>
        </div>
        <div class="members">
          <Member v-for="(member, i) in morningMusume" :key="i" :item="member"></Member>
        </div>
      </div>
      <div class="group">
        <div class="team">
          <div class="group-name">
            <h1>アンジュルム</h1>
          </div>
          <div class="group-sns">
            <a href="https://twitter.com/angerme_upfront" target="_blank" class="twitter">Twitter</a>
            <a href="https://www.instagram.com/angerme_official/" target="_blank" class="instagram">Instagram</a>
            <a href="https://www.youtube.com/user/smileagechannel" target="_blank" class="youtube">Youtube</a>
          </div>
        </div>
        <div class="members">
          <Member v-for="(member, i) in angerme" :key="i" :item="member"></Member>
        </div>
      </div>
      <div class="group">
        <div class="team">
          <div class="group-name">
            <h1>Juice=Juice</h1>
          </div>
          <div class="group-sns">
            <a href="https://twitter.com/JuiceJuice_uf" target="_blank" class="twitter">Twitter</a>
            <a href="https://www.instagram.com/juice_juice_official/" target="_blank" class="instagram">Instagram</a>
            <a href="https://www.youtube.com/user/juicejuicechannel" target="_blank" class="youtube">Youtube</a>
          </div>
        </div>
        <div class="members">
          <Member v-for="(member, i) in juicejuice" :key="i" :item="member"></Member>
        </div>
      </div>
      <div class="group">
        <div class="team">
          <div class="group-name">
            <h1>こぶしファクトリー</h1>
          </div>
          <div class="group-sns">
            <a href="https://twitter.com/kobushifac_uf" target="_blank" class="twitter">Twitter</a>
            <a href="https://www.instagram.com/kobushifactory_official/" target="_blank" class="instagram">Instagram</a>
            <a href="https://www.youtube.com/channel/UCt3f_Tu1lNua1xLQZu2Td-w" target="_blank" class="youtube"
              >Youtube</a
            >
          </div>
        </div>
        <div class="members">
          <Member v-for="(member, i) in kobusiFactory" :key="i" :item="member"></Member>
        </div>
      </div>
      <div class="group">
        <div class="team">
          <div class="group-name">
            <h1>つばきファクトリー</h1>
          </div>
          <div class="group-sns">
            <a href="https://twitter.com/tsubakifac_uf" target="_blank" class="twitter">Twitter</a>
            <a href="https://www.instagram.com/tsubakifactory_official/" target="_blank" class="instagram">Instagram</a>
            <a href="https://www.youtube.com/channel/UCXTsCXNGHmePgo3a47hnsAA" target="_blank" class="youtube"
              >Youtube</a
            >
          </div>
        </div>
        <div class="members">
          <Member v-for="(member, i) in morningMusume" :key="i" :item="member"></Member>
        </div>
      </div>
      <div class="group">
        <div class="team">
          <div class="group-name">
            <h1>カントリーガールズ</h1>
          </div>
          <div class="group-sns">
            <a href="https://twitter.com/countrygirls_uf" target="_blank" class="twitter">Twitter</a>
            <a href="https://www.instagram.com/countrygirls_official/" target="_blank" class="instagram">Instagram</a>
            <a href="https://www.youtube.com/channel/UCoxHJjctNXq1UgGk1vx3LUw" target="_blank" class="youtube"
              >Youtube</a
            >
          </div>
        </div>
        <div class="members">
          <Member v-for="(member, i) in morningMusume" :key="i" :item="member"></Member>
        </div>
      </div>
      <div class="group">
        <div class="team">
          <div class="group-name">
            <h1>BEYOOOOONDS</h1>
          </div>
          <div class="group-sns">
            <a href="https://twitter.com/BEYOOOOONDS_" target="_blank" class="twitter">Twitter</a>
            <a href="https://www.instagram.com/beyooooonds_official/" target="_blank" class="instagram">Instagram</a>
          </div>
        </div>
        <div class="members">
          <Member v-for="(member, i) in morningMusume" :key="i" :item="member"></Member>
        </div>
      </div>
      <div class="group">
        <div class="team">
          <div class="group-name">
            <h1>CHIKA#TETSU</h1>
          </div>
        </div>
        <div class="members">
          <Member v-for="(member, i) in morningMusume" :key="i" :item="member"></Member>
        </div>
      </div>
      <div class="group">
        <div class="team">
          <div class="group-name">
            <h1>雨ノ森川海</h1>
          </div>
        </div>
        <div class="members">
          <Member v-for="(member, i) in morningMusume" :key="i" :item="member"></Member>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Member from '@/components/Member.vue'
import { mapGetters } from 'vuex'
export default {
  components: { Member },
  data: function() {
    return {}
  },
  computed: {
    ...mapGetters({
      morningMusume: 'members/morningMusume',
      angerme: 'members/angerme',
      juicejuice: 'members/juicejuice',
      kobusiFactory: 'members/kobusiFactory'
    })
  },
  mounted() {}
}
</script>

<style scoped lang="scss">
.container {
  .groups {
    .group {
      .team {
        .group-name {
          background-color: rgb(47, 117, 188);
          padding: 5px;
          h1 {
            margin: 0;
            vertical-align: 50px;
            font-size: 20pt;
            font-weight: bold;
            color: #fff;
          }
        }
        .group-sns {
          display: flex;
          flex-direction: row;
          text-align: center;
          a {
            flex-grow: 1;
            padding: 7.5px;
            color: #fff;
            font-weight: bold;
            font-size: 12pt;
            &.twitter {
              background-color: #00aced;
            }
            &.instagram {
              background-color: #833ab4;
            }
            &.youtube {
              background-color: #ff0000;
            }
          }
        }
      }
      .members {
        width: 100%;
      }
    }
  }
}
</style>
