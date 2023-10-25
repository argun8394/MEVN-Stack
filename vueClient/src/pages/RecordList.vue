<template>
  <div class="q-pa-md">
    <q-input
      v-model="search"
      placeholder="Search by nameSurname"
      style="width: 1500px"
    />
    <q-table
      title="Records"
      :rows="
        res
          .filter((record) =>
            record.nameSurname.toLowerCase().includes(search.toLowerCase())
          )
          .map((record, index) => ({
            index: index + 1,
            ...record,
          }))
      "
      :columns="columns"
      row-key="index"
      :rows-per-page-options="[5, 7, 15]"
      flat
      bordered
      style="width: 1500px"
    >
      <!-- :hide-bottom="emptyData.length > 0" -->
      <template v-slot:body="props">
        <q-tr
          v-if="
            props.row.nameSurname.toLowerCase().includes(search.toLowerCase())
          "
          :props="props"
        >
          <q-td key="index">{{ props.row.index }}</q-td>
          <q-td key="nameSurname" :props="props">{{
            props.row.nameSurname
          }}</q-td>
          <q-td key="email" :props="props">{{ props.row.email }}</q-td>
          <q-td key="company" :props="props">{{ props.row.company }}</q-td>
          <q-td key="phone" :props="props">{{ props.row.phone }}</q-td>
          <q-td key="website" :props="props">{{ props.row.website }}</q-td>
          <q-td key="country" :props="props">{{ props.row.country }}</q-td>
          <q-td key="city" :props="props">{{ props.row.city }}</q-td>

          <q-td>
            <q-btn @click="editUser(props.row)" color="primary" icon="edit" />
            <q-btn
              @click="deleteUser(props.row)"
              icon="delete"
              color="negative"
              style="margin-left: 8px"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-btn @click="show()" color="primary" icon="add">show More</q-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { store } from "../store";
import { useRouter } from "vue-router";

const router = useRouter();

const res = ref(null);
const search = ref("");
const showMore = ref(false);

const show = () => (showMore.value = true);

const columns = [
  { name: "index", label: "", field: "index" },
  {
    name: "nameSurname",
    align: "center",
    label: "nameSurname",
    field: "nameSurname",
    sortable: false,
  },
  {
    name: "email",
    align: "center",
    label: "Email",
    field: "email",
    sortable: false,
  },
  {
    name: "company",
    align: "center",
    label: "company",
    field: "company",
    sortable: true,
  },
  {
    name: "phone",
    align: "center",
    label: "phone",
    field: "phone",
    sortable: true,
  },
  {
    name: "website",
    align: "center",
    label: "website",
    field: "website",
    sortable: true,
  },
  {
    name: "country",
    align: "center",
    label: "country",
    field: "country",
    sortable: true,
  },
  {
    name: "city",
    align: "center",
    label: "city",
    field: "city",
    sortable: true,
  },
  {
    name: "edit",
    align: "center",
    label: "Action",
    field: "edit",
  },
];

const editUser = (user) => {
  console.log(user._id);
  router.push(`/RecordDetail/${user._id}`);
};
const deleteUser = async (user) => {
  console.log(user);

  await store.dispatch("records/delete", user._id);

  await store.dispatch("records/getAll");
};

const start = async () => {
  let data = await store.dispatch("records/getAll");

  res.value = data.result;

  console.log(res.value);
};

start();
</script>

<style></style>
