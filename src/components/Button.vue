<template>
  <button :disabled="disabled">
    <slot />
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
button {
  background-color: $window;
  border-right-color: black;
  border-bottom-color: black;
  border-top-color: white;
  border-left-color: white;
  &:active {
    border-bottom-color: $border-light;
    border-right-color: $border-light;
    border-top-color: $border-shadow;
    border-left-color: $border-shadow;
  }
}
</style>
