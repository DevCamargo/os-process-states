<template>
  <div>
    <div class="sections">
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
    <Window class="content">
      <slot />
    </Window>
  </div>
</template>

<script>
import Window from '@components/Window'

export default {
  name: 'Sections',
  data() {
    return {
      sections: ['applications', 'process']
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
  .section {
    &.active {
      // background-color: blue;
    }
  }
}
.content {
  // height: -webkit-fill-available;
}
</style>
