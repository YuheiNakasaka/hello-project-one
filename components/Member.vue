<template>
  <div class="member">
    <div class="member-name" :style="'background-color: ' + item.color">
      <a :href="item.profile" target="_blank">{{ item.name }}</a>
    </div>
    <div class="member-sns">
      <a
        v-for="(sns, i) in item.sns"
        :key="i"
        :class="sns.class"
        :href="sns.link"
        >{{ sns.name }}</a
      >
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
  mounted() {}
}
</script>

<style lang="scss" scoped>
.member {
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .member-name {
    flex-grow: 4;
    a {
      width: 100%;
      padding: 11px 0;
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
      font-size: 12pt;
      padding: 5.5px 0;
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
