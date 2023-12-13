<template>
    <nav id="seccion_menu">
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
          <i class="fa-solid fa-bars"></i>
        </label>
        <ul>
            <li><a href="#"><router-link to="/Login">Login</router-link></a></li>
            <li><a href="#"><router-link to="/EventosDisponibles">Eventos</router-link></a></li>
            <li><a href="#"><router-link to="/MisEventos">Mis eventos</router-link></a></li>
        </ul>
    </nav>
    <section id="seccion_principal_eventos">
        <h1>Mis eventos</h1>
        <section id="seccion_eventos">
            <section id="seccionvfor" v-for="objeto in ArrayEventosDisponibles" :key="objeto.nombre">
                <section id="seccionvif" v-if="objeto.favorito" :style="{backgroundImage: objeto.url}">
                    <span>
                        <h2>{{ objeto.nombre }}</h2>
                        <p>{{objeto.fecha}}</p>
                    </span>
                    <i style="opacity: 0;" class="fa-solid fa-heart"></i>
                </section>
            </section>
        </section>
    </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'EventosDisponiblesView',
  computed:{
    ...mapState("eventos", ["ArrayEventosDisponibles"])
  }
}
let mi_funcion = () => {
    return new Promise ((resolve, reject) => {
        let a = 1 + 2
        if ( a == 2 ){
            resolve("Exito")
        }else{
            reject("Fracaso")
        }
    })
}

let mi_funcion_asincrona = async () => {
    let mi_respuesta =  await mi_funcion()
    console.log(mi_respuesta)
}
mi_funcion_asincrona()

</script>

<style lang="sass" scoped>

*
    padding: 0
    margin: 0
    text-decoration: none
    list-style: none

#seccion_menu
    height: 82px
    width: 100


#seccion_menu ul
    float: right
    margin-right: 20px

#seccion_menu ul li
    display: inline-block
    line-height: 80px
    margin: 0 5px

#seccion_menu ul li a
    color: white
    font-size: 20px
    padding: 7px 13px
    border-radius: 15px
    background-color: red
    opacity: 0.8

.checkbtn
    font-size: 30px
    color: #fff
    float: right
    line-height: 80px
    margin-right: 40px
    cursor: pointer
    display: none

#check
    display: none


section img
    width: 100%

@media only screen and (max-width: 768px)
  .checkbtn
    display: block

  ul 
    position: fixed 
    width: 100% 
    height: 100vh 
    background: #2c3e50 
    top: 80px 
    left: -100% 
    text-align: center 
    transition: .5s 

  #seccion_menu ul li
    display: block 
    margin: 50px 0 
    line-height: 90px 

  #seccion_menu ul li a
    font-size: 20px 

  #check:checked ~ ul
    left: 0 
    opacity: 0.9

  section img 
    width: 93rem 

#seccion_principal_eventos
    display: flex
    justify-content: flex-start
    align-items: center
    flex-direction: column
    height: 100%
    padding-bottom: 40px

    h1
        color: #669bbc
        font-size: 55px
        display: flex
        font-weight: 700
        justify-content: center
        align-items: center
        text-align: center
        margin-top: 40px

    #seccion_eventos
        display: flex
        justify-content: flex-start
        flex-direction: column
        align-items: center
        margin-top: 20px

        #seccionvfor
            display: flex
            justify-content: center
            flex-direction: column
            align-items: center

        #seccionvif
            width: 350px
            min-height: 280px
            height: 280px
            border-radius: 5px
            border: 1px solid aliceblue
            margin-top: 20px
            display: flex
            justify-content: space-around
            flex-direction: row
            align-items: flex-end
            background-size: 350px 280px

            span
                display: flex
                justify-content: center
                flex-direction: column

                h2  
                    color: black
                    background-color: white
                    width: 200px
                    padding: 4px
                    margin-bottom: 12px
                    font-size: 20px

                p
                    color: black
                    background-color: white
                    width: 85px
                    padding: 7px
                    font-size: 12px
                    margin-bottom: 15px

            i
                font-size: 40px
                color: white
                margin-bottom: 20px
                cursor: pointer



</style>