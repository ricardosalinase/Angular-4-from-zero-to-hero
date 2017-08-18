//funciones flechas
let miFunction = function (a){
    return a;
}

let miFunctionF = (a) => a;


let miFuncion2 = function(a:number,b:number){
    return a+b;
}

let miFuncion2F = (a:number,b:number) => a+b;

let miFuncion3 = function(nombre:string){
    nombre = nombre.toUpperCase();
    return nombre;
}
let miFuncion3F = (nombre:string) =>{
    nombre = nombre.toUpperCase();
    return nombre;
}

let nombre = "Pedro";

//funcion de flecha, el this no se ve afectado dentro de una funcion de objeto
let hulk = {
    nombre : "Hulk",
    smash(){
        setTimeout(() =>console.log(this.nombre+ " smash!!"),1500)
        
    }
}
hulk.smash();