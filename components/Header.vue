<template>
  <div id="header">
    <div class="header-item">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
      default: () => {
        return ''
      }
    }
  },
  mounted() {
    let prevPos = window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop
    window.addEventListener('scroll', () => {
      const currentPos = window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop
      if (prevPos - currentPos < 0) {
        document.querySelector('#header').classList.add('hide')
      } else {
        document.querySelector('#header').classList.remove('hide')
      }
      prevPos = currentPos
    })
  }
}
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  height: 50px;
  z-index: 10006;
  position: fixed;
  top: 0;
  overflow: visible;
  background-color: #fff;
  border-top: 1px solid #f7f7f7;
  &.hide {
    visibility: hidden;
  }
  .header-item {
    position: relative;
    float: left;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    span {
      font-weight: bold;
    }
  }
}
</style>
