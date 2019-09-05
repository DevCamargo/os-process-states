<template>
  <div class="inset">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'Inset',
  props: {},
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.inset {
  border: 2px inset;
}
</style>
