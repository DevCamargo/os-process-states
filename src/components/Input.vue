<template>
  <div>
    <div v-if="label != ''">{{ label }}</div>
    <input type="text" v-model="theValue" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      theValue: ''
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  watch: {
    theValue() {
      this.$emit('input', this.theValue)
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
