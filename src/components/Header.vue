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
    content: "";
    width: 95px;
    height: 55px;
    padding:.1rem;
    margin: 8px;
    background: rgb(5, 68, 105);
    font-weight: bold;
    color: yellow;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 5px;
    left: -30px;
    transform: rotateZ(-6deg);
    box-shadow: -5px 8px 15px black;
}
</style>
