<template>
  <div class="tabs">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.tabs {
  display: flex;
  flex-wrap: nowrap;
  div {
    border: 2px outset $border-light;
  }
}
</style>
