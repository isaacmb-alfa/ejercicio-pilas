class Ruta {
    constructor(origen, destino,) {
        this.origen = origen;
        this.destino = destino;
        this.pueblos = [];
    }
    // agregar pueblos
    agregarPueblo(nuevoPueblo) {
        this.pueblos.push(nuevoPueblo);
    }
    //eliminar pueblo
    eliminarPueblo(){
        return this.nuevoPueblo.pop();
    }
    //mostrar la ruta de ida
    mostrarRutaIda(){
        let recorrido = [this.origen, ...this.pueblos, this.destino];
        return recorrido.join(' → ');
    }
    mostrarRecorridoRegreso(){
        let regreso = [this.destino, ...this.pueblos.reverse(), this.origen];
        return regreso.join(' → ');
    }
    mostrarRecorridos(){
        console.log(`Recorrido de ida: ${this.mostrarRutaIda()}`);
        console.log(`Recorrido de regreso: ${this.mostrarRecorridoRegreso()}`);
        
    }

}

const origen = 'Aculco';
const destino = 'Villa del Carbon';
let ruta = new Ruta(origen, destino);
//agregamos todos los Pueblos Mágicos de el Estado de México;
ruta.agregarPueblo('El oro');
ruta.agregarPueblo('Ixtapan de la Sal');
ruta.agregarPueblo('Jilotepec');
ruta.agregarPueblo('Malinalco');
ruta.agregarPueblo('Metepec');
ruta.agregarPueblo('Otumba');
ruta.agregarPueblo('San Juan Teotihuacán');
ruta.agregarPueblo('San Martín de las Piramides');
ruta.agregarPueblo('Topozotlán');
ruta.agregarPueblo('Tonatico');
ruta.agregarPueblo('Valle de Bravo');

// console.log(ruta.mostrarRutaIda());
// console.log(ruta.mostrarRecorridoRegreso()); 
//Muestra los dos recorridos, de ida y regreso
ruta.mostrarRecorridos();




