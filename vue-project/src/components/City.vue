<template>
  <div class="card">

    <h2>{{ city.name }}</h2>
    <p>{{ city.weather }}</p>
    <p>{{ city.temperature }} °C</p>

    <p>mise à jour le {{ formatDate(city.updatedAt) }}</p>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
      required: true
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
  font-family: Arial;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}




h2 {
  margin-bottom: 10px;

}
</style>