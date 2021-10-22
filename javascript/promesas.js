const promise = new Promise((resolve, reject) => {
    let counter = 0;
    const intterval = setInterval(() => {
        counter++;
        const valor = Math.random()* 1000;
        if(valor > 900) {
            resolve({ mensaje: 'El valor es aceptable ', 
                        valor: valor , 
                        contador: counter
                    });
            clearInterval(intterval);
        } else if( counter > 5 ){
            reject('El valor no cumple ' + valor  + ' ' + counter);
            clearInterval(intterval);
        }
    }, 1000);
});


promise
    .then(resp => {
        // if(resp.contador > 3) {
        //     console.log('Casi no resulta');
        // } else {
        //     console.log(resp.mensaje);
        // }
        resp.contador>3?console.log('Casi no resulta'):console.log(resp.mensaje);
    })
    .catch(error => console.error('ERROR', error));

console.log('Final');