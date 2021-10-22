function fn1(param) {
    console.log('1', param);
}

const fn2 = function(param) {
    console.log('2', param);
}

const fn3 = (param) => {
    console.log(3, param);
}

fn1('parametro');

fn2('p');

fn3('p3');


const arr = [0, 1, 4, 2, 45, 1, 3];

console.log(arr.filter((valor, indice, array) => valor > 20));


const ordenarAsc = (varA, varB) => {
    return varA - varB;
}

const ordenarDesc = (varA, varB) => varB - varA;


console.log('ASC', arr.sort((a, b) => ordenarAsc(a, b)));

console.log('DESC', arr.sort(ordenarDesc));