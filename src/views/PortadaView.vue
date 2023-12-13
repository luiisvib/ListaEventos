<template>
    <section>
        <h1>Random Events</h1>
        <router-link id="boton" to="/Login">Acceder</router-link> 
    </section>
</template>

<script>
export default {
  name: 'PortadaView',
}

</script>

<style lang="sass" scoped>
section
    height: 100vh
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column

    h1
        color: #669bbc
        font-size: 50px
        width: 30px
        display: flex
        justify-content: center
        align-items: center
        text-align: center

    #boton
        text-decoration: none
        color: white
        margin-top: 90px
        background-color: #780000
        padding: 15px 20px
        border-radius: 20px

</style>