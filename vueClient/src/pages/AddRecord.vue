<template>
  <div style="width: 500px" bordered>
    <q-card class="my-card text-black">
      <q-card-section>
        <div class="text-h6">Add New Record</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="save">
          <q-input v-model="addRecord.nameSurname" label="nameSurname" />
          <q-input v-model="addRecord.email" label="Email" />
          <q-input v-model="addRecord.company" label="company" />
          <q-input v-model="addRecord.phone" label="phone" />
          <q-input v-model="addRecord.website" label="website" />

          <q-input v-model="addRecord.country" label="Country" />
          <q-input v-model="addRecord.city" label="City" />
          <q-btn type="submit" label="AddRecord" color="primary" />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { store } from "../store";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const addRecord = ref({});

const save = async () => {
  addRecord.value.nameSurname = addRecord.value.nameSurname;
  addRecord.value.email = addRecord.value.email;
  addRecord.value.company = addRecord.value.company;
  addRecord.value.phone = addRecord.value.phone;
  addRecord.value.website = addRecord.value.website;
  addRecord.value.country = addRecord.value.country;
  addRecord.value.city = addRecord.value.city;

  console.log(addRecord.value);
  await store.dispatch("records/create", addRecord.value);

  resetForm();
};

const resetForm = () => {
  addRecord.value = {};
};

// const initialize = async () => {
//   if (route.params.id) {
//     await store.dispatch("users/get", route.params.id);
//     addRecord.value = store.state.users.detail;

//     console.log(addRecord.value);
//   }
// };

// initialize();
</script>
