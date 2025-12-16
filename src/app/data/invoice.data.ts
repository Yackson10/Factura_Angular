import { Invoice } from "../models/Invoice"

export const invoiceData: Invoice = {
    id: 10201452,
    name: 'Factura de Compra #001',
    client: {
        name: 'Jackson',
        lastName: 'Moreno',
        address: {
            country: 'Colombia',
            city: 'Medellin',
            street: 'Calle 82',
            number: 43-31
        }
    },
    company: {
        name: 'Empresa de ejemplo',
        fiscalNumber: 'FISC123456'
    },
    items: [
        {
            id: 1,
            product: 'Producto 1',
            price: 100,
            quantity: 2
        },
        {
            id: 2,
            product: 'Producto 2',
            price: 50,
            quantity: 3
        },
        {
            id: 3,
            product: 'Producto 3',
            price: 150,
            quantity: 3
        },

    ]
} as Invoice;