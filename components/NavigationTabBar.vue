<template>
  <div id="tabbar">
    <div class="tabbar-item home" @click="onTab(0)">
      <div class="tabbar-item-btn">
        <i class="fa fa-home" aria-hidden="true" :class="currentTab === 0 ? 'active' : ''"></i>
      </div>
    </div>
    <div class="tabbar-item favorite" @click="onTab(1)">
      <div class="tabbar-item-btn">
        <i class="fa fa-heart" aria-hidden="true" :class="currentTab === 1 ? 'active' : ''"></i>
      </div>
    </div>
    <div class="tabbar-item other" @click="onTab(2)">
      <div class="tabbar-item-btn">
        <i class="fa fa-newspaper-o" aria-hidden="true" :class="currentTab === 2 ? 'active' : ''"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationTabBar',
  data() {
    return {
      currentTab: 0,
      intervalId: -1
    }
  },
  methods: {
    onTab(tab) {
      this.currentTab = tab
      this.changeCurrentPage(tab)
      this.smoothScroll(0)
    },
    changeCurrentPage(tab) {
      if (tab === 0) {
        this.$router.push(`/`)
      } else if (tab === 1) {
        this.$router.push(`/hearts`)
      } else if (tab === 2) {
        this.$router.push(`/others`)
      }
    },
    smoothScroll(pos) {
      if (this.intervalId !== -1) return
      let currentPos = window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop
      const move = (currentPos - pos) / -20
      this.intervalId = setInterval(() => {
        currentPos = window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop
        if (currentPos <= pos) {
          window.scrollTo(0, pos)
          clearInterval(this.intervalId)
          this.intervalId = -1
          return
        }
        window.scrollBy(0, move)
      }, 20)
    }
  }
}
</script>

<style lang="scss" scoped>
#tabbar {
  width: 100%;
  z-index: 10006;
  position: fixed;
  bottom: 0;
  overflow: visible;
  background-color: #fff;
  border-top: 1px solid #f7f7f7;
  .tabbar-item {
    position: relative;
    float: left;
    width: 33.3333%;
    height: 50px;
    line-height: 57px;
    .tabbar-item-btn {
      text-align: center;
      text-decoration: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-box-shadow: none;
      box-shadow: none;
      outline: none;
      i {
        font-size: 24px;
        color: #bfbfbf;
        &.active {
          color: rgb(46, 167, 128);
        }
      }
    }
  }
}
</style>
