"use strict";
//parametros
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento)
        mensaje = quien + " activo la " + objeto + " en la " + momento;
    else
        mensaje = quien + " activo la " + objeto;
    console.log(mensaje);
}
console.log("holactmhijoputa");
activar("juan", "batiseñal", "tarde");
