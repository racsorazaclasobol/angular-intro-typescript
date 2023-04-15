
/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {

    // return (a + b).toString();
    return a + b;

}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

const resultado = sumar( 7, 9 );


//Orden: obligatorios -> opcionales -> con datos predifinidos
function multiplicar( numero: number, otroNumero?: number, base: number = 2 ): number {
    return numero * base
}

interface IPersonajeL {

    nombre: string;
    puntosVida: number;
    mostrarHP: () => void

}

const resultadoMultiplicado = multiplicar(10, 50)

function curar( personaje: IPersonajeL, curarX: number ): void {
    
    personaje.puntosVida += curarX;

    console.log( personaje );
    
}

const nuevoPersonaje: IPersonajeL = {

    nombre: 'Oscar',
    puntosVida: 50,
    mostrarHP() {
        console.log("Puntos de vida: " + this.puntosVida)
    }

}

curar( nuevoPersonaje, 50 );

nuevoPersonaje.mostrarHP();

// console.log(resultadoMultiplicado);