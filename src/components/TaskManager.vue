<template>
  <Window class="task-manager">
    <Titlebar>Task Manager</Titlebar>
    <Sections class="sections">
      <router-view />
    </Sections>
    <Footer class="footer" />
  </Window>
</template>

<script>
import Titlebar from '@components/Titlebar'
import Window from '@components/Window'
import Sections from '@components/Sections'
import Footer from '@components/Footer'

export default {
  name: 'TaskManager',
  components: {
    Titlebar,
    Window,
    Sections,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.task-manager {
  padding: 3px;
  height: 100%;
  position: relative;
  .sections {
    padding: 5px 10px;
  }
  .footer {
    position: absolute;
    bottom: 0;
    padding: 5px 10px;
    width: calc(100% - 25px);
  }
}
</style>
