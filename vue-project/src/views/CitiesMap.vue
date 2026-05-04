<template>
  <div>

    <h1>Carte météo</h1>

    <div id="map"></div>

  </div>
</template>

<script>
import L from 'leaflet'

export default {

  name: 'CitiesMap',

  data() {
    return {
      cities: []
    }
  },

  async mounted() {

    const map = L.map('map').setView(
      [45.75, 4.85],
      7
    )

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: 'OpenStreetMap'
      }
    ).addTo(map)

    const apiKey =
      import.meta.env.VITE_WEATHER_API_KEY

    const cityNames = [
      'Grenoble',
      'Lyon',
      'Marseille',
    ]

    for (const cityName of cityNames) {

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=fr`
      )

      const data = await response.json()

      const city = {

        name: data.name,

        weather:
          data.weather[0].description,

        temperature:
          data.main.temp,

        lat:
          data.coord.lat,

        lon:
          data.coord.lon

      }

      this.cities.push(city)

      L.marker([
        city.lat,
        city.lon
      ])
        .addTo(map)
        .bindPopup(
          `
          <b>${city.name}</b><br>
          ${city.weather}<br>
          ${city.temperature} °C
          `
        )
    }

  }

}
</script>
<style scoped>
#map {
  height: 600px;
  width: 100%;
  margin-top: 20px;
}
</style>