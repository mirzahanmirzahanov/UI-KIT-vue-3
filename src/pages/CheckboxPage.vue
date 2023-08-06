<script setup>
import { ref } from "vue";
import VCheckbox from "@/components/Checkbox/VCheckbox.vue";
import VCheckboxList from "@/components/Checkbox/VCheckboxList.vue";

const checkboxActive = ref(true);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);

const heroesList = ref([
  { name: "Spiderman", id: "h1" },
  { name: "IronMan", id: "h2" },
  { name: "Thor", id: "h3" },
  { name: "Loki", id: "h4" },
]);

const selectedHeroes = ref([]);

const switchProf = ref(false);
</script>

<template>
  <div class="checkbox-page">
    <div class="checkbox-page__container">
      <h1 class="heading-1">Checkbox</h1>
      <h2 class="heading-2">Checkbox Active</h2>
      <div class="line">
        <VCheckbox
          :label="'Checkbox Active'"
          :id="'checkboxActive'"
          :name="'checkboxActive'"
          :value="'ilikeit'"
          v-model:checked="checkboxActive"
        />
      </div>
      <h2 class="heading-2">Checkbox Disabled</h2>
      <div class="line">
        <VCheckbox
          :label="'Checkbox Disabled'"
          :id="'checkboxDisabled'"
          :name="'checkboxDisabled'"
          :value="'ilikeit'"
          :disabled="checkboxDisabled"
          v-model:checked="checkboxDisabledChecked"
        />
      </div>
      <h2 class="heading-2">Checkbox Group</h2>
      <div class="line line--block">
        <p>Selected Heroes: {{ selectedHeroes }}</p>
        <VCheckboxList
          :name="'Heroes'"
          v-model:value="selectedHeroes"
          :options="heroesList"
        />
      </div>
      <h2 class="heading-2">Switch</h2>
      <div class="line line--block">
        <p>Switch: {{ switchProf }}</p>
        <VCheckbox
          :label="'I am profi'"
          :id="'switch'"
          :name="'switch'"
          :value="'ilikeit'"
          :type="'switch'"
          v-model:checked="switchProf"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
