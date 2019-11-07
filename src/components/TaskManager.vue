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
      if (this.tasks.filter(t => t.status == 'Ready').length > 0) {
        this.task = this.tasks[this.randomNumber()]
        if (
          this.task.status == 'Terminated' ||
          this.task.status == 'Creating'
        ) {
          this.changeStatus()
        }
        this.tasks.forEach(t => {
          if (
            t.id == this.task.id &&
            t.status != 'Terminated' &&
            t.status != 'Creating'
          ) {
            t.status = 'Running'
            t.processes.forEach(process => {
              process.status = 'Running'
            })
          } else {
            if (t.status != 'Terminated' && t.status != 'Creating') {
              t.status = 'Ready'
              t.processes.forEach(process => {
                process.status = 'Ready'
              })
            }
          }
        })
      }
    },
    timer() {
      setTimeout(() => {
        if (!this.stop) {
          this.tasks.forEach(t => {
            if (t.status == 'Running') {
              t.time++
              t.processes.forEach(process => {
                process.time++
              })
            }
          })
          if (this.status == 'running') {
            if (Math.floor(Math.random() * 50) == 1 && this.tasks.length > 0) {
              this.status = 'exception'
            } else if (this.count == 3) {
              if (this.tasks.length > 0) {
                setTimeout(() => {
                  this.changeStatus()
                }, 1000)
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
            }, 3000)
          }
        } else {
          this.time++
          this.count++
          this.timer()
        }
      }, 1000)
    },
    addTask(value) {
      this.tasks.push(value)
      setTimeout(() => {
        this.tasks.forEach(task => {
          if (task.id == value.id) {
            task.status = 'Ready'
            task.processes.forEach(process => {
              process.status = 'Ready'
            })
          }
          this.changeStatus()
        })
      }, 3000)
    },
    editTask() {},
    endTask(value) {
      if (this.tasks.length > 0) {
        this.tasks.forEach(task => {
          if (task.status != 'Terminated' && task.status != 'Creating') {
            task.status = 'Ready'
            task.processes.forEach(process => {
              process.status = 'Ready'
            })
          }
        })
        this.tasks.forEach(task => {
          if (task.id == value) {
            task.status = 'Running'
            task.processes.forEach(process => {
              process.status = 'Running'
            })
            setTimeout(() => {
              task.status = 'Terminated'
              task.processes.forEach(process => {
                process.status = 'Terminated'
              })
            }, 4000)
          }
        })
        // this.tasks = this.tasks.filter(t => t.id != value)
        this.changeStatus()
      }
    },
    endProcess(process) {
      if (process.pid != '') {
        this.status = 'interruption'
        this.process = process
        // this.tasks[process.task].processes = this.tasks[
        //   process.task
        // ].processes.filter(p => p.pid != process.pid)
        this.endTask(process.taskId)
        // if (this.tasks[process.task].processes.length == 0) {
        // }
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
