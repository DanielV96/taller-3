let precio = Number(prompt('Ingrese precio'))

let descu = Number(precio * 0.2)
let siva = Number(precio * 0.15)

let total = precio - descu + siva

// console.log('Precio base:', precio)
// console.log('Valor de IVA sobre base:', siva)
console.log('Descuento 20%:', precio - descu)
console.log('Precio total a pagar:', total)
