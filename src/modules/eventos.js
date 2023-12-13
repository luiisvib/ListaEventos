export default {
  namespaced: true,   
  state: {
    usuario: "user777",
    contraseña: "777",
    ArrayEventosDisponibles: [
        {
            nombre: "Fiesta de disfraces",
            url: "url('https://www.1zoom.me/big2/90/197250-frederika.jpg')",
            fecha: "13/03/2023",
            favorito: false
        },
        {
            nombre: "Fuegos artificiales",
            url: "url('https://wallpapersmug.com/download/1280x1024/e0afc0/celebration-fireworks-sky.jpg')",
            fecha: "20/03/2023",
            favorito: false
        },
        {
            nombre: "Feria videojuegos",
            url: "url('https://a-static.besthdwallpaper.com/2021-celebration-time-pokemon-unite-online-videogame-wallpaper-1280x1024-74930_32.jpg')",
            fecha: "24/03/2023",
            favorito: false
        },
        {
            nombre: "DjDjDj Marshmello",
            url: "url('https://wallpapersmug.com/download/1280x1024/1ca559/marshmello-music-dj.jpg')",
            fecha: "28/03/2023",
            favorito: false
        }
    ]   
  },
  getters: {
  },
  mutations: {
    CambiarFav(state, index){
        if (state.ArrayEventosDisponibles[index].favorito){
            state.ArrayEventosDisponibles[index].favorito = false
        }else{
            state.ArrayEventosDisponibles[index].favorito = true
        }
    }
  },
  actions: {
  },
  modules: {
  }
}
