<template>
  <div class="applications">
    <Inset>
      <Tabs>
        <div class="task">Task</div>
        <div class="status">Status</div>
      </Tabs>
      <List>
        <Task
          v-for="(task, index) in tasks"
          :key="index"
          :task="task.id"
          @selected="value => (selectedTask = value)"
          :isSelected="selectedTask == task.id"
        >
          <div class="task">{{ task.name }}</div>
          <div class="status">{{ task.status }}</div>
        </Task>
      </List>
    </Inset>
    <div class="options">
      <Button @click.native="addTask">End Task</Button>
      <Button @click.native="addTask">Edit Task</Button>
      <Button @click.native="addTask">New Task..</Button>
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
      selectedTask: null
    }
  },
  methods: {
    addTask() {
      this.$emit('newTask')
    }
  }
}
</script>
<style lang="scss" scoped>
.applications {
  padding: 20px;
  .task {
    width: 70%;
    padding-left: 5px;
  }
  .status {
    width: 30%;
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
