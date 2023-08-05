let dia = Number(prompt('Ingrese cantidad de días'))
let hotelYcomida = 850
let otrosGastos = 200

if (dia > 1) {
  console.log(`Cantidad de dias: ${dia}`)
  console.log('Gasto hotel y estadia:', dia * hotelYcomida)
  console.log('Otros gastos:', dia * otrosGastos)
  console.log('Total a pagar:', dia * (hotelYcomida + otrosGastos))
} else {
  console.log('No fuiste seleccionado')
}
