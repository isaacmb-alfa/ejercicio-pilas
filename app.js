// const { animales } = './bd/animales.js';
import {animales} from './bd/animales.js'

function extractPilas(pila, numero) {
    return pila.slice(0, numero);
}


const numRandom = (Math.random() * 234);
const enteroRandom = Math.ceil(numRandom);
console.log(`Generando un numero aleatorio para obtener como cantidad de elementos de la pila, el numero es ${enteroRandom}`);

const resultado = extractPilas(animales, enteroRandom);
console.log(resultado);  
