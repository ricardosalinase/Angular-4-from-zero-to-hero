
class Avenger {

    nombre:string = "sinNombre";
    equipo:string;
    nombreReal:string;

    puedePelear:boolean = false;
    peleaasGanadas:number = 0;

    constructor(nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
}

let antman:Avenger = new Avenger("antman","cap","Scott Lang");


console.log(antman)