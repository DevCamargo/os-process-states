<template>
  <div class="modal">
    <transition name="modal">
      <div class="modal-mask" v-if="show">
        <div class="modal-wrapper">
          <Window class="modal-container">
            <Titlebar :hiddenButtons="hiddenButtons" class="modal-header" @close="close">
              <slot name="header"></slot>
            </Titlebar>

            <div class="modal-body">
              <slot name="body"></slot>
            </div>

            <div class="modal-footer">
              <slot name="footer"></slot>
            </div>
          </Window>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Window from '@components/Window'
import Titlebar from '@components/Titlebar'

export default {
  data() {
    return {
      show: false
    }
  },
  components: {
    Window,
    Titlebar
  },
  methods: {
    open() {
      this.show = true
    },
    close() {
      this.show = false
    }
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
.modal {
  z-index: 9999;
}

.modal-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: table;
  transition: opacity 0.2s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  background-color: $window;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.2s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  padding: 10px;
}

.modal-footer {
  padding: 0px 10px 10px 10px;
  display: flex;
  justify-content: center;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(0.85);
  transform: scale(0.85);
}
</style>
