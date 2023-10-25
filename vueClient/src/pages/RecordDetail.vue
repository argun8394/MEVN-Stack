<template>
  <div style="width: 500px" bordered>
    <q-card class="my-card text-black">
      <q-card-section>
        <div class="text-h6">Record Detail</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="updateUser">
          <q-input v-model="editRecord.nameSurname" label="Username" />
          <q-input v-model="editRecord.email" label="Email" />
          <q-input v-model="editRecord.company" label="company" />
          <q-input v-model="editRecord.phone" label="phone" />
          <q-input v-model="editRecord.website" label="website" />

          <q-input v-model="editRecord.country" label="Country" />
          <q-input v-model="editRecord.city" label="City" />
          <q-btn type="submit" label="Update" color="primary" />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { store } from "../store";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();

const editRecord = ref({});

const updateUser = async () => {
  editRecord.value.username = editRecord.value.username;
  editRecord.value.email = editRecord.value.email;
  editRecord.value.company = editRecord.value.company;
  editRecord.value.phone = editRecord.value.phone;
  editRecord.value.website = editRecord.value.website;

  editRecord.value.country = editRecord.value.country;
  editRecord.value.city = editRecord.value.city;

  console.log(editRecord.value);
  await store.dispatch("records/update", editRecord.value);

  router.push("/RecordList");
};

const resetForm = () => {
  editRecord.value = {};
};

const initialize = async () => {
  if (route.params.id) {
    await store.dispatch("records/get", route.params.id);
    editRecord.value = store.state.records.detail.result;
  }
};

initialize();
</script>
