<template>
  <div>
    <nuxt />
    <NavigationTabBar></NavigationTabBar>
  </div>
</template>

<script>
import NavigationTabBar from '@/components/NavigationTabBar.vue'
export default {
  components: { NavigationTabBar },
  created() {
    this.$router.push(`/`)
  }
}
</script>

<style>
html {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  display: block;
  text-decoration: none;
}

h1 {
  text-shadow: black 2px 0px 0px, black -2px 0px 0px, black 0px -2px 0px, black 0px 2px 0px, black 2px 2px 0px,
    black -2px 2px 0px, black 2px -2px 0px, black -2px -2px 0px, black 1px 2px 0px, black -1px 2px 0px,
    black 1px -2px 0px, black -1px -2px 0px, black 2px 1px 0px, black -2px 1px 0px, black 2px -1px 0px,
    black -2px -1px 0px, black 1px 1px 0px, black -1px 1px 0px, black 1px -1px 0px, black -1px -1px 0px;
}
a {
  text-shadow: black 1px 0px 0px, black -1px 0px 0px, black 0px -1px 0px, black 0px 1px 0px, black 1px 1px 0px,
    black -1px 1px 0px, black 1px -1px 0px, black -1px -1px 0px, black 1px 1px 0px, black -1px 1px 0px,
    black 1px -1px 0px, black -1px -1px 0px, black 1px 1px 0px, black -1px 1px 0px, black 1px -1px 0px,
    black -1px -1px 0px, black 1px 1px 0px, black -1px 1px 0px, black 1px -1px 0px, black -1px -1px 0px;
}
.container {
  padding-bottom: 51px;
}
</style>
