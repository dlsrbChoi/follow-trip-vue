<template>
  <button
    type="button"
    class="btn btn-light"
    :class="activeClass"
    @click.prevent="editorParams.commands[command](args)"
  >
    <slot><i class="fas fa-fw" :class="iconClass"></i></slot>
  </button>
</template>

<script>
export default {
  name: "editor-menu-button",
  props: {
    command: {
      required: true,
      type: String,
    },
    editorParams: {
      required: true,
      type: Object,
      default: () => {},
    },
    args: {
      type: Object,
      default: () => {},
    },
    icon: {
      type: String,
    },
  },
  computed: {
    activeClass() {
      return this.editorParams.isActive[this.command] &&
        this.editorParams.isActive[this.command](this.args)
        ? "active"
        : null;
    },
    iconClass() {
      return `fa-${this.icon ? this.icon : this.command}`;
    },
  },
};
</script>

<style scoped>
.btn {
  font-family: Courier, monospace;
}
</style>
