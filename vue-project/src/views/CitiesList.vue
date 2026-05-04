<template>
  <div class="cities-container">

    <h1>Météo ☀️</h1>

    <!-- Chargement -->
    <p v-if="loading">
      Requête en cours...
    </p>

    <!-- Erreur -->
    <p v-else-if="error" class="error">
      {{ error }}
    </p>

    <!-- Données -->
    <div v-else class="cards-grid">

      <City v-for="city in cities" :key="city.id" :city="city" />

    </div>
  </div>
</template>
<script>
import City from '@/components/City.vue'

export default {

  name: 'CitiesList',

  components: {
    City
  },

  data() {
    return {

      cities: [],

      loading: false,

      error: null

    }
  },

  async created() {

    await this.loadWeather()

  },

  methods: {

    async loadWeather() {

      this.loading = true

      this.error = null

      try {

        const apiKey =
          import.meta.env.VITE_WEATHER_API_KEY


        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/find?lat=45.758&lon=4.765&cnt=20&cluster=yes&lang=fr&units=metric&appid=${apiKey}`
        )


        if (!response.ok) {

          throw new Error(
            'Impossible de récupérer les données météo'
          )

        }


        const data =
          await response.json()


        console.log(data)


        for (const cityData of data.list) {


          this.cities.push({

            id:
              cityData.id,

            name:
              cityData.name,

            weather:
              cityData.weather[0].description,

            temperature:
              cityData.main.temp,

            updatedAt:
              new Date(),

            lat:
              cityData.coord.lat,

            lon:
              cityData.coord.lon

          })

        }

      } catch (error) {


        this.error =
          error.message

      } finally {


        this.loading =
          false

      }

    }

  }

}
</script>
<style scoped>
.cities-container {
  text-align: center;
}

.error {
  color: red;
  font-weight: bold;
  margin: 20px 0;
}
</style>