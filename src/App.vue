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
// https://materialdesignicons.com/
// https://dev.materialdesignicons.com/getting-started/webfont
@font-face {
  font-family: 'Win95';
  src: url('./assets/Win95.ttf') format('truetype');
}

* {
  font-family: 'Win95', sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  padding-bottom: 10px;
  width: 600px;
  height: 700px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: black;
  background-color: $window;
}
</style>
