// Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.
class PilaObjetos{

    constructor(){
        this.pila = [];
    }

    agregarContenedor(contenedor){
        this.pila.push(contenedor);
    }

    quitarContenedor(){
        return this.pila.pop();
    }
    mostrarCima(){
        return this.pila[this.pila.length -1];
    }
    pilaVacia(){
        return this.pila.length === 0;
    }
    mostrarTamano(){
        return this.pila.length;
    }
}

class Almacen{
    constructor(){
        this.pilaPrimaria = new PilaObjetos();
        this.pilaSecundaria = new PilaObjetos();
    }
    apilarContenedor(contenedor){
        this.pilaPrimaria.agregarContenedor(contenedor);
    }
    retirarContenedor(id){
        //Mueve el contenedor de la pila primaria a la secundaria hasta encontrar el contenedor
        while(!this.pilaPrimaria.pilaVacia() && this.pilaPrimaria.mostrarCima() !== id){
            this.pilaSecundaria.agregarContenedor(this.pilaPrimaria.quitarContenedor());
        }
        //Retirar el contenedor deseado
        if(!this.pilaPrimaria.pilaVacia() && this.pilaPrimaria.mostrarCima() === id){
            this.pilaPrimaria.quitarContenedor();
        } else {
            console.log(`Contenedor con ID ${id} mo encontrado`);
            
        }
    }
    devolverContenedores(){
        while(!this.pilaSecundaria.pilaVacia()){
            this.pilaPrimaria.agregarContenedor(this.pilaSecundaria.quitarContenedor());
        }
    }
    mostrarPilaPrimaria(){
        console.log(`Pila Primaria: ${this.pilaPrimaria.pila}`);
        
    }
    mostrarPilaSecundaria(){
        console.log(`Pila Secundaria: ${this.pilaSecundaria.pila}`);
        
    }
}


const almacen = new Almacen();
almacen.apilarContenedor(1);
almacen.apilarContenedor(2);
almacen.apilarContenedor(3);
almacen.apilarContenedor(4);
almacen.apilarContenedor(5);
almacen.apilarContenedor(6);
almacen.apilarContenedor(7);

console.log('Antes de retirar: ');
almacen.mostrarPilaPrimaria();

almacen.retirarContenedor(4);
console.log('Después de retirar: ');
almacen.mostrarPilaPrimaria();
almacen.mostrarPilaSecundaria();

almacen.devolverContenedores();

console.log('Después de regresar los contenedores: ');
almacen.mostrarPilaPrimaria();
