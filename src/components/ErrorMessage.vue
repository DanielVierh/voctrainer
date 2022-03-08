<template>
    <p class="ErrorMessage"> {{ errorMessage }}</p>
</template>

<script>
export default {
    props: ['errorMessage'],
}
</script>

<style lang="scss">
.ErrorMessage{
    background: linear-gradient(to right,#a50303,#3d0000);
    color: rgb(250, 244, 244);
    font-weight: bold;
    border-radius: 15px;
    height: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
