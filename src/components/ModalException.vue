<template>
  <Modal hiddenButtons ref="modal">
    <span slot="header">Exception</span>
    <div slot="body">
      <div class="message">
        <i class="icon mdi mdi-close-circle" />
        Exception in task {{ task.name }}
      </div>
    </div>
  </Modal>
</template>
<script>
import Modal from '@components/Modal'

export default {
  name: 'ModalException',
  props: {
    task: Object
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
    color: #ff0300;
    font-size: 40px;
    margin-right: 10px;
  }
}
</style>
