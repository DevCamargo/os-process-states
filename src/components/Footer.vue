<template>
  <div class="footer">
    <Inset class="inset">Processes: {{ tasks }}</Inset>
    <Inset class="inset">CPU time: {{ time }}</Inset>
    <Inset class="inset"></Inset>
  </div>
</template>
<script>
import Inset from '@components/Inset'

export default {
  name: 'Footer',
  props: {
    tasks: Number,
    time: Number
  },
  components: {
    Inset
  }
}
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  .inset {
    display: flex;
    align-items: center;
    padding: 0px 5px;
    width: 100%;
  }
}
</style>
