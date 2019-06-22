<template>
  <div class="member">
    <div class="member-name" :style="'background-color: ' + item.color + '; width: ' + memberNameWidth + 'px;'">
      <a :href="item.profile" target="_blank">
        <span>{{ item.name }}</span>
      </a>
    </div>
    <div class="member-sns">
      <a v-for="(sns, i) in item.sns" :key="i" :class="sns.class" :href="sns.link">{{ sns.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Member',
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      memberNameWidth: 0
    }
  },
  mounted() {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || 0
    this.memberNameWidth = windowWidth * 0.67
  }
}
</script>

<style lang="scss" scoped>
.member {
  height: 68px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  .member-name {
    a {
      height: 68px;
      width: 100%;
      padding: 15px 0;
      text-align: center;
      font-size: 18pt;
      color: #fff;
      font-weight: bold;
    }
  }
  .member-sns {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    a {
      height: 34px;
      font-size: 12pt;
      padding: 7px 0;
      color: #fff;
      font-weight: bold;
      &.instagram {
        background-color: #833ab4;
      }
      &.ameba {
        background-color: #2d8b3b;
      }
    }
  }
}
</style>
