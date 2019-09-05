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
      >
        <span>{{ section }}</span>
        <div class="line"></div>
      </router-link>
    </div>
    <div class="outset">
      <div class="inset">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sections',
  data() {
    return {
      sections: ['applications', 'process', 'application', 'proces']
    }
  }
}
</script>

<style lang="scss" scoped>
.sections {
  position: relative;
  .buttons {
    z-index: 2;
    height: 30px;
    width: fit-content;
    position: absolute;
    .section {
      position: relative;
      z-index: 1;
      font-size: 16px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      height: 25px;
      padding: 0px;
      border: 2px outset;
      border-bottom: 2px solid #eeeeee;
      background-color: $window;
      &.active {
        height: 25px;
        border-bottom-style: hidden;
        border-right: 2px solid black;
        padding-bottom: 2px;
        span {
          border-bottom: 0px solid #eeeeee;
        }
        .line {
          position: absolute;
          border-bottom: 2px solid $window;
          width: 100%;
        }
      }
      span {
        padding: 0px 8px;
      }
      .line {
        position: absolute;
        border-bottom: 2px solid #eeeeee;
        width: calc(100% + 2px);
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
      height: 570px;
      border: 2px outset;
      // border-right: 2px solid $border-shadow;
      // border-bottom: 2px solid $border-shadow;
      // border-top: 2px solid $border-light;
      // border-left: 2px solid $border-light;
    }
  }
}
</style>
