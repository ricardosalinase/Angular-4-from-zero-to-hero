
// Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;

const PERSONAJE = {
  nombre: nombre,
  edad: edad
};
console.log(PERSONAJE.nombre);

interface heroe{
  nombre:string,
  artesMarciales:string[],
}
// Cree una interfaz que sirva para validar el siguiente objeto
let batman:heroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}
console.log(batman);
// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a:number, b:number ){
  return (a + b) * 2
}
let resultadoDobleF = (a:number,b:number) => (a+b)*2;
console.log(resultadoDobleF(3,4))
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, arma:string="arco",poder?:string){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};
console.log("Superman","puños","rayosX");
console.log("Batman","baticosas");
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo{
  private base:number;
  private altura:number;

	constructor($base: number, $altura: number) {
		this.base = $base;
		this.altura = $altura;
	}
  
  getArea():number{
    return this.base*this.altura;
  }
}
let rect = new Rectangulo(3,4);
console.log(rect.getArea);