<template>
    <div class="home">

        <h1 class="title">
            🌤 Mon application météo
        </h1>

        <p class="subtitle">
            Consultez la météo des villes de la région
            en temps réel.
        </p>

        <div class="buttons">

            <RouterLink to="/villes" class="btn">
                Voir les villes
            </RouterLink>

            <RouterLink to="/carte" class="btn">
                Voir la carte
            </RouterLink>

        </div>

    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
.home {
    min-height: 80vh;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    text-align: center;
}

.title {
    font-size: 3rem;
    margin-bottom: 20px;
}

.subtitle {
    font-size: 1.2rem;
    max-width: 500px;
    margin-bottom: 40px;
}

.buttons {
    display: flex;
    gap: 20px;
}

.btn {
    text-decoration: none;

    padding: 15px 25px;

    border-radius: 10px;

    font-weight: bold;

    border: 1px solid #ccc;

    transition: 0.3s;
}

.btn:hover {
    transform: translateY(-3px);
}
</style>