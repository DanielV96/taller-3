// Estrategia funciones y métodos
function formasDePago(valorCompra) {
  const cuota1 = valorCompra
  let cuota2 = valorCompra / 2
  const cuota6 = valorCompra / 6

  let recargoCuota2 = cuota2 * 0.05
  let totalCuota2 = cuota2 + recargoCuota2

  const recargoCuota6 = cuota6 * 0.4
  const totalCuota6 = cuota6 + recargoCuota6

  return {
    cuota1: cuota1.toFixed(2),
    cuota2: cuota2.toFixed(2),
    totalCuota2: totalCuota2.toFixed(2),
    cuota6: cuota6.toFixed(2),
    totalCuota6: totalCuota6.toFixed(2),
  }
}

// Dato de entrada
let valorTotalCompra = 25000

//Datos de salida
let formasPago = formasDePago(valorTotalCompra)
console.log('Formas de pago:')
console.log('1 cuota de $' + formasPago.cuota1)
console.log(
  '2 cuotas de $' +
    formasPago.cuota2 +
    ', con recargo del 5%: $' +
    formasPago.totalCuota2
)
console.log(
  '6 cuotas de $' +
    formasPago.cuota6 +
    ', con recargo del 40%: $' +
    formasPago.totalCuota6
)
