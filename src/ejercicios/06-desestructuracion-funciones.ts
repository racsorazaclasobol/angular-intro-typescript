
/*
    ===== Código de TypeScript =====
*/

export interface IProducto {
    desc: string;
    precio: number;
}

const telefono: IProducto = {
    desc: 'Samsung',
    precio: 5000,
}

const tableta: IProducto = {
    desc: 'IPad',
    precio: 6000,
}

export function calculaImpuestoSobreVenta( productos: IProducto[] ): [ number, number ]  {

    let total = 0;

    productos.forEach( ( { precio } ) => {

        total += precio

    });

    return [ total, (total * 0.19)];

}

const articulos = [ telefono, tableta ];

const impuestoSobreVenta = calculaImpuestoSobreVenta( articulos );

console.log('ISV: ' + impuestoSobreVenta);