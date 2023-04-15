class Ninja {

    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(`Nombre: ${this.nombre}`);
    }
    showStats(){
        console.log(`Nombre : ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }
    drinkSake(){
        this.salud += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");

class Sensei extends Ninja{

    constructor(nombre) {
        super(nombre)
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
        
    }
    speakWisdom(){
        super.drinkSake();
    }
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"

