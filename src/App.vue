<script setup>
import LayoutHeader from "@/components/layout/Header.vue";
import LayoutSidebar from "@/components/layout/Sidebar.vue";
import { ref } from 'vue'

const isOpenMenu = ref(false)

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}

</script>

<template>
  <div class="wrapper">
    <div class="toggle" @click="toggleMenu">&#5125</div>
    <LayoutHeader />
    <LayoutSidebar  :openSidebar="isOpenMenu"/>
    <main :class="['main', {'main--full': !isOpenMenu}]">
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

.toggle {
  position: fixed;
  left: 0;
  width: 15px;
  height: 100%;
  background: $primaryColor;
  z-index: 6;
  cursor: pointer;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main {
	flex: 1 1 auto;
	margin: 0 0 0 250px;
  max-width: 1400px;
	padding: 0 30px;
  transition: $baseTransition;
  &--full{
    margin: 0;
  }
  @media (max-width: 1023px) {
    margin: 0;
    
  }
}
</style>
