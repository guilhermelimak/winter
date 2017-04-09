<template>
<transition name="modal">
  <div class="modal fade in" v-if="isOpen">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" v-if="title">{{ title }}</h5>
        </div>
        <div class="modal-body">
          <slot name="modal-body" />
        </div>
        <div class="modal-footer">
          <slot name="modal-footer" />
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  props: {
    title: {
      required: false,
      type: String,
      default: '',
    },
    isOpen: {
      required: true,
      type: Boolean,
    },
  },
}
</script>

<style lang="scss">
@import '../styles/variables';

.modal {
  background-color: rgba(22, 22, 22, 0.82);
  display: block;

  &-footer,
  &-body,
  &-header {
    padding: $grid-gutter-width / 3;
  }

  &-content {
    border-radius: $border-radius-base;
  }
}
</style>
