<script setup>
const props = defineProps({
  label: {
    type: String,
    required: false,
    default: "Button",
  },
  color: {
    type: String,
    required: false,
    default: "primary",
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  rounded: {
    type: Boolean,
    required: false,
    default: false,
  },
  outlined: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <button
    :class="[
      'btn',
      `btn--${color}`,
      { 'btn--rounded': rounded },
      { 'btn--outlined': outlined },
    ]"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.btn {
  margin: 0 0 10px 10px;
  padding: 0 20px;
  height: 40px;
  color: #fff;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: $baseTransition;
  &--primary {
    background: $primaryColor;
    border: 1px solid $primaryColor;
    &:enabled:hover {
      background: $primaryHover;
    }
  }
  &--second {
    background: $secondColor;
    border: 1px solid $secondColor;
    &:enabled:hover {
      background: $secondHover;
    }
  }
  &--success {
    background: $successColor;
    border: 1px solid $successColor;
    &:enabled:hover {
      background: $successHover;
    }
  }
  &--info {
    background: $infoColor;
    border: 1px solid $infoColor;
    &:enabled:hover {
      background: $infoHover;
    }
  }
  &--warning {
    background: $warningColor;
    border: 1px solid $warningColor;
    &:enabled:hover {
      background: $warningHover;
    }
  }
  &--danger {
    background: $dangerColor;
    border: 1px solid $dangerColor;
    &:enabled:hover {
      background: $dangerHover;
    }
  }
  &--rounded {
    border-radius: 15px;
  }
  &--outlined {
    background: transparent;
    color: #000;
    &:enabled:hover {
      color: #fff;
    }
  }
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
}
</style>
