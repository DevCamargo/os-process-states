<template>
  <div id="app">
    <TaskManager />
  </div>
</template>

<script>
import TaskManager from '@components/TaskManager'
export default {
  name: 'App',
  components: {
    TaskManager
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Win95';
  src: url('./assets/Win95.ttf') format('truetype');
}

* {
  font-family: 'Win95', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background-color: $window;
}
</style>
