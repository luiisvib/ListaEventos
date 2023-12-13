<template>
    <section>
        <h1>Login</h1>
        <input type="text" placeholder="Usuario..." v-model="usuarioInput">
        <input type="password" placeholder="Contraseña..." v-model="contraseñaInput">
        <router-link id="boton" @click="comprobarUsr" to="#">Entrar</router-link> 
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'LoginView',
  data() {
    return {
        usuarioInput: "",
        contraseñaInput: ""
    }
  },
  computed:{
    ...mapState("eventos", ["usuario", "contraseña"])
  },
  methods: {
    comprobarUsr(){
        if (this.usuarioInput == this.usuario && this.contraseñaInput == this.contraseña){
            this.usuarioInput=""
            this.contraseñaInput=""
            window.location.href = "/EventosDisponibles"
        }else{
            console.log("Incorrecto")
        }
    }
  },
}
</script>

<style lang="sass" scoped>
section
    height: 100vh
    width: 100%
    display: flex
    justify-content: flex-start
    align-items: center
    flex-direction: column

    h1
        color: #669bbc
        font-size: 50px
        display: flex
        justify-content: center
        align-items: center
        text-align: center
        margin-top: 60px

    input
        width: 300px
        font-size: 25px
        padding: 8px
        border: none
        border-radius: 15px
        margin-top: 80px

    #boton
        text-decoration: none
        color: white
        margin-top: 90px
        background-color: #780000
        padding: 15px 20px
        border-radius: 20px

</style>