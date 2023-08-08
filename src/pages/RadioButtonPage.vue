<script setup>
import { ref } from "vue";
import VRadioButton from "../components/VRadioButton.vue";

const footballClubs = ref([
  { name: "CSKA Moscow", id: "c1" },
  { name: "Dinamo Moscow", id: "c2" },
  { name: "Spartak Moscow", id: "c3" },
  { name: "Real Madrid", id: "c4" },
]);

const selectedClub = ref(null);
const disabledRadio = ref(true);
const disabledRadioChecked = ref(false);
</script>

<template>
  <div class="radio-page">
    <div class="radio-page__container">
      <h1 class="heading-1">RadioButton</h1>
      <h2 class="heading-2">Basic</h2>
      <div class="line line--block">
        <p>Selected Club: {{ selectedClub }}</p>
        <div v-for="club in footballClubs" :key="club.id">
          <VRadioButton
            :value="club.name"
            :label="club.name"
            :name="'club'"
            :id="club.id"
            v-model:value="selectedClub"
          />
        </div>
      </div>
      <h2 class="heading-2">Disabled</h2>
      <div class="line">
        <VRadioButton
          :value="'Radio disabled'"
          :label="'Radio disabled'"
          :name="'Radio disabled'"
          :id="'RadioDisabled'"
          :disabled="disabledRadio"
          v-model:value="disabledRadioChecked"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
