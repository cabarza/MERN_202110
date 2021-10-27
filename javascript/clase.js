class Persona {

    constructor(nombre, direccion, email) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.email = email;
    }

    caminar() {
        console.log(`${this.nombre} caminando`);
    }
}

class Hombre extends Persona {
    constructor(nombre, direccion, email, barba) {
        super(nombre, direccion, email);
        this.barba = barba;
    }

    caminar() {
        console.log(`El hombre ${this.nombre} está caminando`);
        super.caminar();
    }

    salir() {
        console.log(`El hombre ${this.nombre} ha salido`);
    }
    
}

class Mujer extends Persona {
    constructor(nombre, direccion, email, colorPelo) {
        super(nombre, direccion, email);
        this.colorPelo = colorPelo;
    }

    salir() {
        console.log(`La mujer ${this.nombre} de pelo ${this.colorPelo} ha salido`);
    }
} 

const p1 = new Hombre('Pepe', 'calle a numero 200', 'p1@test.cl', true);
const p2 = new Mujer('María', 'calle a numero 200', 'p2@test.cl', 'negro');

p1.caminar();
p1.salir();

p2.caminar();
p2.salir();

console.log(p1 instanceof Persona);
console.log(p1 instanceof Hombre);
console.log(p1 instanceof Mujer);


console.log(p2 instanceof Persona);
console.log(p2 instanceof Hombre);
console.log(p2 instanceof Mujer);


console.log(typeof p1);

console.log(typeof p2);

console.log(typeof []);

console.log([] instanceof Object);