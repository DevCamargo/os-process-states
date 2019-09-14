<template>
  <div class="titlebar">
    <div class="title">
      <i class="mdi mdi-desktop-classic" />
      <slot />
    </div>
    <div class="buttons" v-if="!hiddenButtons">
      <Button>
        <i class="mdi mdi-window-minimize" />
      </Button>
      <Button>
        <i class="mdi mdi-window-restore" />
      </Button>
      <Button @click.native="$emit('close')">
        <i class="mdi mdi-window-close" />
      </Button>
    </div>
  </div>
</template>
<script>
import Button from '@components/Button'

export default {
  name: 'Titlebar',
  components: {
    Button
  },
  props: {
    hiddenButtons: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.titlebar {
  background-color: $titlebar;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px;
  .title {
    line-height: 20px;
    font-weight: bold;
    color: white;
    font-size: 15px;
    i {
      margin-right: 5px;
    }
  }
  .buttons {
    button {
      width: 22px;
      height: 20px;
      padding: 0px;
      &:last-child {
        margin-left: 4px;
      }
      i {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
