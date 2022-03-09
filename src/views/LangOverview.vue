<template>
    <div>
        <h1>Englisch</h1>
        <div class="buttonContainer">
            <button class="menueButton">Neues Wort</button>
            <button class="menueButton">Karteikarten</button>
            <button class="menueButton">Schreibtest</button>
            <button class="menueButton">Verwalten</button>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    setup() {
        return {};
    },
};
</script>

<style>
.menueButton {
    width: 150px;
    padding: 1rem;
    margin-bottom: 8px;
    border-radius: 15px;
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 5px 5px 15px black, inset 3px 3px 5px white;
    background: rgb(255, 196, 4);
}
</style>
