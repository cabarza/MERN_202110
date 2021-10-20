let arreglo = [10, 20, 11, 12, 15, 19];

arreglo = arreglo.sort();

console.log(arreglo);

console.log('Valor menor', arreglo[0]);
console.log('Valor mayor', arreglo[arreglo.length-1]);

const resultadoSuma = arreglo.reduce((suma, valor, i) => suma += valor, 0);

console.log(resultadoSuma/arreglo.length);

let suma = 0;
for(let i=0; i< arreglo.length; i++) {
    suma += arreglo[i];
}

console.log(suma);


arreglo = arreglo.map(valor => valor*valor);
console.log(arreglo);

