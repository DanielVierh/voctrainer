<template>
  <div v-if="languages.length" class="buttonContainer">
    <div v-for="lang in languages" :key="lang">
      <button class="languageButton">{{lang}}</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["testLanguages"],

  setup(props) {
    const languages = ref(props.testLanguages);

    return { languages };
  }
};
</script>

<style>
.languageButton {
  background: rgb(59, 45, 248);
  color: white;
  width: 140px;
  padding: 1rem;
  border-radius: 25px;
  border: 1px solid black;
  font-weight: bold;
  font-size: 1rem;
  font-family: sans-serif;
  margin-bottom: 8px;
  cursor: pointer;
  box-shadow: 5px 5px 15px black, inset 3px 3px 5px white;

}

.buttonContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>