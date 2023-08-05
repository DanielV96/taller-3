let horas = Number(prompt('Ingrese el número de horas utilizadas'))

switch (horas) {
  case 1:
    alert(`El precio de estacionamiento es de ${$8000}`)
  case 2:
    alert(`El precio de estacionamiento es de ${$18000}`)

  case 3:
    alert(`El precio de estacionamiento es de ${$28000}`)

  case 4:
    alert(`El precio de estacionamiento es de ${$38000}`)

  case 5:
    alert(`El precio de estacionamiento es de ${$48000}`)

  default:
    alert('Opcion de precio no establecida')
    break
}
