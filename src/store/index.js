import { createStore } from 'vuex'
import users from './modules/users.js'
import selectedUsers from './modules/selectedUsers.js'

export default createStore({
  modules: {
    users,
    selectedUsers
  }
})
