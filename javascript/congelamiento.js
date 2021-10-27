const array = [1, 2, 3, 4, 5];
array.push(6);

console.log(array);

const array2 = Object.freeze([1,2,3,4,5]);

array2[0] = 0; 

// array2.splice(0, 1);

const array3 = [...array2, 6];

console.log(array2);

console.log(array3);

const obj1 = {
    nombre: 'Nombre',
    email: 'a@a.cl'
}

obj1.apellido = 'Apellido';

console.log(obj1);

const obj2 = Object.freeze({
    nombre: 'Nombre',
    apellido: 'Apellio'
});

obj2.nombre = 'Pepito';

obj2.direccion = 'La dirección';

console.log(obj2);

const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
  ]);


// const sortedGroceries = [...groceryList].sort( (a, b) => a.item.localeCompare(b.item) );

const sortedGroceries = [...groceryList].sort( (a, b) => a.item.localeCompare(b.item));

console.log(sortedGroceries);

console.log('carrots' < 'onions');