<template>
  <q-page class="flex flex-center bg-grey-2">
    <q-card
      class="q-pa-md shadow-2 my_card"
      style="max-width: 500px; min-width: 450px"
      bordered
    >
      <q-card-section class="text-center">
        <h4 class="text-primary text-weight-medium">SignUp</h4>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input v-model="form.username" filled label="User Name" />
          <q-input
            filled
            type="email"
            v-model="form.email"
            label="Your email *"
            lazy-rules
            :rules="[(val) => validateEmail(val) || 'Please type your email']"
          >
            <template v-slot:prepend>
              <q-icon name="email"></q-icon>
            </template>
          </q-input>

          <q-input
            v-model="form.password"
            label="Your password *"
            filled
            :type="!isPwd ? 'password' : 'text'"
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Please type your password',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="lock"></q-icon>
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility' : 'visibility_off'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <q-toggle
            v-model="form.accept"
            label="I accept the license and terms"
          />

          <div>
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

import { store } from "../store";
import { useRouter } from "vue-router";

const router = useRouter();

const isPwd = ref(false);
const form = ref({
  username: "",
  email: "",
  password: "",
  accept: false,
});

function validateEmail(email) {
  return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
}

const onSubmit = async () => {
  await store.dispatch("users/create", form.value);
  router.push(`/Login`);
};

const onReset = () => {
  form.value = {};
};
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 500px;
}
</style>
