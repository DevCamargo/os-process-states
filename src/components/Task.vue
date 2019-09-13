<template>
  <div
    tabindex="0"
    @focus="$emit('selected', task)"
    :class="isSelected ? 'tasks selected' : 'tasks'"
  >
    <slot />
  </div>
</template>
<script>
export default {
  name: 'Task',
  props: {
    task: [Number, Object],
    isSelected: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.tasks {
  padding: 2px 0px;
  margin: 2px;
  display: flex;
  width: calc(100% - 6px);
  border: 1px solid transparent;
  cursor: default;
  &.selected {
    background-color: $selected;
    color: white;
    border: 1px dotted white;
  }
  &:focus {
    outline: none;
  }
}
</style>
