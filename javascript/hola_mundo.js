// var funcionX;
// // console.log(xyz);

// let xyz = 0;
// console.log(xyz);
// funcionX();
// // funcionX = 'X';
// console.log(funcionX);


// funcionX = () => {
//     for(let i = 0; i< 10; i++) {
//         console.log('i', i);
//     }
//     const i = 'Hola';
//     console.log('Final', i);
//     console.log(xyz);
// }

// var variableGlobal = 'Global';

function crearArreglo() {
    return [1,5,10,-10, 20];
}


const arreglo = crearArreglo();
console.log('ARREGLO', arreglo);
const arreglo2 = [1,5,10,-10, 20];
console.log('ARREGLO2', arreglo2);
arreglo2.push(15);
console.log('ARREGLO2', arreglo2);

const valor = 5;

for(let i =0; i<arreglo2.length; i++){
    if(arreglo2[i]>valor) {
        console.log(`${arreglo2[i]} es mayor que ${valor}`);
    }
}

for(const valArreglo of arreglo2) {
    if(valArreglo>valor) {
        console.log(`${valArreglo} es mayor que ${valor}`);
    }
}

arreglo2.forEach(valArreglo => valArreglo>valor?console.log(`${valArreglo} es mayor que ${valor}`)
        :console.log(`${valArreglo} es menor 0 igual que ${valor}`));


console.log(true??false);