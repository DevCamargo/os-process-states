<template>
  <Window class="task-manager">
    <ModalException :task="task" ref="exception" />
    <ModalInterruption :process="process" ref="interruption" />
    <ModalNewTask @addTask="addTask" ref="modalNewTask" />
    <Titlebar>Task Manager</Titlebar>
    <Sections class="sections">
      <router-view
        :tasks="tasks"
        @newTask="$refs.modalNewTask.open()"
        @editTask="editTask"
        @endTask="endTask"
        @endProcess="endProcess"
      />
    </Sections>
    <Footer class="footer" :tasks="tasks.length" :time="time" />
  </Window>
</template>

<script>
import Titlebar from '@components/Titlebar'
import Window from '@components/Window'
import Sections from '@components/Sections'
import Footer from '@components/Footer'
import ModalException from '@components/ModalException'
import ModalInterruption from '@components/ModalInterruption'
import ModalNewTask from '@components/ModalNewTask'

export default {
  name: 'TaskManager',
  data() {
    return {
      status: 'running',
      time: 0,
      tasks: [],
      task: {},
      process: {},
      count: 0,
      oldTask: null
    }
  },
  components: {
    ModalException,
    ModalInterruption,
    ModalNewTask,
    Titlebar,
    Window,
    Sections,
    Footer
  },
  methods: {
    randomNumber() {
      let randomNumber = Math.floor(Math.random() * this.tasks.length)
      if (this.tasks.length == 1) {
        return randomNumber
      } else if (this.oldTask == randomNumber) {
        return this.randomNumber()
      } else {
        this.oldTask = randomNumber
        return randomNumber
      }
    },
    changeStatus() {
      this.count = 0
      this.task = this.tasks[this.randomNumber()]
      this.tasks.forEach(t => {
        if (t.id == this.task.id) {
          t.status = 'Running'
          t.processes.forEach(process => {
            process.status = 'Running'
          })
        } else {
          t.status = 'Ready'
          t.processes.forEach(process => {
            process.status = 'Ready'
          })
        }
      })
    },
    timer() {
      setTimeout(() => {
        if (this.status == 'running') {
          if (Math.floor(Math.random() * 10) == 1 && this.tasks.length > 0) {
            this.status = 'exception'
          } else if (this.count == 3) {
            if (this.tasks.length > 0) {
              this.changeStatus()
            }
          }
          this.time++
          this.count++
          this.timer()
        } else if (this.status == 'exception') {
          this.$refs.exception.open()
          setTimeout(() => {
            this.$refs.exception.close()
            this.status = 'running'
            this.timer()
          }, 5000)
        } else if (this.status == 'interruption') {
          this.$refs.interruption.open()
          setTimeout(() => {
            this.$refs.interruption.close()
            this.status = 'running'
            this.timer()
          }, 5000)
        }
      }, 1000)
    },
    addTask(value) {
      this.tasks.push(value)
      this.changeStatus()
    },
    editTask() {},
    endTask(value) {
      if (this.tasks.length > 0) {
        this.tasks = this.tasks.filter(t => t.id != value)
        this.changeStatus()
      }
    },
    endProcess(process) {
      if (process.pid != '') {
        this.status = 'interruption'
        this.process = process
        this.tasks[process.task].processes = this.tasks[
          process.task
        ].processes.filter(p => p.pid != process.pid)
        if (this.tasks[process.task].processes.length == 0) {
          this.endTask(process.taskId)
        }
      }
    }
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
}
</style>
