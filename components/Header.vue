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
      if (prevPos - currentPos < 0 && currentPos > 0) {
        document.querySelector('#header').classList.add('hide')
        document.querySelector('#header').classList.remove('show')
      } else {
        document.querySelector('#header').classList.add('show')
        document.querySelector('#header').classList.remove('hide')
      }
      prevPos = currentPos
    })
  }
}
</script>

<style lang="scss" scoped>
@keyframes slideInUp {
  0% {
    visibility: visible;
    transform: translateZ(0);
  }
  to {
    transform: translate3d(0, -100%, 0);
  }
}
@keyframes slideInDown {
  0% {
    visibility: visible;
    transform: translate3d(0, -100%, 0);
  }
  to {
    transform: translateZ(0);
  }
}
#header {
  width: 100%;
  height: 50px;
  z-index: 10006;
  position: fixed;
  top: 0;
  overflow: visible;
  background-color: #fff;
  border-top: 1px solid #f7f7f7;
  &.show {
    animation: slideInDown 0.1s forwards linear;
    visibility: visible;
  }
  &.hide {
    animation: slideInUp 0.1s forwards linear;
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
