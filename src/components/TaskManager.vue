<template>
  <Window class="task-manager">
    <Modal ref="newTask" class="modal">
      <span slot="header">New Task</span>
      <div slot="body">
        <Input label="Task name" />
      </div>
      <div slot="footer">
        <Button @click.native="$refs.newTask.close()" class="button"
          >Cancel</Button
        >
        <Button class="button">Ok</Button>
      </div>
    </Modal>
    <Titlebar>Task Manager</Titlebar>
    <Sections class="sections">
      <router-view :tasks="tasks" @newTask="$refs.newTask.open()" />
    </Sections>
    <Footer class="footer" :tasks="tasks.length" :time="time" />
  </Window>
</template>

<script>
import Modal from '@components/Modal'
import Titlebar from '@components/Titlebar'
import Window from '@components/Window'
import Sections from '@components/Sections'
import Footer from '@components/Footer'
import Input from '@components/Input'
import Button from '@components/Button'

export default {
  name: 'TaskManager',
  data() {
    return {
      running: true,
      time: 0,
      tasks: [
        {
          id: 0,
          name: 'Paint',
          status: 'Running'
        },
        {
          id: 1,
          name: 'Microsoft Word',
          status: 'AAAA'
        }
      ]
    }
  },
  components: {
    Modal,
    Titlebar,
    Window,
    Sections,
    Footer,
    Input,
    Button
  },
  methods: {
    timer() {
      setTimeout(() => {
        if (this.running) {
          this.time++
          this.timer()
        }
      }, 1000)
    },
    newTask() {}
  },
  created() {
    this.timer()
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
    padding: 5px 0px;
    width: calc(100% - 6px);
  }
  .modal {
    .button {
      padding: 2px 18px 0px;
      height: 25px;
      &:first-child {
        margin-right: 5px;
      }
      &:last-child {
        margin-left: 5px;
      }
    }
  }
}
</style>
