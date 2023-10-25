import Api from "../../api";

const state = {
  all: [],
  detail: {},
  count: 0,
};
const actions = {
  getAll: async (context) => {
    let url = `/record`;
    let d = (await Api.get(url)).data;
    console.log(d);
    context.commit("getAll", d);
    return d;
  },
  get: async (context, id) => {
    let url = `/record/${id}`;
    let data = (await Api.get(url)).data;
    context.commit("get", data);
  },
  delete: async (context, id) => {
    await Api.delete(`/record/${id}`);
  },
  create: async (context, data) => {
    let url = `/record`;
    (await Api.post(url, data)).data;
  },
  update: async (context, data) => {
    // console.log(data._id);
    let url = `/record/${data._id}`;
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
};
export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
