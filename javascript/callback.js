setTimeout(() => {
    console.log('Hola')
}, 5000);

// setInterval(()=> console.log('Chao'), 1000);

console.log('TERMINO');


let a = 2;
const b = function() { 
    console.log("something"); 
};

function doSomething(x) {
  console.log(typeof(x));
}

doSomething(a);
doSomething('hola');
doSomething(b);


const funcion = (a, b) => b(a);

const alCuadrado = (x) => x**2;

function alCubo(y) {
    return y**3;
}

const concatenar =(arr) => {
    return arr.reduce((concat, valor) => concat += valor, '');
}

console.log(funcion(9, alCuadrado));

console.log(funcion(3, alCubo));

console.log(funcion(['valor 1', 'bla', 'sdasd'], concatenar));

console.log(funcion(1, 2));