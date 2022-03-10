
<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input type="email" required placeholder="E-Mail" v-model="email">
            <input type="password" required placeholder="Passwort" v-model="password">
            <div class="error"> {{ error }} </div>
            <button>Log in</button>
        </form>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import useLogin from '../composables/useLogin'

export default {
    setup(props, context) {

        // Refs
        const email = ref('')
        const password = ref('')

        const {error, login} = useLogin()

        const handleSubmit = async () => {
            await login(email.value, password.value)
            if(!error.value) {
                // Wenn Login erfolgreich eigene Funktion zur Weiterleitung
                context.emit('login')
            }
        }

        return {email, password, handleSubmit, error}
    }
};
</script>

<style></style>
