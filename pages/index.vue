<template>
  <div class="container">
    <div class="groups">
      <div class="group">
        <div class="group-name">
          <h1>モーニング娘。</h1>
        </div>
        <div class="members">
          <Member
            v-for="(member, i) in allMembers"
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
    return {}
  },
  computed: {
    allMembers() {
      return this.$store.state.members.items
    }
  },
  mounted() {}
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
        width: 100%;
      }
    }
  }
}
</style>
