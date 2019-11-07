<template>
  <Modal ref="modal" class="modal">
    <span slot="header">New Task</span>
    <div slot="body">
      <Input ref="input" @input="value => (name = value)" label="Task name" />
    </div>
    <div slot="footer">
      <Button @click.native="$refs.modal.close()" class="button">Cancel</Button>
      <Button @click.native="addTask" class="button">Ok</Button>
    </div>
  </Modal>
</template>
<script>
import Modal from '@components/Modal'
import Input from '@components/Input'
import Button from '@components/Button'

export default {
  name: 'ModalNewTask',
  data() {
    return {
      id: 0,
      name: ''
    }
  },
  components: {
    Modal,
    Input,
    Button
  },
  methods: {
    open() {
      this.$refs.modal.open()
      setTimeout(() => {
        this.$refs['input'].$el.lastElementChild.focus()
      }, 100)
    },
    addTask() {
      let processes = []
      let task = {}
      for (
        let index = 0;
        index < /*Math.floor(Math.random() * 5 + 1)*/ 1;
        index++
      ) {
        let process = {}
        process.pid = Math.floor(Math.random() * 10000 + 1)
        process.name = `${this.name.toUpperCase().replace(/\s/g, '')}.EXE`
        process.status = 'Creating'
        process.time = 0
        processes.push(process)
      }
      task.id = Math.floor(Math.random() * 10000 + 1)
      task.name = this.name
      task.processes = processes
      task.status = 'Creating'
      task.time = 0
      this.$emit('addTask', task)
      this.$refs.modal.close()
    }
  }
}
</script>
<style lang="scss" scoped>
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
</style>
