let Esqueleto = "off"; //variable que almacena el estado inicial del esqueleto en "off"
let Esqueleto_Stop = document.getElementById("Esqueleto_Stop"); //almacena el elemento con el id "Esqueleto_Stop"
let Boton_Sonido = new  Audio (); //creamos un objeto de audio
Boton_Sonido.src = "/assets/sound/audio.mp3";
let Boton_Audio = new Audio ("/assets/sound/botonbailar.mp3");

function dance(){
    if (Esqueleto === "off"){
        //modifica el estado
        Esqueleto = "on";
        //agrega la clase "Dance" al contenedor
        Esqueleto_Stop.classList.add("Dance");
        //agrega un evento de "click" para reproducir los sonidos
        Esqueleto_Stop.addEventListener('click', ()=>{
            Boton_Sonido.play();
            Boton_Audio.play();
        })

    } else {
        //modifica el estado y elimina la clase dance del contenedor 
        Esqueleto = "off";

        Esqueleto_Stop.classList.remove("Dance"); //classlist es util para modificar clases CSS aplicadas a un elemento

        //agregar un evento de click que pausa el sonido
        Esqueleto_Stop.addEventListener('click', ()=>{  
            Boton_Sonido.pause();
            Boton_Audio.pause();
        })

    }
}