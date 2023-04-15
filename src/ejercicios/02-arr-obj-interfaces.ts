
/*
    ===== Código de TypeScript =====
*/

// let habilidades: (boolean | string | number)[] = ['Bash', 'Counter', 'Healing', 5, false];
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface IPersonaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: IPersonaje = {
    nombre: 'Oscar',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Peru Paleta'

console.table(personaje)