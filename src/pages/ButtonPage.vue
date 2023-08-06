<script setup>
import VButton from "@/components/VButton.vue";
const logi = () => {
  alert('You clicked button!!!')
};
</script>

<template>
  <div class="button-page">
    <div class="button-page__container">
      <h1 class="heading-1">Button</h1>
      <h2 class="heading-2">Disabled</h2>
      <div class="line">
        <VButton :label="'Primary'" :color="'primary'" disabled />
        <VButton :label="'Secondary'" :color="'second'" disabled />
        <VButton :label="'Success'" :color="'success'" disabled />
        <VButton :label="'Info'" :color="'info'" disabled />
        <VButton :label="'Warning'" :color="'warning'" disabled />
        <VButton :label="'Danger'" :color="'danger'" disabled />
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
        <VButton :label="'Primary'" :color="'primary'" rounded />
        <VButton :label="'Secondary'" :color="'second'" rounded />
        <VButton :label="'Success'" :color="'success'" rounded />
        <VButton :label="'Info'" :color="'info'" rounded />
        <VButton :label="'Warning'" :color="'warning'" rounded />
        <VButton :label="'Danger'" :color="'danger'" rounded />
      </div>
      <h2 class="heading-2">Rounded</h2>
      <div class="line">
        <VButton :label="'Primary'" :color="'primary'" outlined />
        <VButton :label="'Secondary'" :color="'second'" outlined />
        <VButton :label="'Success'" :color="'success'" outlined />
        <VButton :label="'Info'" :color="'info'" outlined />
        <VButton :label="'Warning'" :color="'warning'" outlined />
        <VButton :label="'Danger'" :color="'danger'" outlined />
      </div>
      <h2 class="heading-2">Icons</h2>
      <div class="line">
        <VButton :icon="'heart'" :color="'primary'" outlined />
        <VButton :icon="'hand'" :color="'second'" />
        <VButton :icon="'address-book'" :color="'success'" outlined />
        <VButton :icon="'credit-card'" :color="'info'" />
        <VButton :icon="'lemon'" :color="'warning'" outlined />
        <VButton :icon="'hourglass'" :color="'danger'" />
      </div>
      <h2 class="heading-2">Size</h2>
      <div class="line">
        <VButton :label="'Primary'" :color="'primary'" :size="'large'" />
        <VButton :label="'Secondary'" :color="'second'" :size="'large'" />
        <VButton :label="'Success'" :color="'success'" :size="'large'" />
        <VButton :label="'Info'" :color="'info'" :size="'large'" />
        <VButton :label="'Warning'" :color="'warning'" :size="'large'" />
        <VButton :label="'Danger'" :color="'danger'" :size="'large'" />
      </div>
      <h2 class="heading-2">Events</h2>
      <div class="line">
        <VButton :label="'@click'" :color="'danger'" @emitClickButton="logi" />
      </div>
    </div>
  </div>
</template>
