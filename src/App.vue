<template>
  <div class="app">
    <header>
      mono test task
    </header>
    <main>
      <aside class="sidebar">
        Сайдбар
      </aside>
      <div class="content">
        Контент
      </div>
    </main>
    <footer>
      Футер
    </footer>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
};
</script>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  main {
    display: flex;
  }
}


</style>
