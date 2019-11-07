<template>
  <div class="processes">
    <Inset>
      <Tabs>
        <div class="task">Task</div>
        <div class="pid">PID</div>
        <div class="status">Status</div>
        <div class="time">Time</div>
      </Tabs>
      <List>
        <template v-for="(task, i) in tasks">
          <Task
            v-for="process in task.processes"
            :key="process.pid"
            :task="{ pid: process.pid, task: i, taskId: task.id }"
            @selected="value => (selectedProcess = value)"
            :isSelected="selectedProcess.pid == process.pid"
          >
            <div class="task">{{ process.name }}</div>
            <div class="pid">{{ process.pid }}</div>
            <div class="status">{{ process.status }}</div>
            <div class="time">{{ process.time }}</div>
          </Task>
        </template>
      </List>
    </Inset>
    <div class="options">
      <Button @click.native="endProcess">End Process</Button>
    </div>
  </div>
</template>
<script>
import Inset from '@components/Inset'
import Tabs from '@components/Tabs'
import List from '@components/List'
import Task from '@components/Task'
import Button from '@components/Button'

export default {
  components: {
    Inset,
    Tabs,
    List,
    Task,
    Button
  },
  props: {
    tasks: Array
  },
  data() {
    return {
      selectedProcess: {
        pid: '',
        tasks: '',
        taskId: ''
      }
    }
  },
  methods: {
    endProcess() {
      this.$emit('endProcess', this.selectedProcess)
      this.selectedProcess.id = ''
      ;(this.selectedProcess.tasks = ''), (this.selectedProcess.taskId = '')
    }
  }
}
</script>
<style lang="scss" scoped>
.processes {
  padding: 20px;
  .task {
    width: 30%;
    padding-left: 5px;
  }
  .pid {
    width: 20%;
    padding-left: 5px;
  }
  .status {
    width: 30%;
    padding-left: 5px;
  }
  .time {
    width: 20%;
    padding-left: 5px;
  }
  .options {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 30px;
    padding-top: 10px;
    button {
      padding: 2px 18px 0px;
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
