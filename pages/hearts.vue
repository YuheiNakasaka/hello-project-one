<template>
  <div class="container">
    <div class="header">
      <div class="header-title">
        <h1>お気に入り</h1>
      </div>
    </div>
    <div class="groups">
      <div class="group">
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
      morningMusume: 'members/morningMusume'
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
    padding-top: 49px;
    .group {
      .members {
        width: 100%;
      }
    }
  }
}
</style>
