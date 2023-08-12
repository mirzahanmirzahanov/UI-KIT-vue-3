<script setup>
import VInput from "../components/VInput.vue";
import VButton from "../components/VButton.vue";
import { ref, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  helpers,
  minLength,
  maxLength,
  numeric,
  email,
  sameAs,
} from "@vuelidate/validators";

const validateRules = computed(() => ({
  userName: {
    minLength: helpers.withMessage("Введите минимум 4 символа!", minLength(4)),
  },
  userEmail: {
    email: helpers.withMessage("Введите корректный email!", email),
  },
  userLuckyNum: {
    numeric: helpers.withMessage("Введите число!", numeric),
    maxLength: helpers.withMessage(
      "Введите число не больше 6 символов!",
      maxLength(6)
    ),
  },
  userConfirmPass: {
    sameAsPassword: helpers.withMessage(
      "Пароли не совпадают!",
      sameAs(userPass.value)
    ),
  },
  customField: {
    customField: helpers.withMessage("Должно быть слово zada!", customValid),
  },
}));

const userName = ref("");
const userEmail = ref("");
const userLuckyNum = ref("");
const userPass = ref("");
const userConfirmPass = ref("");
const customField = ref("");

const customValid = (value) => value.includes("zada");

const submitForm = () => {
  v.value.$touch();
  if (v.value.$error) return console.log(v.value.$errors);
  alert("Форма отправлена успешно!");
};

const v = useVuelidate(validateRules, {
  userName,
  userEmail,
  userLuckyNum,
  userConfirmPass,
  customField,
});
</script>

<template>
  <div class="input-page">
    <div class="input-page__container">
      <h1 class="heading-1">Inputs</h1>
      <form @submit.prevent="submitForm">
        <VInput
          :label="'Your name'"
          :name="'name'"
          :placeholder="'Input your name'"
          v-model:value="v.userName.$model"
          :errors="v.userName.$errors"
        />
        <VInput
          :label="'Your email'"
          :name="'email'"
          :placeholder="'Input your email'"
          v-model:value="v.userEmail.$model"
          :errors="v.userEmail.$errors"
        />
        <VInput
          :label="'Your lucky num'"
          :name="'luckyNum'"
          :placeholder="'Input your lucky num'"
          v-model:value="v.userLuckyNum.$model"
          :errors="v.userLuckyNum.$errors"
        />
        <VInput
          :label="'Your password'"
          :name="'pass'"
          :placeholder="'Input your password'"
          v-model:value="userPass"
          :type="'password'"
        />
        <VInput
          :label="'Confirm password'"
          :name="'confirmPass'"
          :placeholder="'Input confirm password'"
          v-model:value="v.userConfirmPass.$model"
          :errors="v.userConfirmPass.$errors"
        />
        <VInput
          :label="'Check zada'"
          :name="'zadaField'"
          :placeholder="'Input zada'"
          v-model:value="v.customField.$model"
          :errors="v.customField.$errors"
        />
        <VButton :label="'Submit'" :color="'primary'" />
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
