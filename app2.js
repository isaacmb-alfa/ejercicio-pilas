function reemplazar(pila, nuevo, viejo) {
    // Crear una nueva pila para almacenar los elementos
    let nuevaPila = [];
    let reemplazado = false;

    // Recorrer la pila original
    while (pila.length > 0) {
        let elemento = pila.shift();
        console.log(elemento);
        if (elemento === viejo && !reemplazado) {
            //añadimos el nuevo elemento
            nuevaPila.push(nuevo);
            reemplazado = true;
            //detenemos la ejecución del ciclo
            break;
        } else {
            //si no hay coincidencias, agragamos los elementos sin modificar
            nuevaPila.push(elemento);
        }
    }

    return nuevaPila;
}


let pila = [3, 2, 3, 4, 6, 8, 1, 2, 5, 25];
let nuevo = 30;
let viejo = 6;
let resultado = reemplazar(pila, nuevo, viejo);
console.log(resultado);  



