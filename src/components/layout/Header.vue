<script setup></script>

<template>
  <header class="header">
    <div class="header__container">
      <RouterLink to="/">UI Kit</RouterLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.header {
  background: #fff;
  font-weight: bold;
  width: 100%;
  box-shadow: $boxShadow;
  height: 62px;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 0 20px;
  position: relative;
}
</style>
