function calcularProm(a, b, c) {
  const examen1 = a * 0.25
  const examen2 = b * 0.25
  const examen3 = c * 0.5

  const promedioExamenes = examen1 + examen2 + examen3
  return promedioExamenes
}

a = 7
b = 5
c = 10

const promedio = calcularProm(a, b, c)
console.log('El promedio es: ' + promedio)
