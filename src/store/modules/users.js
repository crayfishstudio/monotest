import axios from "axios";

export default {
  namespaced: true,
  state: {
    users: [
      {
        id: 1,
        name: "ivan",
      },
    ],
  },
  getters: {
    allUsers(state) {
      return state.users;
    }
  },
  actions: {
    async getUsers(ctx) {
      axios
      .get('https://api.github.com/users')
      .then(response => (
        ctx.commit('updateUsers', response.data)
      ));
    },
  },
  mutations: {
    updateUsers(state, payload) {
      state.users = payload;
    }
  },
};
