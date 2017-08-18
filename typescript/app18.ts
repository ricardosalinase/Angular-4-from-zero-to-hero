
interface Xmen{
    nombre:string,
    poder:string
}

function enviarMision(xmen: Xmen){

    console.log("enviado a: " + xmen.nombre);
};
function enviarCuartel(xmen: Xmen){

    console.log("al cuartel a: " + xmen.nombre);
};
let wolverine:Xmen = {
    nombre: "wolverine",
    poder: "arañar"
};

enviarMision(wolverine);
enviarCuartel(wolverine);