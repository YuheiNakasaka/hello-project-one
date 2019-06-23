<template>
  <div class="container">
    <Header :title="`お気に入り`"></Header>
    <div v-if="allHearts.length > 0" class="groups">
      <div class="group">
        <div class="members">
          <Member v-for="(member, i) in allHearts" :key="`${i}_${member.color}`" :item="member"></Member>
        </div>
      </div>
    </div>
    <div v-else class="no-items">
      <div class="item">
        <p>お気に入りがありません</p>
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
    return {}
  },
  computed: {
    ...mapGetters({
      allHearts: 'hearts/allHearts'
    })
  },
  mounted() {}
}
</script>

<style scoped lang="scss">
.container {
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 49px;
    .header-title {
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
  }
  .groups {
    padding-top: 50px;
    .group {
      .members {
        width: 100%;
      }
    }
  }
  .no-items {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px 30px;
    color: #999999;
    font-weight: bold;
    text-align: center;
    width: 300px;
    .item {
    }
  }
}
</style>
