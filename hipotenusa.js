let catetoA = Number(prompt('ingrese primer cateto'))
let catetoB = Number(prompt('ingrese segundo cateto'))

let catetoAp = Math.pow(catetoA, 2)
let catetoBp = Math.pow(catetoB, 2)

let hipotenusa = Math.sqrt(catetoAp + catetoBp)

alert(`la hipotenusa es: ${hipotenusa}`)
