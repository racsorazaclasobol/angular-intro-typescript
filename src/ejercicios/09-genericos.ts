/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>( argumento: T ) { //El tipo del argumento será segun lo que se le envie, y no any.
    return argumento;
}

let soyString = queTipoSoy( 'Hola' ) ; //string
let soyNumber = queTipoSoy( 100 ) ;  // number
let soyArreglo = queTipoSoy( [1, 2, 3, 6] ) ;  // number[]

let soyExplicito = queTipoSoy<number>( 100 ) ;  // number




