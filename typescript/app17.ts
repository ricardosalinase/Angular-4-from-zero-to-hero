
let prom1 = new Promise( function(resolve,reject){

    setTimeout( ()=>{
        console.log("promesa terminada");
        resolve();

        //reject();
    },1500)
});

console.log('paso1');
prom1.then(function(){
    console.log("ready");
},
function(){
    console.error('fail');
})
console.log('paso2');