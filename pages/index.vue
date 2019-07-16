<template>
  <div class="container">
    <Header :title="`ホーム`" :icon="true"></Header>
    <div class="subtabs">
      <div class="subtab" :class="activeSubtab === 0 ? 'on' : ''" @click="onSubtab(0)">
        <span>現役</span>
      </div>
      <div class="subtab" :class="activeSubtab === 1 ? 'on' : ''" @click="onSubtab(1)">
        <span>OG</span>
      </div>
    </div>
    <div v-if="activeSubtab === 0" class="groups actives">
      <div class="group a">
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
      <div class="group b">
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
      <div class="group c">
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
      <div class="group d">
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
          <Member v-for="(member, i) in countryGirls" :key="i" :item="member"></Member>
        </div>
      </div>
      <div class="group e">
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
      <div class="group f">
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
          <Member v-for="(member, i) in tsubakiFactory" :key="i" :item="member"></Member>
        </div>
      </div>
      <div class="group g">
        <div class="team">
          <div class="group-name">
            <h1>CHIKA#TETSU</h1>
          </div>
          <div class="group-sns">
            <a href="https://twitter.com/BEYOOOOONDS_" target="_blank" class="twitter">Twitter</a>
            <a href="https://www.instagram.com/beyooooonds_official/" target="_blank" class="instagram">Instagram</a>
          </div>
        </div>
        <div class="members">
          <Member v-for="(member, i) in chicatetsu" :key="i" :item="member"></Member>
        </div>
      </div>
      <div class="group h">
        <div class="team">
          <div class="group-name">
            <h1>雨ノ森川海</h1>
          </div>
          <div class="group-sns">
            <a href="https://twitter.com/BEYOOOOONDS_" target="_blank" class="twitter">Twitter</a>
            <a href="https://www.instagram.com/beyooooonds_official/" target="_blank" class="instagram">Instagram</a>
          </div>
        </div>
        <div class="members">
          <Member v-for="(member, i) in amenomorikawaumi" :key="i" :item="member"></Member>
        </div>
      </div>
      <div class="group i">
        <div class="team">
          <div class="group-name">
            <h1>BEYOOOOONDS</h1>
          </div>
          <div class="group-sns">
            <a href="https://twitter.com/BEYOOOOONDS_" target="_blank" class="twitter">Twitter</a>
            <a href="https://www.instagram.com/beyooooonds_official/" target="_blank" class="instagram">Instagram</a>
            <a href="https://www.youtube.com/channel/UCE5GP4BHm2EJx4xyxBVSLlg" target="_blank" class="youtube"
              >Youtube</a
            >
          </div>
        </div>
        <div class="members">
          <Member v-for="(member, i) in beyooooonds" :key="i" :item="member"></Member>
        </div>
      </div>
    </div>
    <div v-else class="groups ogs">
      <div class="group ">
        <div class="team">
          <div class="group-name">
            <h1>OGメンバー</h1>
          </div>
        </div>
        <div class="members">
          <Member v-for="(member, i) in ogMembers" :key="`${i}_${member.link}`" :item="member"></Member>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Member from '@/components/Member.vue'
import { mapGetters } from 'vuex'
export default {
  components: { Header, Member },
  data: function() {
    return {
      activeSubtab: 0
    }
  },
  computed: {
    ...mapGetters({
      morningMusume: 'members/morningMusume',
      angerme: 'members/angerme',
      juicejuice: 'members/juicejuice',
      kobusiFactory: 'members/kobusiFactory',
      tsubakiFactory: 'members/tsubakiFactory',
      countryGirls: 'members/countryGirls',
      beyooooonds: 'members/beyooooonds',
      chicatetsu: 'members/chicatetsu',
      amenomorikawaumi: 'members/amenomorikawaumi',
      ogMembers: 'members/ogMembers'
    })
  },
  mounted() {},
  methods: {
    onSubtab(tab) {
      this.activeSubtab = tab
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  .subtabs {
    width: 100%;
    margin-top: 40px;
    height: 35px;
    line-height: 35px;
    display: flex;
    background-color: #fff;
    .subtab {
      width: 50%;
      text-align: center;
      color: #bbb;
      letter-spacing: 4px;
      &.on {
        font-weight: bold;
        color: rgb(46, 167, 128);
      }
    }
  }
  .groups {
    .group {
      z-index: 1;
      .team {
        z-index: 10000;
        border-bottom: 1px solid #eee;
        &.fixed {
          position: fixed;
          width: 100%;
          top: 0;
        }
        .group-name {
          height: 49px;
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
        &.fixed {
          padding-top: 83px;
        }
      }
    }
  }
}
</style>
