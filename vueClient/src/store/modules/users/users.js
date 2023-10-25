import Api from "../../api";

const state = {
  all: [],
  detail: {},
  count: 0,
  isAuthenticated: false,
};
const actions = {
  getAll: async (context) => {
    let url = `/user`;
    let d = (await Api.get(url)).data;
    console.log(d);
    context.commit("getAll", d);
    return d;
  },
  get: async (context, id) => {
    let url = `/user/${id}`;
    let data = (await Api.get(url)).data;
    context.commit("get", data);
  },
  delete: async (context, id) => {
    await Api.delete(`/user/${id}`);
  },
  create: async (context, data) => {
    let url = `/user`;
    (await Api.post(url, data)).data;
  },
  update: async (context, data) => {
    // console.log(data._id);
    let url = `/user/${data._id}`;
    (await Api.put(url, data)).data;
  },
};
const mutations = {
  getAll(state, data) {
    state.all = data;
  },
  get(state, data) {
    state.detail = data;
  },
  setAuthenticated(state, value) {
    state.isAuthenticated = value;
  },
};
export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
