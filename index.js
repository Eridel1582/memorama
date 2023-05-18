const cartas = document.querySelectorAll(".carta");
let Emparejamiento = 0;
let carta1, carta2;
let desactivaCara = false;
let cont

function InvertirCartas({target: ClickCarta}) {
    if(carta1 !== ClickCarta && !desactivaCara) {
        ClickCarta.classList.add("flip");
        if(!carta1) {
            return carta1 = ClickCarta;
        }
        carta2 = ClickCarta;
        desactivaCara = true;
        let carta1img = carta1.querySelector(".Frente img").src,
        Carta2img = carta2.querySelector(".Frente img").src;
        Partida(carta1img, Carta2img);
    }
}

function Partida(img1, img2) {
    if(img1 === img2) {
        Emparejamiento++;
        if(Emparejamiento == 6) {
            setTimeout(() => {
                alert('Ha ganado el juego')
                return MezclarCarta();
            }, 1000);
        }
        carta1.removeEventListener("click", InvertirCartas)
        carta2.removeEventListener("click", InvertirCartas)
        carta1 = carta2 = "";
        return desactivaCara = false;
        
    }
    setTimeout(() => {
        carta1.classList.add("shake")
        carta2.classList.add("shake")
    }, 400)
    setTimeout(() => {
        carta1.classList.remove("shake", "flip")
        carta2.classList.remove("shake", "flip")
        carta1 = carta2 = ""
        desactivaCara = false
    }, 1200)
}
function MezclarCarta() {
    Emparejamiento = 0;
    desactivaCara = false;
    carta1 = carta2 = "";
    let posicion = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
    posicion.sort(() => Math.random() > 0.5 ? 1 : -1)
    cartas.forEach((cartas, i) => {
        cartas.classList.remove("flip")
        let imgTag = cartas.querySelector(".Frente img")
        imgTag.src = `./img-${posicion[i]}.jpg`
        cartas.addEventListener("click", InvertirCartas)
    });
}

MezclarCarta()
    
cartas.forEach(card => {
    card.addEventListener("click", InvertirCartas)
});
