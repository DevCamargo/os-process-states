<template>
  <Modal hiddenButtons ref="modal">
    <span slot="header">Interruption</span>
    <div slot="body">
      <div class="message">
        <i class="icon mdi mdi-alert" />
        Interruption: PID Process {{ process.pid }}
      </div>
    </div>
  </Modal>
</template>
<script>
import Modal from '@components/Modal'

export default {
  name: 'ModalInterruption',
  props: {
    process: Object
  },
  components: {
    Modal
  },
  methods: {
    open() {
      this.$refs.modal.open()
    },
    close() {
      this.$refs.modal.close()
    }
  }
}
</script>
<style lang="scss" scoped>
.message {
  display: flex;
  align-items: center;
  .icon {
    color: #ffff00;
    font-size: 40px;
    margin-right: 10px;
  }
}
</style>
