
interface IReproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalle: IDetalle;
}

interface IDetalle {
    autor: string;
    anio: number;
}

const reproductor: IReproductor = {

    volumen: 50,
    segundo: 120,
    cancion: 'Cachureos',
    detalle: {
        autor: 'Pedro Carcuro',
        anio: 2023
    }
    
}

const { cancion, segundo, volumen, detalle } = reproductor;
const { autor } = detalle;

// console.log('El volumen actual es: ' + volumen)
// console.log('El segundo actual es: ' + segundo)
// console.log('La cancion es: ' + cancion)
// console.log('El autor es: ' + autor)

const dbz: string[] = [ 'Goku', 'Vegeta', 'Krilin' ];

const [ primero, , tercero ] =  dbz;

console.log( primero, tercero );