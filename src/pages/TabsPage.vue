<script setup>
import VTabs from "../components/VTabs.vue";
import { ref } from "vue";

const tabs = [
  {
    name: "About",
    label: "О проекте",
  },
  {
    name: "Vue",
    label: "Про Vue",
  },
  {
    name: "React",
    label: "Про React",
  },
];

const selectedTab = ref("Vue");

const changeTab = (tabName) => {
  selectedTab.value = tabName;
};
</script>

<template>
  <div class="tabs">
    <div class="tabs__container">
      <h1 class="heading-1">Tabs</h1>
      <VTabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
        <div v-if="selectedTab === 'About'">Lorem, ipsum dolor.</div>
        <div v-if="selectedTab === 'Vue'">Lorem ipsum dolor sit amet.</div>
        <div v-if="selectedTab === 'React'">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </div>
      </VTabs>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
