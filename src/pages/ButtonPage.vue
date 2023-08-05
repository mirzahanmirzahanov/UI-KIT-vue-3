<script setup>
import VButton from "@/components/VButton.vue";
</script>

<template>
  <div class="button">
    <div class="button__container container">
      <h1 class="heading-1">Button</h1>
      <h2 class="heading-2">Disabled</h2>
      <div class="line">
        <VButton :label="'Primary'" :color="'primary'" :disabled="true" />
        <VButton :label="'Secondary'" :color="'second'" :disabled="true" />
        <VButton :label="'Success'" :color="'success'" :disabled="true" />
        <VButton :label="'Info'" :color="'info'" :disabled="true" />
        <VButton :label="'Warning'" :color="'warning'" :disabled="true" />
        <VButton :label="'Danger'" :color="'danger'" :disabled="true" />
      </div>
      <h2 class="heading-2">Colors</h2>
      <div class="line">
        <VButton :label="'Primary'" :color="'primary'" />
        <VButton :label="'Secondary'" :color="'second'" />
        <VButton :label="'Success'" :color="'success'" />
        <VButton :label="'Info'" :color="'info'" />
        <VButton :label="'Warning'" :color="'warning'" />
        <VButton :label="'Danger'" :color="'danger'" />
      </div>
      <h2 class="heading-2">Rounded</h2>
      <div class="line">
        <VButton :label="'Primary'" :color="'primary'" :rounded="true" />
        <VButton :label="'Secondary'" :color="'second'" :rounded="true" />
        <VButton :label="'Success'" :color="'success'" :rounded="true" />
        <VButton :label="'Info'" :color="'info'" :rounded="true" />
        <VButton :label="'Warning'" :color="'warning'" :rounded="true" />
        <VButton :label="'Danger'" :color="'danger'" :rounded="true" />
      </div>
      <h2 class="heading-2">Rounded</h2>
      <div class="line">
        <VButton :label="'Primary'" :color="'primary'" :outlined="true" />
        <VButton :label="'Secondary'" :color="'second'" :outlined="true" />
        <VButton :label="'Success'" :color="'success'" :outlined="true" />
        <VButton :label="'Info'" :color="'info'" :outlined="true" />
        <VButton :label="'Warning'" :color="'warning'" :outlined="true" />
        <VButton :label="'Danger'" :color="'danger'" :outlined="true" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.line {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 20px;
}
</style>
