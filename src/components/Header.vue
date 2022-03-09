<template>
    <div class="logo" @click="gotoHome">
        <p>Voctrainer</p>
    </div>
</template>

<script>
export default {
    methods: {
        gotoHome() {
            this.$router.push('/');
        }
    }
};
</script>

<style>
.logo{
    width: 100px;
    padding: .1rem;
    margin: 8px;
    background: rgb(5, 68, 105);
    font-weight: bold;
    color: yellow;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 5px;
    transform: rotate(-8deg);
}
</style>
