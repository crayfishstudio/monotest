<template>
  <div class="app">
    <header>
      mono test task
    </header>
    <main>
      <aside class="sidebar">
        <router-link :to="'/'">Users</router-link>
        <router-link :to="'selectedUsers'">Selected users</router-link>
      </aside>
      <div class="content">
        <User/>
      </div>
    </main>
    <footer>
      Футер
    </footer>
  </div>
</template>

<script>
import User from "./components/User.vue"

export default {
  name: "App",
  components: {
    User
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  header {
    width: 100%;
    background-color: #666;
    color: #fff;
    padding: 1rem 2rem;
    font-size: 1.5rem;
  }

  main {
    display: flex;

    .sidebar {
      width: 256px;
      padding: 1rem 2rem;
      border-right: 1px solid #666;

      a {
        display: block;

        &:not(:last-of-type) {
          margin-bottom: .75rem;
        }
      }
    }

    .content {

    }
  }
}
</style>
