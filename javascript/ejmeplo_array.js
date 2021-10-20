var lista = [1, 2, 3, 4, 5, 6];
var y = 3;

function printNumber(lista, y) {
    var z = [];
    for (var i = 0; i < lista.length; i++) {
        //console.log(lista[i]);
        if (lista[i] > y) {
            z.push(lista[i]);
        }
        // condicional si i es mayor que y
    }
    console.log(z.length); // 3
    for (var i = 0; i < z.length; i++) {
        console.log(z[i]); // Imprimirá 4,5,6
    }
}

printNumber(lista, y);