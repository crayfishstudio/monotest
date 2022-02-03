import { createStore } from "vuex";
import users from "./modules/users";
import selectedUsers from "./modules/selectedUsers";

export default createStore({
  modules: {
    users,
    selectedUsers,
  },
});
