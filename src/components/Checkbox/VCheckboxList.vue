<script setup>
import VCheckbox from "./VCheckbox.vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Array,
    required: true,
  },
  options: {
    type: Array,
    required: true,
    validator: (value) => {
      const hasNameKey = value.every((item) =>
        Object.keys(item).includes("name")
      );
      const hasIdKey = value.every((item) => Object.keys(item).includes("id"));
      return hasNameKey && hasIdKey;
    },
  },
});

const emits = defineEmits(["update:value"]);

const check = (params) => {
  let updateVal = [...props.value];

  params.checked
    ? updateVal.push(params.optionId)
		: updateVal.splice(updateVal.indexOf(params.optionId));

		emits('update:value', updateVal)
};
</script>

<template>
  <div class="checkbox-list" v-for="option in options" :key="option.id">
    <VCheckbox
      :label="option.name"
      :value="option.name"
      :id="option.id"
      :name="name"
      :checked="value.includes(option.id)"
      :group="true"
      @updateCheckboxGroup="check"
    />
  </div>
</template>

<style lang="scss" scoped></style>
