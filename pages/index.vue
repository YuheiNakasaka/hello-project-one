<template>
  <div class="container">
    <div class="groups">
      <div class="group">
        <div class="group-name">
          <h1>モーニング娘。</h1>
        </div>
        <div class="members">
          <Member
            v-for="(member, i) in members"
            :key="i"
            :item="member"
          ></Member>
        </div>
      </div>
      <div class="group"></div>
      <div class="group"></div>
      <div class="group"></div>
      <div class="group"></div>
      <div class="group"></div>
      <div class="group"></div>
    </div>
  </div>
</template>

<script>
import Member from '@/components/Member.vue'
export default {
  components: { Member },
  data: function() {
    return {
      members: [
        {
          name: '譜久村聖',
          yomi: 'ふくむらみずき',
          color: '#e5007f',
          profile:
            'http://www.helloproject.com/morningmusume/profile/mizuki_fukumura/',
          sns: [
            {
              name: 'Instagram',
              class: 'instagram',
              link: 'https://www.instagram.com/mizuki_fukumura.official/'
            },
            {
              name: 'Ameba',
              class: 'ameba',
              link: 'https://ameblo.jp/morningmusume-9ki/theme-10059757620.html'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  .groups {
    .group {
      .group-name {
        height: 50px;
        background-color: rgb(47, 117, 188);
        padding: 5px;
        h1 {
          margin: 0;
          font-size: 20pt;
          font-weight: bold;
          color: #fff;
        }
      }
      .members {
      }
    }
  }
}
</style>
