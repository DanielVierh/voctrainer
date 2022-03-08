<template>
    <div class="home">
        <nav>
            <router-link to="/AddNewLanguage">Neue Sprache +</router-link>
        </nav>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
export default {
    name: 'HomeView',
    components: {
        Header,
    },
};
</script>

<style lang="scss">
nav {
  padding: 30px;
    a {
        font-weight: bold;
        color: white;
        text-decoration: none;
        background: #2c3e50;
        padding: 0.5rem;
        border-radius: 8px;
        box-shadow: 5px 5px 15px black;
        border: 2px solid black;
    }
}
</style>
