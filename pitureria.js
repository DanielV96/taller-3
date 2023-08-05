let largo = prompt('Ingresa el largo')
let ancho = prompt('Ingresar el ancho')

let m2 = largo * ancho

if (m2 < 1000) {
  alert('Valor de m2: $850.000')
} else if (m2 >= 1000 && m2 <= 3000) {
  alert('Valor de m2: $11.100.000')
} else if (m2 < 10000 && m2 >= 50000) {
  alert('Valor de m2: $1.295.500.000')
} else if (m2 > 100000 && m2 <= 500000) {
  alert('Valor de m2: $1.205.510.000.000')
} else if (m2 >= 500000 && m2 <= 1000000) {
  alert('Valor de m2: $10.600.000.000.000')
} else {
  alert('Valor no establecido')
}
