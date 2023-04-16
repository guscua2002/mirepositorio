class Card {

    constructor(nombre, cost) {
        this.nombre = nombre;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(nombre, cost, power, res) {
        super(nombre, cost)
        this.power = power;
        this.res = res;
    }
    ataque(poder){
    this.res = this.res - poder;
    }
}

class Effect extends Card {
    constructor(nombre, cost, texto, magnitud) {
        super(nombre, cost)
        this.texto = texto;
        this.magnitud = magnitud;
    }
}

const ninja1 = new Unit("Ninja-rojo", 3, 3, 4);
const ninja2 = new Unit("Ninja-negro", 4, 5, 4);

const efecto1 = new Effect("algoritmo-Dificil", 2, "aumenta resistencia del objetivo", 3)
const efecto2 = new Effect("Rechazo", 1, "reducir resistencia del objetivo", 2)
const efecto3 = new Effect("programacion pareja", 3, "aumenta el poder objetivo", 2)

function jugar() {

    const jugador = document.getElementById("jugador");
    const accion = document.getElementById("accion");
    const destino = document.getElementById("destino");
    let objetivo = 0;


    if (destino.value === "Ninja Rojo") {
        objetivo = 1;
    } else {
        objetivo = 2;
    }
   

    if (accion.value === "Algoritmo dificil") {

        if (objetivo === 1) {
            ninja1.res += efecto1.magnitud;
        } else {
            ninja2.res += efecto1.magnitud;
        }

    } else if (accion.value === "rechazo promesa") {
        if (objetivo === 1) {
            ninja1.res -= efecto2.magnitud;
        } else {
            ninja2.res -= efecto2.magnitud;
        }
    } else if (accion.value === "programacion pareja") {
        if (objetivo === 1) {
            ninja1.power += efecto3.magnitud;
        } else {
            ninja2.power += efecto3.magnitud;
        }
    } else if (accion.value === "Ataque")
        if (objetivo === 1) {
            ninja1.ataque(ninja2.power);
        } else {
            ninja2.ataque(ninja1.power);
        }
    console.log(ninja1);
    console.log(ninja2);
}
console.log(ninja1);
console.log(ninja2);




