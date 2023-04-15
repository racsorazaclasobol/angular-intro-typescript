/*
    ===== Código de TypeScript =====
*/

class PersonaNomal {

    constructor( 
        public nombre: string,
        public direccion: string,
    ) {}
    
}

// class Heroes extends PersonaNomal {

//     constructor( //Es la funcion que se llama cuando se realiza una instancia de esta clase.
//         private alterEgo: string,
//         public edad:number,
//         public nombreReal: string,
//     ) {
//         super( nombreReal, 'Santiago, Chile' )
//     }   

//     imprimirEdad() {
//         return 'La edad es: ' + this.edad;
//     }

// }

//EN LO POSIBLE PREFERIR ESTE TIPO DE CLASES CON COMPOSICION POR SOBRE LA HERENCIA
class Heroes {

    constructor( //Es la funcion que se llama cuando se realiza una instancia de esta clase.
        public alterEgo: string,
        public edad:number,
        public nombreReal: string,
        public persona: PersonaNomal,
    ) {}   

    imprimirEdad() {
        return 'La edad es: ' + this.edad;
    }

}

const tony      = new PersonaNomal('Tony', 'El Gomero') 
const ironMan   = new Heroes( 'IronMan', 46, 'Jesus de Nasaret', tony );


console.log(ironMan)