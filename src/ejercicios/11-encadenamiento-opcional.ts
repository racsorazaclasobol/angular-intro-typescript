/*
    ===== Código de TypeScript =====
*/

/*
El encadenamiento opcional es decirle a una interfaz que una propiedad es opcional.
Esto se define agregando un ? en la interfaz

*/

interface IPasajero {

    nombre: string,
    hijos?: string[],

}

const pasajero1: IPasajero = {
    nombre: 'Oscar',
}

const pasajero2: IPasajero = {
    nombre: 'Melisa',
    hijos: [ 'Oscar', 'Oscar2' ]
}

function imprimeHijos( pasajero: IPasajero ): void {

    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log( cuantosHijos );

}

imprimeHijos( pasajero1 );