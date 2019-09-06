<template>
  <div>
    <div v-if="label != ''">{{ label }}</div>
    <input type="text" @change="value => $emit('input', value)" />
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
input {
  width: calc(100% - 6px);
  border: 3px inset;
  &:focus {
    outline: none;
  }
}
</style>
