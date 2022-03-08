<template>
    <div>
        <h2>Neue Sprache hinzufügen</h2>
        <ErrorMessage v-if="isError" :errorMessage="errorMessage" />
        <form @submit.prevent="handleAddNewLanguage" >
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

        const handleAddNewLanguage = () => {
            if (choosenLanguage.value === '') {
                errorMessage.value = 'Bitte eine Sprache auswählen';
                isError.value = true;
            } else {
                // Todo Sprachpaket abspeichern
                console.log(`${choosenLanguage.value}`);
                router.push({name: 'home'});
            }
        };

        const hideError = () => {
            isError.value = false;
        }

        return {
            languagePack,
            handleAddNewLanguage,
            isError,
            choosenLanguage,
            errorMessage,
            hideError
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
