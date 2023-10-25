import store from "../store";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "indexPage",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/login",
        name: "loginPage",
        component: () => import("src/pages/LoginPage.vue"),
      },
      {
        path: "/signup",
        name: "signUp",
        component: () => import("src/pages/SignUp.vue"),
      },
      {
        path: "/RecordList",
        name: "recordList",
        component: () => import("src/pages/RecordList.vue"),
        // meta: { requiresAuth: true },
      },
      {
        path: "/RecordDetail/:id",
        name: "usersDetail",
        component: () => import("src/pages/RecordDetail.vue"),
        // meta: { requiresAuth: true },
      },
      {
        path: "/addRecord",
        name: "addRecord",
        component: () => import("src/pages/AddRecord.vue"),
        // meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
