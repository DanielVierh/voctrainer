<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input
                type="text"
                required
                placeholder="Nickname"
                v-model="displayName"
            />
            <input type="email" required placeholder="E-Mail" v-model="email" />
            <input
                type="password"
                required
                placeholder="Passwort"
                v-model="password"
            />
            <div class="error">{{ error }}</div>
            <button>Sign up</button>
        </form>
    </div>
</template>

<script>
import {ref} from '@vue/reactivity';
import useSignup from '../composables/useSignup';

export default {
    setup(props, context) {
        const {error, signup} = useSignup();
        // Refs
        const displayName = ref('');
        const email = ref('');
        const password = ref('');

        // Signup auslösen
        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value);
            if (!error.value) {
                // Wenn Login erfolgreich eigene Funktion zur Weiterleitung
                context.emit('signup');
            }
        };

        return {displayName, email, password, handleSubmit, error};
    },
};
</script>

<style></style>
