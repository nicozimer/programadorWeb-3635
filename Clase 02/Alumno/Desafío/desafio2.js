var genero = prompt('Ingresá tu genero')

var edad = prompt('Ingresa tu edad')


if (genero ==='Sr' && edad <= 18) {
    console.log('Sr. usted es menor de edad no puede ingresar')
} else {
    if (genero ==='Sr' && edad >= 18) {
        console.log('Sr. usted es mayor de edad puede ingresar')
    } else {
        if (genero ==='Sra' && edad >= 18) {
            console.log('Sra. usted es mayor de edad puede ingresar')
        } else {
            if (genero ==='Sra' && edad <= 18) {
                console.log('Sr. usted es menor de edad no puede ingresar')

            } else {
                if (genero ==='Sx' && edad >= 18) {
                    console.log('Sx. usted es mayor de edad puede ingresar')
                } else {
                    if (genero ==='Sx' && edad <= 18) {
                        console.log('Sx. usted es menor de edad no puede ingresar')
                    }
                }

            }
        }
    }
}
