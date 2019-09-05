<template>
  <div class="window">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.window {
  background-color: $window;
  border-right: 2px solid $border-shadow;
  border-bottom: 2px solid $border-shadow;
  border-top: 2px solid $border-light;
  border-left: 2px solid $border-light;
  outline: 2px outset $window;
}
</style>
