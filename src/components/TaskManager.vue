<template>
  <Window class="task-manager">
    <Titlebar>Task Manager</Titlebar>
    <Sections class="sections">
      <router-view />
    </Sections>
  </Window>
</template>

<script>
import Titlebar from '@components/Titlebar'
import Window from '@components/Window'
// import Button from '@components/Button'
import Sections from '@components/Sections'

export default {
  name: 'TaskManager',
  components: {
    Titlebar,
    Window,
    Sections
    // Button
  }
}
</script>

<style lang="scss" scoped>
.task-manager {
  padding: 3px;
  height: 100%;
  .sections {
    padding: 5px 10px;
  }
}
</style>
