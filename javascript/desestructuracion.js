const obj = {
    nombre: 'Ninja',
    cinturon: 'Negro',
    habilidad: 10,
    cursos:{
        MERN: true,
        PYTHON: false
    }
}

const variableNombre = obj.nombre;
const variableCinturon = obj.cinturon;
const variableHabilidad = obj.habilidad;
const varMERN = obj.cursos.MERN;
const varPYTHON = obj.cursos.PYTHON;

console.log(`${variableNombre} ${variableCinturon} ${variableHabilidad}`);

const {nombre: varNombre, cinturon, habilidad, cursos: {MERN, PYTHON}} = obj;

console.log(`${varNombre} ${cinturon} ${habilidad}`);

console.log('MERN', MERN, 'PYTHON', PYTHON);

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };

  const {addresses:[{zipcode: zipcode1},{zipcode: zipcode2, city}], ...persona} = person;

  console.log(zipcode1, zipcode2, city, persona);
  

  const arreglo = [1, 2, 3, 4, 5];
  const arreglo2 = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];

  const [, , var3, ...resto] = arreglo;

  console.log(var3, resto);

  const [cosa, ,elemento, ...otros] = arreglo2;

  console.log(otros, cosa, elemento);

  // const { name, value, checked } = evento.target;

  const array = [...arreglo, 6, 7, 8, 9];

  const array2 = [...arreglo, ...arreglo2];

  console.log(array);

  console.log(array2);

  const p = {...person, edad: 35};

  console.log(p);

  const p2 = {...p, firstName: 'Pepe', edad: 50};

  console.log(p2);

  const {att1, value} = {
                            name:'lastName',
                            value: 'Juanito',
                            att1: 'Otro_Valor',
                            att2: '2'  
                        };

const p3 = {...p2, [att1]: value};

console.log(p3);