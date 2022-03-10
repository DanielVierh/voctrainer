<template>
    <div>
        <h2>Neue Sprache hinzufügen</h2>
        <ErrorMessage v-if="isError" :errorMessage="errorMessage" />
        <form @submit.prevent="handleAddNewLanguage">
            <select v-model="choosenLanguage" @click="hideError">
                <option v-for="language in languagePack" :key="language">
                    {{ language }}
                </option>
            </select>
            <button>Erstellen</button>
        </form>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import ErrorMessage from '../components/ErrorMessage.vue';
import {useRouter} from 'vue-router';
import {ref} from '@vue/reactivity';

export default {
    components: {
        Header,
        ErrorMessage,
    },

    setup() {
        const router = useRouter();
        const isError = ref(false);
        const errorMessage = ref('');
        const choosenLanguage = ref('');
        const languagePack = [
            'Englisch',
            'Französisch',
            'Griechisch',
            'Italienisch',
            'Isländisch',
            'Niederländisch',
            'Portugiesisch',
            'Schwedisch',
            'Spanisch',
            'Türkisch',
        ];

        let myLanguages = [];
        let storedObj = {
            _myLanguages: [],
            _lang_Words: [],
        };

// Neue Sprache hinzufügen
        const handleAddNewLanguage = () => {
            if (choosenLanguage.value === '') {
                errorMessage.value = 'Bitte eine Sprache auswählen!';
                isError.value = true;
            } else {
                // Todo Sprachpaket abspeichern
                // Überprüfen, ob bereits vorhanden
                if (isNewLanguage(choosenLanguage.value) === true) {
                    const newLang = {
                        name: choosenLanguage.value,
                        wordArr: [],
                    };
                    myLanguages.push(newLang);
                    save_Data_into_LocalStorage();
                    router.push({name: 'home'});
                }else{
                    errorMessage.value = 'Sprache ist bereits vorhanden!';
                    isError.value = true;
                }
            }
        };

        const isNewLanguage = (langName) => {
            for(let i = 0; i < myLanguages.length; i++) {
                if(myLanguages[i].name === langName) {
                    return false
                }
            }
            return true
        }

        const hideError = () => {
            isError.value = false;
        };

        //#######################################################
        //              ***** LocalStorage *****
        // Später sollen nur noch Theme und kleinere, unwichtige
        // Settings hierüber abgespeichert werden
        //#######################################################
        // Save Data from LocalStorage
        const save_Data_into_LocalStorage = () => {
            storedObj._myLanguages = myLanguages;
            // storedObj._myLanguages.push(myLanguages);
            localStorage.setItem('stored_VocData', JSON.stringify(storedObj));
            // console.log('Gesp: ', storedObj);
        };
        // Load Data into LocalStorage
        const load_Data_from_LocalStorage = () => {
            // Check ob Daten im LocalStorage vorhanden sind
            if (localStorage.getItem('stored_VocData') !== null) {
                // Hauptobj befüllen
                storedObj = JSON.parse(localStorage.getItem('stored_VocData'));
                // console.log('Speicherobj befüllt', storedObj);
                // abgespeicherte Sprachpakete befüllen
                if (storedObj._myLanguages !== null) {
                    myLanguages = [];
                    myLanguages = storedObj._myLanguages;
                    // console.log('Sprachpaket befüllt', myLanguages);
                }
            } else {
                // console.warn('Keine Daten vorh');
            }
        };

        load_Data_from_LocalStorage();

        //#######################################################

        return {
            languagePack,
            handleAddNewLanguage,
            isError,
            choosenLanguage,
            errorMessage,
            hideError,
        };
    },
};
</script>

<style lang="scss">
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
select {
    padding: 10px 6px;
    width: 50%;
    max-width: 170px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
    font-weight: bold;
    border-radius: 8px;
    background: rgb(204, 204, 204);

    option {
        color: #0b6dff;
        font-weight: bold;
    }
}

button {
    display: block;
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    font-weight: bold;
}
</style>
