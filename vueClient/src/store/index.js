// import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import users from "./modules/users/users";
import records from "./modules/records/records";

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export const store = createStore({
  modules: {
    users,
    records,
  },
});

export default { store };
