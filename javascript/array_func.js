const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false, cantidad: 1 },
    { "item": "onions",            "haveIngredient": true, cantidad: 20},
    { "item": "celery",            "haveIngredient": false, cantidad: 10 },
    { "item": "cremini mushrooms", "haveIngredient": false, cantidad: 5 },
    { "item": "butter",            "haveIngredient": true, cantidad:3  }
  ]);

console.log(groceryList.map(gl => gl.item));

console.log(groceryList.filter(gl => !gl.haveIngredient && gl.item.length > 7));

console.log(groceryList.reduce((suma, gl) => suma += gl.cantidad, 0));

console.log(groceryList.find(gl => gl.haveIngredient));

console.log(groceryList.findIndex(gl => gl.haveIngredient));
