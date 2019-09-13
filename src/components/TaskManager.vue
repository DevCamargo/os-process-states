<template>
  <Window class="task-manager">
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
import ModalNewTask from '@components/ModalNewTask'

export default {
  name: 'TaskManager',
  data() {
    return {
      running: true,
      time: 0,
      tasks: [],
      count: 0,
      oldTask: null
    }
  },
  components: {
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
      let task = this.tasks[this.randomNumber()]
      this.tasks.forEach(t => {
        if (t.id == task.id) {
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
        if (this.running) {
          // if (Math.floor(Math.random() * 10) == 5) {
          //   this.running = false
          // }
          if (this.count == 3) {
            if (this.tasks.length > 0) {
              this.changeStatus()
            }
            this.count = 0
          }
          this.time++
          this.count++
          this.timer()
        } else {
          alert('Exeption!')
          this.running = true
          setTimeout(() => {
            this.timer()
          }, 3000)
        }
      }, 1000)
    },
    addTask(value) {
      this.tasks.push(value)
      this.changeStatus()
      this.count = 0
    },
    editTask() {},
    endTask(value) {
      this.tasks = this.tasks.filter(t => t.id != value)
      this.changeStatus()
      this.count = 0
    },
    endProcess(process) {
      if (process.pid != '') {
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
