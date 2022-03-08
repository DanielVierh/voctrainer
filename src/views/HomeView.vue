<template>
  <div class="home">
    <nav>
      <router-link to="/AddNewLanguage">Neue Sprache +</router-link>
    </nav>
    <hr />
    <LangContainer :testLanguages="testLanguages" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import LangContainer from "../components/LangContainer";
export default {
  name: "HomeView",
  components: {
    Header,
    LangContainer
  },
  data() {
    return {
      testLanguages: ["Englisch", "Spanisch", "Italienisch"]
    };
  }
};
</script>

<style lang="scss">
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    background: #15b32a;
    padding: 0.5rem;
    border-radius: 8px;
    box-shadow: 5px 5px 15px black, inset 3px 3px 5px white;
    border: 1px solid gray;
  }
}
</style>
