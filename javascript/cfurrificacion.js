function ninjaBelt1(ninja, beltColor){
    console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
}
ninjaBelt1('Eileen', 'black');
  
  
function ninjaBelt2(ninja){
    return function belt(beltColor){ //tenga en cuenta el cierre aquí!
        console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
    }
}
const belt = ninjaBelt2('Eileen')
belt('black');



// aquí tenemos una función llamada "Outer" 
function outer() {
    let count = 0; // esta es una variable de recuento que tiene un alcance de la función
    // hay una función interna que incrementa el recuento y luego la consola registra
    function inner() {
        count++;
        console.log(count);
    }
    // we're returning the inner function
    return inner;
}
    
const counter = outer();   // counter es la función que devolvimos al llamar a la función externa
counter();                 // esto consola.log "1"
counter();                 // esto consola.log "2"
counter();                 // esto consola.log "3"
counter();                 // esto consola.log "4"
    
// eso significa que la variable de conteo todavía existe! 
// y se está cambiando aunque no estemos dentro de la función Exterior!
// podemos acceder a contar aquí?
// console.log(count); // no funciona!