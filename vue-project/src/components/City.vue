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