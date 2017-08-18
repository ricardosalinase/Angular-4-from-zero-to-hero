
let avenger = {
    nombre: "steve",
    clave: "capitan america",
    poder: "Droga"
}

// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;
let {nombre, clave, poder } = avenger;

console.log(nombre,clave,poder);

let avengers:string[] = [ "Thor", "Steve", "Tony"];

let [ thor,capi,ironman] = avengers;

console.log(thor,capi,ironman);