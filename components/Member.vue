<template>
  <div class="member" :style="`height: ${columnHeight}px;`">
    <div class="member-name" :style="'background-color: ' + item.color + '; width: ' + memberNameWidth + 'px;'">
      <a :href="item.profile" target="_blank" :style="`height: ${columnHeight}px; line-height: ${columnHeight}px;`">
        <span>{{ item.name }}</span>
      </a>
      <div
        v-if="heartActive"
        class="heart-btn"
        :style="`height: ${columnHeight}px; line-height: ${columnHeight}px;`"
        @click="removeHeart"
      >
        <i class="fa fa-heart on" aria-hidden="true"></i>
      </div>
      <div
        v-else
        class="heart-btn"
        :style="`height: ${columnHeight}px; line-height: ${columnHeight}px;`"
        @click="addHeart"
      >
        <i class="fa fa-heart" aria-hidden="true"></i>
      </div>
    </div>
    <div class="member-sns">
      <a v-for="(sns, i) in item.sns" :key="i" :class="sns.class" :href="sns.link" target="_blank">{{ sns.name }}</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
      memberNameWidth: 0,
      heartActive: false,
      columnHeight: 68
    }
  },
  created() {
    const columnCount = this.item.sns.length <= 2 ? 2 : this.item.sns.length
    this.columnHeight = columnCount * 34
  },
  mounted() {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || 0
    this.memberNameWidth = windowWidth * 0.67

    // vue-persistedstateのheart復帰のタイミングがよくわからん
    setTimeout(() => {
      this.isHearted()
    }, 60)
  },
  methods: {
    ...mapActions({
      add: 'hearts/add',
      remove: 'hearts/remove',
      include: 'hearts/include'
    }),
    addHeart() {
      this.heartActive = true
      this.add(this.item)
    },
    removeHeart() {
      this.heartActive = false
      this.remove(this.item)
    },
    isHearted() {
      this.include(this.item).then(resp => {
        this.heartActive = resp > 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.member {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  .member-name {
    position: relative;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    a {
      width: 100%;
      padding: 0;
      text-align: center;
      font-size: 18pt;
      color: #fff;
      font-weight: bold;
    }
    .heart-btn {
      position: absolute;
      top: 0;
      width: 45px;
      padding: 0 0 0 5px;
      z-index: 100;
      cursor: pointer;
      i {
        font-size: 24px;
        color: #eee;
        &.on {
          color: #ff0094;
        }
      }
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
      border-bottom: 1px solid #eee;
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
