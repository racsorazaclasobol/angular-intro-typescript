import { IProducto, calculaImpuestoSobreVenta } from "./06-desestructuracion-funciones";

/*
    ===== Código de TypeScript =====
*/


const carritoCompras : IProducto[] = [
    {
        desc: 'Telefono 1',
        precio: 500
    },
    {
        desc: 'Telefono 2',
        precio: 300
    }
];

const [ total, isv ] = calculaImpuestoSobreVenta( carritoCompras );