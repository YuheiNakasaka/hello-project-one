<template>
  <div class="member">
    <div class="member-name" :style="'background-color: ' + item.color + '; width: ' + memberNameWidth + 'px;'">
      <a :href="item.profile" target="_blank">
        <span>{{ item.name }}</span>
      </a>
      <div v-if="heartActive" class="heart-btn" @click="removeHeart">
        <i class="fa fa-heart on" aria-hidden="true"></i>
      </div>
      <div v-else class="heart-btn" @click="addHeart">
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
      heartActive: false
    }
  },
  mounted() {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || 0
    this.memberNameWidth = windowWidth * 0.67
    this.isHearted()
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
  height: 68px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  .member-name {
    position: relative;
    a {
      height: 68px;
      width: 100%;
      padding: 15px 0;
      text-align: center;
      font-size: 18pt;
      color: #fff;
      font-weight: bold;
    }
    .heart-btn {
      position: absolute;
      top: 21px;
      left: 5px;
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
