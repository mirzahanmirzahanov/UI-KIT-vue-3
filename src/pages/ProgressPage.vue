<script setup>
import { ref } from "vue";
import VProgressBar from "../components/Progress/VProgressBar.vue";
import VProgressCircle from "../components/Progress/VProgressCircle.vue";
import VButton from "../components/VButton.vue";
const percentBar = ref(40);
const percentCircle = ref(20);
const btnDisabled = ref(false);
const btnCircleDisabled = ref(false);

const addPercent = () => {
  if (percentBar.value < 100) {
    percentBar.value += 10;
  } else {
    percentBar.value = 100;
    btnDisabled.value = true;
  }
};
const addPercentCircle = () => {
  if (percentCircle.value < 100) {
    percentCircle.value += 10;
  } else {
    percentCircle.value = 100;
    btnCircleDisabled.value = true;
  }
};
</script>

<template>
  <div class="progress-page">
    <div class="progress-page__container">
      <h1 class="heading-1">Progress</h1>
      <h2 class="heading-2">Progress Bar</h2>
      <div class="line line--block">
        <VProgressBar
          :maxWidth="'400px'"
          :percent="percentBar"
          :color="'success'"
        />
        <VButton
          :label="'add 10%'"
          @click="addPercent"
          :disabled="btnDisabled"
          :color="'success'"
        />
      </div>
      <h2 class="heading-2">Progress Circle</h2>
      <div class="line line--block">
        <VProgressCircle :percent="percentCircle" :color="'warning'" />
        <VButton
          :color="'warning'"
          :label="'add 10%'"
          @click="addPercentCircle"
          :disabled="btnCircleDisabled"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
