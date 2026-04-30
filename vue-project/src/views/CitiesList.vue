<template>
  <div>
    <h1>Météo - Liste des villes</h1>
  </div>
</template>

<script>
import City from '../components/City.vue'

export default {
  props: ['name', 'weather', 'temperature', 'updatedAt'],
  components: { City }
}


</script>