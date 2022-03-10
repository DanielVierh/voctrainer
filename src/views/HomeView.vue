<template>
    <div class="home">
        <nav>
            <router-link to="/AddNewLanguage">Neue Sprache +</router-link>
        </nav>
        <hr />
           <LangContainer :myLanguages="myLanguages" />
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import Header from '../components/Header.vue';
import LangContainer from '../components/LangContainer';
export default {
    name: 'HomeView',
    components: {
        Header,
        LangContainer,
    },
    setup() {
        let myLanguages = ref([]);
        let storedObj = {
            _Theme: 'light',
            _myLanguages: [],
        };

        //#######################################################
        //              ***** LocalStorage *****
        // Später sollen nur noch Theme und kleinere, unwichtige
        // Settings hierüber abgespeichert werden
        //#######################################################
        // Load Data into LocalStorage
        const load_Data_from_LocalStorage = () => {
            // Check ob Daten im LocalStorage vorhanden sind
            if (localStorage.getItem('stored_VocData') !== null) {
                // Hauptobj befüllen
                storedObj = JSON.parse(localStorage.getItem('stored_VocData'));
                console.log('Speicherobj befüllt', storedObj);
                // abgespeicherte Sprachpakete befüllen
                if (storedObj._myLanguages !== null) {
                    myLanguages = [];
                    myLanguages = storedObj._myLanguages;
                }
            }
        };

        load_Data_from_LocalStorage();

        //#######################################################

        return {myLanguages}
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
        background: #15b32a;
        padding: 0.5rem;
        border-radius: 8px;
        box-shadow: 5px 5px 15px black, inset 3px 3px 5px white;
        border: 1px solid gray;
    }
}
</style>
