/*
    ===== Código de TypeScript =====
*/


/* 
    Los decoradores no son mas que funciones, que expanden sus clases a quien se le asigne, en este caso,
    expandimos las funciones dentro de classDecorator a nuestra clase MiSuperClase.
    Pudiendo así, imprimir reportingURL desde nuestro MiSuperClase.

*/


function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }


@classDecorator
class MiSuperClase {

    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo')
    }

}

const miSuperClase = new MiSuperClase();

console.log( miSuperClase.miPropiedad );
miSuperClase.imprimir();

console.log(miSuperClase.reportingURL);