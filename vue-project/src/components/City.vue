<template>
  <div class="card">
    <h1>Météo - Détail d'une ville</h1>

    <h2>{{ city.name }}</h2>
    <p>{{ city.weather }}</p>
    <p>{{ city.temperature }} °C</p>

    <p>mise à jour le {{ formatDate(city.updatedAt) }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: {
        name: 'Ma ville',
        weather: 'Peu nuageux',
        temperature: 20.55,
        updatedAt: new Date()
      }
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString()
    }
  }
}
</script>
<style>
.card {
  border: 1px solid #ccc;
  padding: 16px;
  width: 220px;
  border-radius: 10px;
  font-family: Arial;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 10px;
}
</style>