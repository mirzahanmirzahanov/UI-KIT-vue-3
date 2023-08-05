<script setup>
import { ref } from "vue";

const props = defineProps({
  openSidebar: {
    type: Boolean,
    required: true,
  },
});

const links = ref([
  { name: "Typography", href: "/typography" },
  { name: "Button", href: "/button" },
]);
</script>

<template>
  <div :class="['sidebar', { 'sidebar--open': openSidebar }]">
    <RouterLink
      class="sidebar__link"
      v-for="(link, index) in links"
      :key="index"
      :to="link.href"
    >
      {{ link.name }}</RouterLink
    >
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.sidebar {
  position: fixed;
  left: 0;
  top: 62px;
  height: 100%;
  background: #fff;
  width: 250px;
  padding: 20px;
  transition: $baseTransition;
  box-shadow: $boxShadow;
  transform: translateX(-250px);
  &--open {
    transform: translateX(0);
  }
  &__link {
    display: block;
    border-radius: 12px;
    padding: 10px;
    border: solid 2px #fff;
    transition: $baseTransition;
    font-weight: bold;
    margin: 0 0 10px;
    &:hover {
      border-color: $primaryColor;
    }
  }
}
</style>
