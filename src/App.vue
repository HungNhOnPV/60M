<template>
  <div id="app">
    <router-view name="comp-header" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
</style>
