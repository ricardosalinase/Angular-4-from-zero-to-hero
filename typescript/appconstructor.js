"use strict";
var Avenger = (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "sinNombre";
        this.puedePelear = false;
        this.peleaasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger("antman", "cap", "Scott Lang");
console.log(antman);
