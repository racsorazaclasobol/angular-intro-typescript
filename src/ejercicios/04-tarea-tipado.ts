
/*
    ===== Código de TypeScript =====
*/

interface IDireccionSuper {
    calle: string;
    pais: string;
    ciudad: string;
}

interface ISuperHeroe {
    nombre: string;
    edad: number;
    direccion: IDireccionSuper;
    mostrarDireccion: () => string;
}

const superHeroe: ISuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'El gomero',
        pais: 'Chile',
        ciudad: 'Santiago' 
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();

console.log(direccion)