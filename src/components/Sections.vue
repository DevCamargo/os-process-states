<template>
  <div class="sections">
    <div class="buttons">
      <router-link
        tag="button"
        v-for="(section, index) in sections"
        :key="index"
        :to="`/${section}`"
        active-class="active"
        class="section"
        >{{ section }}</router-link
      >
    </div>
    <div class="outset">
      <div class="inset">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Window from '@components/Window'

export default {
  name: 'Sections',
  data() {
    return {
      sections: ['applications', 'process', 'application', 'proces']
    }
  },
  components: {
    Window
    // Button
  }
}
</script>

<style lang="scss" scoped>
.sections {
  position: relative;
  .buttons {
    z-index: 2;
    height: 25px;
    width: fit-content;
    position: absolute;
    .section {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      height: 25px;
      border-bottom: 2px solid $border-light;
      background-color: $window;
      &.active {
        height: 25px;
        border-right: 2px solid black;
        border-bottom: 2px solid #c0c0c0;
        //border-bottom: none;//1px solid ;
        // background-color: blue;
      }
    }
  }
}
.outset {
  margin-top: 23px;
  position: relative;
  height: 450px;
  width: 100%;
  .inset {
    width: calc(100% - 4px);
    z-index: 1;
    position: absolute;
    top: 0;
    div {
      border-right: 2px solid $border-shadow;
      border-bottom: 2px solid $border-shadow;
      border-top: 2px solid $border-light;
      border-left: 2px solid $border-light;
    }
  }
}
</style>
