<template>
    <div class="headArea" @click="gotoHome">
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
.headArea{
    width: 100px;
    padding: .1rem;
    margin-bottom: 5px;
    background: rgb(5, 68, 105);
    font-weight: bold;
    color: yellow;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 5px;
}
</style>
