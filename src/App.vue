<script setup>
import LayoutHeader from "@/components/layout/Header.vue";
import LayoutSidebar from "@/components/layout/Sidebar.vue";
</script>

<template>
  <div class="wrapper">
    <LayoutHeader />
    <LayoutSidebar />
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
@import "./styles/variables.scss";

#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
