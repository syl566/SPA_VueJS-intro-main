<template>
  <div id="app">
    <h1>Bienvenue sur ma page météo</h1>

    <RouterLink to="/villes">
      Voir la liste des villes
    </RouterLink>

    <RouterView />
  </div>
</template>

<script>

export default {
  name: 'App',

  }


</script>

<style scoped>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>