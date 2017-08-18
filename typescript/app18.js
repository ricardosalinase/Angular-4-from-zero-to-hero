"use strict";
function enviarMision(xmen) {
    console.log("enviado a: " + xmen.nombre);
}
;
function enviarCuartel(xmen) {
    console.log("al cuartel a: " + xmen.nombre);
}
;
var wolverine = {
    nombre: "wolverine",
    poder: "arañar"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
